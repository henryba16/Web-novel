export default async function handler(req, res) {
    console.log("=== AI API CALLED ===");

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
            playerName,
            ending,
            stats,
            route
        } = req.body;

        console.log("PLAYER:", playerName);
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

		// SYNC: guardrail block mirrors api/chat-ending.js — any guardrail
		// edit must be mirrored in both files before the change is called done.
		const prompt = `
Bạn là AI phản hồi cho SchoolShield,
một visual novel giáo dục về sự cô lập xã hội,
định kiến, bắt nạt học đường và vai trò của người chứng kiến.

Hãy phân tích QUÁ TRÌNH RA QUYẾT ĐỊNH của người chơi,
không chỉ dựa vào ending cuối cùng.

Tên người chơi:
${playerName || 'Người chơi'}

ENDING:
${ending?.name || 'Không rõ'}

MÔ TẢ ENDING:
${ending?.description || 'Không có'}

CHỈ SỐ:
- Đồng cảm: ${empathy}/100
- Nhận diện: ${awareness}/100
- An toàn: ${safe}/100

LỊCH SỬ LỰA CHỌN:
${routeText}

Hãy viết một phản hồi bằng tiếng Việt,
khoảng 150-250 từ.

Tập trung vào:

1. Người chơi thường chú ý đến điều gì?
2. Người chơi có xu hướng ưu tiên đồng cảm,
   nhận diện vấn đề hay an toàn?
3. Một vài lựa chọn đáng chú ý.
4. Những lựa chọn đó có thể tạo ra tác động gì?
5. Một điều người chơi có thể suy nghĩ thêm sau khi chơi.

YÊU CẦU:

- Không chẩn đoán tâm lý.
- Không gán nhãn tính cách.
- Không phán xét người chơi.
- Không gọi người chơi là "tốt" hoặc "xấu".
- Không thay đổi hoặc phủ nhận ending của game.
- Không nói rằng một lựa chọn duy nhất quyết định con người của người chơi.
- Phản hồi mang tính giáo dục và khuyến khích tự suy ngẫm.
`;

		const response = await fetch(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				method: 'POST',

				headers: {
					'Authorization':
						`Bearer ${process.env.OPENROUTER_API_KEY}`,
					'Content-Type': 'application/json'
				},

				body: JSON.stringify({
					model: 'openrouter/free',

					messages: [
						{
							role: 'user',
							content: prompt
						}
					]
				})
			}
		);

		if (!response.ok) {
            const errorText = await response.text();

            console.error(
                'OpenRouter error:',
                errorText
            );

            return res.status(response.status).json({
                error: errorText
            });
        }

		const data = await response.json();

		const analysis =
			data.choices?.[0]?.message?.content ||
			'AI không thể phân tích lúc này.';

		return res.status(200).json({
			analysis
		});

	} catch (error) {
		console.error('Server error:', error);

		return res.status(500).json({
			error: 'Server error'
		});
	}
}