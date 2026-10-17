import { callOpenRouter } from './_openrouter.js';
import { NEUTRAL_PLAYER_LABEL } from './_privacy.js';
import { buildAnalyzePrompt, VERSION_ANALYZE, buildAnalyzePromptGrounded, VERSION_ANALYZE_V2 } from './_prompts.js';
import { retrieveKnowledge, KB_VERSION, RETRIEVAL_CONSTANTS } from './_kb.js';

// 17-10-26 display guard (second sighting): free models sometimes answer with
// meta-commentary about needing a "specific question" instead of the required
// output contract. Never displayable, even inside valid JSON — treated as a
// contract failure by the textOk gate below.
const META_COMMENTARY_RE = /câu hỏi cụ thể|no specific question/i;

// 17-10-26 contract recovery: `openrouter/free` routing sometimes returns reasoning
// prose followed by the contract object ("The user wants me to ..." then {...}). The
// naive JSON.parse(raw) then threw, so every such call degraded to insufficient_evidence
// even though a valid object was present. Recover the first balanced {...} object
// (string-aware) instead. Pure prose with no object still yields null, so the existing
// guard path (safe copy displayed + raw kept only in limitationNote) is unchanged.
function __parseModelJson(text) {
  const s = String(text == null ? '' : text).trim();
  if (!s) return null;
  let direct = null;
  try { direct = JSON.parse(s); } catch (e) { direct = null; }
  if (direct && typeof direct === 'object' && !Array.isArray(direct)) return direct;
  const start = s.indexOf('{');
  if (start === -1) return null;
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) {
        try {
          const candidate = JSON.parse(s.slice(start, i + 1));
          return (candidate && typeof candidate === 'object' && !Array.isArray(candidate)) ? candidate : null;
        } catch (e) { return null; }
      }
    }
  }
  return null;
}

function deriveTagsFromRequest(ending, route, stats) {
  const words = (txt) => (txt || '').toString().split(/[\s,.;:!?]+/).map(w => w.trim().toLowerCase()).filter(w => w.length >= 3);
  const set = new Set();
  for (const w of words(ending?.name)) set.add(w);
  for (const w of words(ending?.description)) set.add(w);
  if (Array.isArray(route)) for (const item of route.slice(0, 10)) for (const w of words(item?.context)) set.add(w);
  for (const s of (Array.isArray(stats) ? stats : [])) if (typeof s?.key === 'string') set.add(s.key.toLowerCase());
  // neutral game-state tags (no pseudonymization)
  set.add('analyze-ending');
  return Array.from(set).slice(0, 12);
}

export default async function handler(req, res) {
    console.log("=== AI API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        const {
            playerName,
            ending,
            stats,
            route
        } = req.body;

        // A2 pseudonymization (ai-request-contract §2.2): the learner-typed
        // playerName is never forwarded to the provider — it is replaced by
        // the one constant neutral label at every prompt occurrence. The raw
        // value is only measured for a presence/length log (no raw names).
        const safePlayerName = NEUTRAL_PLAYER_LABEL;
        const playerNameProvided =
            typeof playerName === 'string' && playerName.trim().length > 0;

        console.log("PLAYER NAME PROVIDED:", playerNameProvided);
        console.log("PLAYER NAME LENGTH:", playerNameProvided ? String(playerName).trim().length : 0);
        console.log("ENDING:", ending);
        console.log("STATS:", stats);
        console.log("ROUTE LENGTH:", route?.length);

		// B7: routeText now assembles from the clamped route fields (__safeRoute) further below.

		// B7: stats values are coerced to finite numbers before assembly (no unbounded client text reaches the prompt).
		const __statValue = (key) => {
			const raw = (Array.isArray(stats) ? stats : []).find(s => s.key === key)?.value;
			const n = Number(raw);
			return Number.isFinite(n) ? n : 0;
		};

		const empathy = __statValue('empathy');

		const awareness = __statValue('awareness');

		const safe = __statValue('safe');

// --- Phase 02 retrieval-first (deterministic, reviewed-only) ---
		function __ew(txt) { return (txt || '').toString().split(/[\s,.;:!?]+/).map(w => w.trim().toLowerCase()).filter(w => w.length >= 3); }
		function __tags(ending, route, stats) {
			const s = new Set();
			// Deterministic retrieval tag set (INTERNAL only: tags select reviewed KB
			// records and are never sent to the provider — only matched snippet text
			// enters the prompt). The endpoint anchor is added first, then per-field
			// budgets keep every signal represented: a long Vietnamese description can
			// no longer starve the route (situation/choice) signals out of the set.
			s.add('analyze-ending');
			if (Array.isArray(stats)) for (const row of stats) if (typeof row?.key === 'string') s.add(row.key.toLowerCase());
			for (const w of __ew(ending && ending.name).slice(0, 4)) s.add(w);
			for (const w of __ew(ending && ending.description).slice(0, 8)) s.add(w);
			if (Array.isArray(route)) for (const it of route.slice(0, 6)) {
				for (const w of __ew(it && it.context).slice(0, 4)) s.add(w);
				for (const w of __ew(it && it.choice).slice(0, 4)) s.add(w);
			}
			return Array.from(s).slice(0, 48);
		}
		const __safeEnding = ending && typeof ending === 'object'
			? { name: typeof ending.name === 'string' ? ending.name.slice(0,160) : '', description: typeof ending.description === 'string' ? ending.description.slice(0,400) : '' }
			: {};
		const __safeRoute = Array.isArray(route) ? route.slice(0, 10).map((it) => ({
			chapter: typeof it?.chapter === 'number' ? it.chapter : null,
			scene: typeof it?.scene === 'string' ? it.scene.slice(0, 160) : (it?.scene != null ? String(it.scene).slice(0, 160) : null),
			context: typeof it?.context === 'string' ? it.context.slice(0, 240) : (it?.context != null ? String(it.context).slice(0, 240) : null),
			choice: typeof it?.choice === 'string' ? it.choice.slice(0, 240) : (it?.choice != null ? String(it.choice).slice(0, 240) : null)
		})) : [];
		// B7: routeText assembles only from the clamped fields above (raw route never reaches the prompt).
		const routeText = __safeRoute
			.map((item, index) => `
Lựa chọn ${index + 1}:
- Tình huống: ${item.scene || 'Không rõ'}
- Bối cảnh: ${item.context || 'Không có'}
- Lựa chọn: ${item.choice || 'Không rõ'}
`)
			.join('\n');
		// 2026-10-17: tags derived from the actual ending/route/stats (chat parity).
		// The previous fixed placeholder list made analyze retrieval ending-independent.
		const __providedTags = __tags(__safeEnding, __safeRoute, stats);
		const __retrieved = retrieveKnowledge({ tags: __providedTags, minEvidence: 1, maxK: 3, requireReviewed: true });
		const __hasSources = __retrieved.status === 'grounded' && Array.isArray(__retrieved.snippets) && __retrieved.snippets.length > 0;
		console.log('RETRIEVAL analyze:', JSON.stringify({ tags: __providedTags, eligible: __retrieved.eligibleCount, snippets: __retrieved.citationIds, status: __retrieved.status }));


		// GUARDRAIL-EXCEPTION: analyze-ending intentionally keeps its owner-authored
		// divergence and never imports api/_guardrails.js or contains its canonical block.
		// NOTE 26-09-26: this prompt is the owner-authored "AI Reflection &
		// Decision Analysis" spec and intentionally diverges from the shared
		// guardrail block in api/chat-ending.js + summarize handlers (SYNC
		// discipline now covers chat/summaries only).
		let analysis = '';
		let status = 'insufficient_evidence';
		let citations = [];
		let limitationNote = null;
		let model = undefined;
		let __modelCalled = false;

		if (__hasSources) {
			const prompt = buildAnalyzePromptGrounded({ safePlayerName, ending: __safeEnding, empathy, awareness, safe, routeText, sources: __retrieved.snippets });
			const result = await callOpenRouter({ messages: [{ role:'user', content: prompt }], maxTokens: 600, endpoint: 'analyze-ending' });
			if (!result.ok) {
				console.error('OpenRouter error (analyze):', result.errorText);
				status = 'insufficient_evidence';
				analysis = '';
				limitationNote = result.errorText || 'provider error';
				model = undefined;
			} else {
				const data = result.data;
				const raw = String(data?.choices?.[0]?.message?.content || '').trim();
				const parsed = __parseModelJson(raw);
				const prov = Array.isArray(__retrieved.citationIds) ? __retrieved.citationIds : [];
				if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
					// Contract guard (17-10-26): display text must be a non-empty string text field;
					// raw / non-text model output is never displayed (kept in limitationNote only).
					const textOk = typeof parsed.text === 'string' && parsed.text.trim().length > 0 && !META_COMMENTARY_RE.test(parsed.text);
					analysis = textOk ? parsed.text : '';
					const invalid = Array.isArray(parsed.citations) && parsed.citations.some(c => !prov.includes(String(c)));
					citations = Array.isArray(parsed.citations) ? parsed.citations.filter(c => prov.includes(String(c))) : [];
					if (invalid || !textOk) { status = 'insufficient_evidence'; citations = []; }
					else { status = (parsed.status === 'grounded') ? 'grounded' : 'insufficient_evidence'; }
					const suppressed = (!textOk && typeof parsed.text === 'string' && parsed.text.trim()) ? parsed.text.trim().slice(0, 300) : null;
					limitationNote = typeof parsed.limitationNote === 'string' ? parsed.limitationNote.slice(0, 300) : suppressed;
				} else {
					// Contract failure (non-JSON model output): never display raw text; keep it in limitationNote only.
					status = 'insufficient_evidence'; analysis = ''; citations = []; limitationNote = raw ? raw.slice(0, 300) : null;
				}
				model = result.model || undefined;
			}
		} else {
			// No reviewed KB snippet matched this ending/route/stats → student AI
			// still engages with a simple, non-grounded, comforting reflection
			// (no KB, no clinical/medical framing). Teacher AI endpoints untouched.
			__modelCalled = true;
			const simplePrompt = buildAnalyzePromptSimple({
				safePlayerName, ending: __safeEnding, empathy, awareness, safe, routeText
			});
			const result2 = await callOpenRouter({
				messages: [{ role: 'user', content: simplePrompt }],
				maxTokens: 450,
				endpoint: 'analyze-ending'
			});
			if (!result2.ok) {
				console.error('OpenRouter error (analyze simple):', result2.errorText);
				status = 'insufficient_evidence';
				analysis = '';
				citations = [];
				limitationNote = result2.errorText || 'provider error';
				model = undefined;
			} else {
				const raw = String(result2.data?.choices?.[0]?.message?.content || '').trim();
				const textOk = raw.length > 0 && !META_COMMENTARY_RE.test(raw);
				analysis = textOk ? raw : '';
				citations = [];
				limitationNote = textOk ? null : (raw ? raw.slice(0, 300) : null);
				status = textOk ? 'grounded' : 'insufficient_evidence';
				model = result2.model || undefined;
			}
		}

		if (status === 'insufficient_evidence' && !analysis) {
			// Vietnamese fallback (17-10-26): covers the no-source path AND the contract-failure path above.
			analysis = 'Chưa thể tạo nhận xét có căn cứ từ dữ liệu hiện có. Một câu hỏi trung lập để bạn tự suy ngẫm: lựa chọn nào trong câu chuyện khiến bạn nhớ nhất, và vì sao?';
		}

		// Debug: why did we land on insufficient_evidence?
		//   reason 'no_supported_snippet'  = KB found no reviewed snippet for this ending/route/stats
		//   reason 'insufficient_support'  = KB had snippets but OpenRouter output failed the contract gate
		console.log(JSON.stringify({
			event: 'analyze_debug',
			status: status,
			reason: __hasSources ? 'insufficient_support' : 'no_supported_snippet',
			hasSources: __hasSources,
			eligibleCount: __retrieved.eligibleCount,
			modelCalled: __modelCalled,
			model: model,
			citations: citations.length,
			ts: Date.now(),
			endpoint: 'analyze-ending'
		}));

		if (status === 'insufficient_evidence') {
			// B4: Endpoint refusal record (supplemented schema: reason no_supported_snippet | insufficient_support)
			console.log(JSON.stringify({
				event: 'refusal_limitation',
				reason: __hasSources ? 'insufficient_support' : 'no_supported_snippet',
				ts: Date.now(),
				endpoint: 'analyze-ending',
				request_id: (req.headers['x-request-id'] || req.headers['request-id'] || 'unknown')
			}));
		}

		console.log('RESPONSE STATUS:', status, 'citations:', citations.length, 'model:', model, 'KB_VERSION:', KB_VERSION, 'hi', JSON.stringify({ tags: __providedTags, sourceIds: __retrieved.citationIds }));

		return res.status(200).json({
			analysis,
			status,
			citations,
			sources: (status === 'grounded') ? __retrieved.snippets.map(s => ({ id: s.id, title: s.sourceTitle || s.title })) : [],
			limitationNote,
			model
		});

	} catch (error) {
		console.error('Server error:', error);

		return res.status(500).json({
			error: 'Server error'
		});
	}
}
