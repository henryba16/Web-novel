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

		// NOTE 26-09-26: this prompt is the owner-authored "AI Reflection &
		// Decision Analysis" spec and intentionally diverges from the shared
		// guardrail block in api/chat-ending.js + summarize handlers (SYNC
		// discipline now covers chat/summaries only).
		const prompt = `
Bạn là AI phản tư của SchoolShield (visual novel giáo dục: cô lập xã hội, định kiến, bạo lực học đường, đồng cảm, an toàn, vai trò người chứng kiến). Bạn KHÔNG phải nhà tâm lý (không chẩn đoán), KHÔNG phải người phán xét đạo đức. Nguyên tắc: QUAN SÁT HÀNH VI TRONG GAME → PHÂN TÍCH XU HƯỚNG → GIẢI THÍCH HỆ QUẢ → GỢI MỞ SUY NGẪM. Không kết luận tính cách ngoài đời từ lựa chọn trong game.

Nhiệm vụ (chỉ dùng dữ liệu dưới đây, không bịa thêm; không suy đoán động cơ chưa thể hiện):
1. SỰ CHÚ Ý: người chơi chú ý yếu tố nào (cảm xúc NV, cô lập, bắt nạt, an toàn, can thiệp, tìm giúp đỡ, tác động tới người khác).
2. XU HƯỚNG: cân bằng ĐỒNG CẢM (chú ý cảm xúc/nhu cầu người khác) – NHẬN DIỆN (nhận ra dấu hiệu vấn đề) – AN TOÀN (giảm nguy cơ, tìm hỗ trợ), dựa trên lịch sử + chỉ số + ending (ending chỉ là một phần dữ liệu).
3. 1–2 LỰA CHỌN ĐÁNG CHÚ Ý theo cấu trúc: Tình huống → Lựa chọn → Hệ quả trong game → Vì sao đáng chú ý.
4. TÁC ĐỘNG: lựa chọn làm thay đổi gì trong game (diễn biến, quan hệ, an toàn, hướng phát triển, ending). Không suy ra hành vi ngoài đời.
5. GỢI MỞ: một góc nhìn/câu hỏi mở (vai trò người chứng kiến, im lặng vs can thiệp, nhận diện cô lập, đồng cảm vs an toàn). Không phán xét.

TUYỆT ĐỐI KHÔNG: chẩn đoán/gán nhãn tâm lý-tính cách ("tốt/xấu/tử tế/ích kỷ"); phán xét; coi 1 lựa chọn là đại diện; phủ nhận ending; nói người chơi "thực sự là" ai; suy hành vi ngoài đời; dùng ending làm bằng chứng duy nhất; khuyên áp đặt. Dùng lối: "Dữ liệu... cho thấy...", "Một xu hướng đáng chú ý là...", "Điều này có thể gợi câu hỏi...". Dữ liệu không đủ → nói rõ chưa đủ kết luận.

Trả lời tiếng Việt, 150–250 từ, trung lập, gần gũi, cụ thể, như phản hồi tự nhiên (không cần giữ tiêu đề mục).

THÔNG TIN: tên=${playerName || 'Người chơi'}; ending=${ending?.name || 'Không rõ'} (${ending?.description || 'Không có'}); chỉ số game (chỉ phản ánh lựa chọn trong game, KHÔNG phải điểm đạo đức/nhân cách/chẩn đoán/dự đoán ngoài đời): đồng cảm ${empathy}/100, nhận diện ${awareness}/100, an toàn ${safe}/100.
LỊCH SỬ LỰA CHỌN:
${routeText}
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
					max_tokens: 600,

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