import { callOpenRouter } from './_openrouter.js';
import { NEUTRAL_PLAYER_LABEL } from './_privacy.js';
import { buildChatPrompt, VERSION_CHAT } from './_prompts.js';
import { GUARDRAIL_BLOCK } from './_guardrails.js';

export default async function handler(req, res) {
    console.log("=== CHAT AI API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        const {
            endingData,
            history,
            question
        } = req.body;

        // Guardrail SYNC (ai-request-contract §4): the shared guardrail block
        // lives in api/_guardrails.js and is imported by exactly 3 handlers —
        // this file, summarize-student, summarize-class. analyze-ending.js is
        // a named pinned-hash exception (intentional divergence, NOTE 26-09-26).
        const safeQuestion = typeof question === 'string'
            ? question.slice(0, 500)
            : '';

        // A2 pseudonymization (ai-request-contract §2.2): the learner-typed
        // playerName is never forwarded to the provider — it is replaced by
        // the one constant neutral label at every prompt occurrence.
        const safePlayerName = NEUTRAL_PLAYER_LABEL;
        const playerNameProvided =
            typeof endingData?.playerName === 'string' && endingData.playerName.trim().length > 0;

        if (!safeQuestion.trim()) {
            return res.status(400).json({
                error: 'Câu hỏi trống. Hãy nhập câu hỏi trước khi gửi.'
            });
        }

        const safeHistory = Array.isArray(history)
            ? history
                .filter((turn) =>
                    turn &&
                    (turn.role === 'user' || turn.role === 'assistant') &&
                    typeof turn.content === 'string'
                )
                .map((turn) => ({
                    role: turn.role,
                    content: turn.content.slice(0, 1000)
                }))
                .slice(-10)
            : [];

        console.log("PLAYER NAME PROVIDED:", playerNameProvided);
        console.log("PLAYER NAME LENGTH:", playerNameProvided ? String(endingData.playerName).trim().length : 0);
        console.log("ENDING:", endingData?.ending);
        console.log("HISTORY TURNS:", safeHistory.length);
        console.log("QUESTION LENGTH:", safeQuestion.length);

        const routeText = (endingData?.route || [])
            .map((item, index) => `
Lựa chọn ${index + 1}:
- Tình huống: ${item.scene || 'Không rõ'}
- Bối cảnh: ${item.context || 'Không có'}
- Lựa chọn: ${item.choice || 'Không rõ'}
`)
            .join('\n');

        const empathy =
            endingData?.stats?.find(s => s.key === 'empathy')?.value ?? 0;

        const awareness =
            endingData?.stats?.find(s => s.key === 'awareness')?.value ?? 0;

        const safe =
            endingData?.stats?.find(s => s.key === 'safe')?.value ?? 0;

        const transcriptText = safeHistory
            .map((turn) =>
                turn.role === 'user'
                    ? `Người chơi hỏi: ${turn.content}`
                    : `AI đã trả lời: ${turn.content}`
            )
            .join('\n');

        const prompt = buildChatPrompt({ safePlayerName, endingData, empathy, awareness, safe, routeText, transcriptText, safeQuestion });

        const result = await callOpenRouter({
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            maxTokens: 400,
            endpoint: 'chat-ending'
        });

        if (!result.ok) {
            console.error(
                'OpenRouter error:',
                result.errorText
            );

            return res.status(result.status).json({
                error: result.errorText
            });
        }

        const data = result.data;

        const reply =
            data.choices?.[0]?.message?.content ||
            'AI không thể trả lời lúc này.';

        return res.status(200).json({
            reply,
            model: result.model || undefined
        });

    } catch (error) {
        console.error('Server error:', error);

        return res.status(500).json({
            error: 'Server error'
        });
    }
}
