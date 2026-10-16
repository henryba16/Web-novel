import { callOpenRouter } from './_openrouter.js';
import { NEUTRAL_PLAYER_LABEL } from './_privacy.js';
import { buildAnalyzePrompt, VERSION_ANALYZE } from './_prompts.js';

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

		const routeText = (route || [])
			.map((item, index) => `
Lựa chọn ${index + 1}:
- Tình huống: ${item.scene || 'Không rõ'}
- Bối cảnh: ${item.context || 'Không có'}
- Lựa chọn: ${item.choice || 'Không rõ'}
`)
			.join('\n');

		const empathy =
			stats?.find(s => s.key === 'empathy')?.value ?? 0;

		const awareness =
			stats?.find(s => s.key === 'awareness')?.value ?? 0;

		const safe =
			stats?.find(s => s.key === 'safe')?.value ?? 0;

		// GUARDRAIL-EXCEPTION: analyze-ending intentionally keeps its owner-authored
		// divergence and never imports api/_guardrails.js or contains its canonical block.
		// NOTE 26-09-26: this prompt is the owner-authored "AI Reflection &
		// Decision Analysis" spec and intentionally diverges from the shared
		// guardrail block in api/chat-ending.js + summarize handlers (SYNC
		// discipline now covers chat/summaries only).
		const prompt = buildAnalyzePrompt({ safePlayerName, ending, empathy, awareness, safe, routeText });

		const result = await callOpenRouter({
			messages: [
				{
					role: 'user',
					content: prompt
				}
			],
			maxTokens: 600,
			endpoint: 'analyze-ending'
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

		const analysis =
			data.choices?.[0]?.message?.content ||
			'AI không thể phân tích lúc này.';

		return res.status(200).json({
			analysis,
			model: result.model || undefined
		});

	} catch (error) {
		console.error('Server error:', error);

		return res.status(500).json({
			error: 'Server error'
		});
	}
}
