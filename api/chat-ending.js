import { callOpenRouter } from './_openrouter.js';

export default async function handler(req, res) {
    console.log("=== CHAT AI API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        console.log(
            "API KEY:",
            process.env.OPENROUTER_API_KEY
                ? "FOUND"
                : "NOT FOUND"
        );

        const {
            endingData,
            history,
            question
        } = req.body;

        // SYNC: guardrail block mirrors api/analyze-ending.js — any guardrail
        // edit must be mirrored in both files before the change is called done.
        const safeQuestion = typeof question === 'string'
            ? question.slice(0, 500)
            : '';

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

        console.log("PLAYER:", endingData?.playerName);
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

        const prompt = `
Bạn là AI trò chuyện cho SchoolShield,
một visual novel giáo dục về sự cô lập xã hội,
định kiến, bắt nạt học đường và vai trò của người chứng kiến.

Người chơi vừa nhận phần nhận xét đầu tiên
về quá trình ra quyết định của mình
và giờ đang hỏi tiếp trong cùng cuộc trò chuyện.

Tên người chơi:
${endingData?.playerName || 'Người chơi'}

ENDING:
${endingData?.ending?.name || 'Không rõ'}

MÔ TẢ ENDING:
${endingData?.ending?.description || 'Không có'}

CHỈ SỐ:
- Đồng cảm: ${empathy}/100
- Nhận diện: ${awareness}/100
- An toàn: ${safe}/100

LỊCH SỬ LỰA CHỌN:
${routeText}

ĐOẠN HỘI THOẠI TRƯỚC ĐÓ:
${transcriptText || '(chưa có — đây là câu hỏi đầu tiên)'}

CÂU HỎI MỚI CỦA NGƯỜI CHƠI:
${safeQuestion}

Hãy trả lời bằng tiếng Việt,
khoảng 80-150 từ,
gắn với ending, các lựa chọn
và đoạn hội thoại trên của chính người chơi này.

YÊU CẦU:

- Không chẩn đoán tâm lý.
- Không gán nhãn tính cách.
- Không phán xét người chơi.
- Không gọi người chơi là "tốt" hoặc "xấu".
- Không thay đổi hoặc phủ nhận ending của game.
- Không nói rằng một lựa chọn duy nhất quyết định con người của người chơi.
- Phản hồi mang tính giáo dục và khuyến khích tự suy ngẫm.
- Chỉ dùng chữ Latin (tiếng Việt có dấu); tuyệt đối không dùng ký tự Trung/Nhật/Hàn.`;

        const result = await callOpenRouter({
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
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
