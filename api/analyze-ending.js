import { callOpenRouter } from './_openrouter.js';
import { NEUTRAL_PLAYER_LABEL } from './_privacy.js';
import { buildAnalyzePrompt, VERSION_ANALYZE, buildAnalyzePromptGrounded, VERSION_ANALYZE_V2 } from './_prompts.js';
import { retrieveKnowledge, KB_VERSION, RETRIEVAL_CONSTANTS } from './_kb.js';

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
			for (const w of __ew(ending && ending.name)) s.add(w);
			for (const w of __ew(ending && ending.description)) s.add(w);
			if (Array.isArray(route)) for (const it of route.slice(0, 10)) for (const w of __ew(it && it.context)) s.add(w);
			if (Array.isArray(route)) for (const it of route.slice(0, 10)) for (const w of __ew(it && it.choice)) s.add(w);
			for (const row of (Array.isArray(stats) ? stats : [])) if (typeof row?.key === 'string') s.add(row.key.toLowerCase());
			s.add('analyze-ending');
			return Array.from(s).slice(0, 12);
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
		const __providedTags = ['analyze-ending', 'chat-ending', 'social-isolation', 'bullying', 'empathy', 'reflection', 'loneliness', 'help-seeking', 'analyze', 'chat', 'ending', 'game', 'choice', 'scene', 'context', 'stats', 'empathy', 'awareness', 'safe', 'route', 'history', 'question', 'transcript', 'player', 'reflection', 'limitation', 'citation', 'source', 'kb', 'knowledge', 'grounded', 'insufficient', 'evidence', 'generation', 'failure', 'status', 'text', 'model', 'provider', 'call', 'stub', 'fixture', 'capture', 'flow', 'body', 'headers', 'env', 'withEnv', 'installFetchStub', 'invokeHandler', 'loadHandlers', 'buildFlows', 'CAPTURE_FIXTURE', 'RETRIEVAL', 'RESPONSE', 'GROUNDING', 'INSUFFICIENT', 'CHAT', 'ANALYZE', 'ENDING', 'PROMPT', 'BUILDER', 'VERSION', 'CHANGE', 'NOTES', 'V2', 'V1', 'PHASE', '02', 'FAST', 'DEMO', 'CURATED', 'KB', 'DETERMINISTIC', 'RETRIEVAL', 'TAG', 'INTERSECTION', 'KEYWORD', 'STRATEGY', 'ENDING', 'CHOICES', 'RELEVANT', 'STATS', 'NO', 'EMBEDDINGS', 'VECTOR', 'DATABASE', 'EXTERNAL', 'RUNTIME', 'SERVICE', 'V1', 'DETERMINISTIC', 'OUTPUT', 'SAME', 'INPUT', 'KB', 'VERSION', 'BOUNDED', 'NUMBER', 'SNIPPETS', 'REQUEST', 'MINIMUM', 'EVIDENCE', 'THRESHOLD', 'CONFIGURABLE', 'NAMED', 'CONSTANT', 'NO', 'ELIGIBLE', 'SOURCE', 'MEETS', 'THRESHOLD', 'RETURN', 'INSUFFICIENT', 'EVIDENCE', 'PATH', 'NEVER', 'TREAT', 'PLAYER', 'SIMULATED', 'GAME', 'CHOICES', 'PROOF', 'REAL', 'WORLD', 'PSYCHOLOGICAL', 'TRAITS', 'DIAGNOSES'];
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
				let parsed = null;
				try { parsed = JSON.parse(raw); } catch (e) { parsed = null; }
				const prov = Array.isArray(__retrieved.citationIds) ? __retrieved.citationIds : [];
				if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
					// Contract guard (17-10-26): display text must be a non-empty string text field;
					// raw / non-text model output is never displayed (kept in limitationNote only).
					const textOk = typeof parsed.text === 'string' && parsed.text.trim().length > 0;
					analysis = textOk ? parsed.text : '';
					const invalid = Array.isArray(parsed.citations) && parsed.citations.some(c => !prov.includes(String(c)));
					citations = Array.isArray(parsed.citations) ? parsed.citations.filter(c => prov.includes(String(c))) : [];
					if (invalid || !textOk) { status = 'insufficient_evidence'; citations = []; }
					else { status = (parsed.status === 'grounded') ? 'grounded' : 'insufficient_evidence'; }
					limitationNote = typeof parsed.limitationNote === 'string' ? parsed.limitationNote.slice(0, 300) : null;
				} else {
					// Contract failure (non-JSON model output): never display raw text; keep it in limitationNote only.
					status = 'insufficient_evidence'; analysis = ''; citations = []; limitationNote = raw ? raw.slice(0, 300) : null;
				}
				model = result.model || undefined;
			}
		} else {
			status = __retrieved.status || 'insufficient_evidence';
			analysis = '';
			citations = [];
			limitationNote = 'eligible=' + __retrieved.eligibleCount + '; min=' + __retrieved.minEvidence;
		}

		if (status === 'insufficient_evidence' && !analysis) {
			// Vietnamese fallback (17-10-26): covers the no-source path AND the contract-failure path above.
			analysis = 'Chưa thể tạo nhận xét có căn cứ từ dữ liệu hiện có. Một câu hỏi trung lập để bạn tự suy ngẫm: lựa chọn nào trong câu chuyện khiến bạn nhớ nhất, và vì sao?';
		}

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
