import { callOpenRouter } from './_openrouter.js';
import { NEUTRAL_PLAYER_LABEL } from './_privacy.js';
import { buildChatPrompt, VERSION_CHAT, buildChatPromptGrounded, VERSION_CHAT_V2 } from './_prompts.js';
import { retrieveKnowledge, KB_VERSION } from './_kb.js';
import { GUARDRAIL_BLOCK } from './_guardrails.js';

// 17-10-26 display guard (second sighting): free models sometimes answer with
// meta-commentary about needing a "specific question" instead of the required
// output contract. Never displayable, even inside valid JSON — treated as a
// contract failure by the textOk gate below.
const META_COMMENTARY_RE = /câu hỏi cụ thể|no specific question/i;

function __ew(txt) { return (txt || '').toString().split(/[\s,.;:!?]+/).map(w => w.trim().toLowerCase()).filter(w => w.length >= 3); }
function __tags(ed, q, hist) {
  const s = new Set();
  // Endpoint tag FIRST: it is the guaranteed retrieval anchor for the reviewed
  // KB record. The slice(0, 12) cap must never drop it — realistic ending text
  // fills 12+ tags before a trailing add would survive.
  s.add('chat-ending');
  for (const w of __ew(ed?.ending?.name)) s.add(w);
  for (const w of __ew(ed?.ending?.description)) s.add(w);
  for (const w of __ew(q)) s.add(w);
  if (Array.isArray(ed?.stats)) for (const st of ed.stats) if (typeof st?.key === 'string') s.add(st.key.toLowerCase());
  if (Array.isArray(hist)) for (const t of (hist || []).slice(-3)) if (typeof t?.content === 'string') __ew(t.content).forEach(w => s.add(w));
  return Array.from(s).slice(0, 12);
}

export default async function handler(req, res) {
    console.log("=== CHAT AI API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { endingData, history, question } = req.body || {};

        const safeQuestion = typeof question === "string" ? question.slice(0, 500) : '';

        // A2 pseudonymization: NEUTRAL_PLAYER_LABEL for playerId, NEVER raw playerName forward.
        const safePlayerName = NEUTRAL_PLAYER_LABEL;
        const playerNameProvided =
            typeof endingData?.playerName === "string" && endingData.playerName.trim().length > 0;

        if (!safeQuestion.trim()) {
            return res.status(400).json({
                error: 'Câu hỏi trống. Hãy nhập câu hỏi trước khi gửi.'
            });
        }

        const safeHistory = Array.isArray(history)
            ? history
                .filter((turn) => turn && (turn.role === 'user' || turn.role === 'assistant') && typeof turn.content === 'string')
                .map((turn) => ({ role: turn.role, content: turn.content.slice(0, 1000) }))
                .slice(-10)
            : [];

        console.log("PLAYER NAME PROVIDED:", playerNameProvided);
        console.log("PLAYER NAME LENGTH:", playerNameProvided ? String(endingData.playerName).trim().length : 0);
        console.log("ENDING:", endingData?.ending);
        console.log("HISTORY TURNS:", safeHistory.length);
        console.log("QUESTION LENGTH:", safeQuestion.length);

        const transcriptText = safeHistory
            .map((turn) =>
                turn.role === 'user'
                    ? 'Người chơi hỏi: ' + turn.content
                    : 'AI đã trả lời: ' + turn.content)
            .join('\n');

        // B7: stats values coerced to finite numbers (defense-in-depth; the v2 chat prompt does not assemble them).
        const __statValue = (key) => {
            const raw = (Array.isArray(endingData?.stats) ? endingData.stats : []).find(s => s.key === key)?.value;
            const n = Number(raw);
            return Number.isFinite(n) ? n : 0;
        };
        const empathy = __statValue('empathy');
        const awareness = __statValue('awareness');
        const safe = __statValue('safe');

        // Phase 02: tag-based deterministic retrieval (no embeddings), reviewed-only.
        const __providedTags = __tags(endingData || {}, safeQuestion, safeHistory);
        const __retrieved = retrieveKnowledge({ tags: __providedTags, minEvidence: 1, maxK: 3, requireReviewed: true });
        const __hasSources = __retrieved.status === 'grounded' && Array.isArray(__retrieved.snippets) && __retrieved.snippets.length > 0;

        console.log('RETRIEVAL chat:', JSON.stringify({ tagCount: __providedTags.length, eligible: __retrieved.eligibleCount, snippets: __retrieved.citationIds, status: __retrieved.status }));

        // response contract (v2) fields; preserve reply/model keys for legacy clients
        let status = 'insufficient_evidence';
        let reply = '';
        let citations = [];
        let limitationNote = null;
        let model = undefined;

        if (__hasSources) {
            // B7: clamp the client-controlled ending name before assembly (analyze v2 parity: <=160 chars).
            const __safeEndingName = typeof endingData?.ending?.name === 'string'
                ? endingData.ending.name.slice(0, 160)
                : (endingData?.ending?.name != null ? String(endingData.ending.name).slice(0, 160) : undefined);
            const prompt = buildChatPromptGrounded({
                safePlayerName,
                safeQuestion,
                endingData: { ending: { name: __safeEndingName } },
                transcriptText: transcriptText || '',
                sources: __retrieved.snippets
            });

            const result = await callOpenRouter({
                messages: [{ role: 'user', content: prompt }],
                maxTokens: 400,
                endpoint: 'chat-ending'
            });

            if (!result.ok) {
                console.error('OpenRouter error (chat):', result.errorText);
                status = 'insufficient_evidence';
                reply = 'AI hiện không thể trả lời lúc này. Vui lòng thử lại sau.';
                limitationNote = result.errorText || 'provider error';
                model = undefined;
            } else {
                const data = result.data;
                const raw = String(data?.choices?.[0]?.message?.content || '').trim();
                let parsed = null;
                try { parsed = JSON.parse(raw); } catch { parsed = null; }
                const prov = Array.isArray(__retrieved.citationIds) ? __retrieved.citationIds : [];
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    // Contract guard (17-10-26): only a non-empty string text field is displayable;
                    // raw / non-text model output is never shown (kept in limitationNote only).
                    const textOk = typeof parsed.text === 'string' && parsed.text.trim().length > 0 && !META_COMMENTARY_RE.test(parsed.text);
                    reply = textOk ? parsed.text : '';
                    const invalid = (Array.isArray(parsed.citations) ? parsed.citations : []).some(c => !prov.includes(String(c)));
                    citations = Array.isArray(parsed.citations) ? parsed.citations.filter(c => prov.includes(String(c))) : [];
                    status = (!textOk || invalid || parsed.status !== 'grounded') ? 'insufficient_evidence' : 'grounded';
                    if (status === 'insufficient_evidence') citations = [];
                    const suppressed = (!textOk && typeof parsed.text === 'string' && parsed.text.trim()) ? parsed.text.trim().slice(0, 300) : null;
                    limitationNote = typeof parsed.limitationNote === 'string' ? parsed.limitationNote.slice(0, 300) : suppressed;
                } else {
                    status = 'insufficient_evidence';
                    // Contract failure (non-JSON model output): never display raw text; keep it in limitationNote only.
                    reply = '';
                    citations = [];
                    limitationNote = raw ? raw.slice(0, 300) : null;
                }
                model = result.model || undefined;
            }
        } else {
            status = 'insufficient_evidence';
            reply = 'Chưa đủ nguồn đã xem xét để trả lời có căn cứ. Gợi ý trung tính: bạn có thể hỏi một câu nhẹ nhàng hơn về hoàn cảnh này.';
            citations = [];
            limitationNote = 'eligible=' + __retrieved.eligibleCount + '; min=' + __retrieved.minEvidence;
            console.log('CHAT GROUNDING INSUFFICIENT', JSON.stringify({ tagCount: __providedTags.length, eligible: __retrieved.eligibleCount, min: __retrieved.minEvidence }));
        }

        if (status === 'insufficient_evidence' && !reply) {
            reply = 'Chưa đủ nguồn để trả lời có căn cứ. Một câu hỏi gợi mở trung lập: phần nào của nhận xét này bạn thấy liên quan nhất đến các lựa chọn của mình?';
        }

        if (status === 'insufficient_evidence') {
            // B4: Endpoint refusal record (parity with analyze-ending; supplemented schema: no_supported_snippet | insufficient_support)
            console.log(JSON.stringify({
                event: 'refusal_limitation',
                reason: __hasSources ? 'insufficient_support' : 'no_supported_snippet',
                ts: Date.now(),
                endpoint: 'chat-ending',
                request_id: (req.headers['x-request-id'] || req.headers['request-id'] || 'unknown')
            }));
        }

        console.log('RESPONSE STATUS chat:', status, 'citations:', citations.length, 'model:', model, 'KB_VERSION:', KB_VERSION);
        return res.status(200).json({
            reply,
            status,
            citations,
            sources: (status === 'grounded') ? __retrieved.snippets.map(s => ({ id: s.id, title: s.sourceTitle || s.title })) : [],
            limitationNote,
            model
        });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
}