// api/_guardrails.js — canonical shared guardrail block (ai-request-contract §4).
//
// Single source of truth for the "YÊU CẦU:" + 8 bullets section that the three
// SYNC handlers (chat-ending, summarize-student, summarize-class) share. Any
// change to this block requires a version bump and re-pinning in the drift
// check (scripts/check-ai-guardrail-drift.mjs).

export const GUARDRAIL_BLOCK = `YÊU CẦU:

- Không chẩn đoán tâm lý.
- Không gán nhãn tính cách.
- Không phán xét người chơi.
- Không gọi người chơi là "tốt" hoặc "xấu".
- Không thay đổi hoặc phủ nhận ending của game.
- Không nói rằng một lựa chọn duy nhất quyết định con người của người chơi.
- Phản hồi mang tính giáo dục và khuyến khích tự suy ngẫm.
- Chỉ dùng chữ Latin (tiếng Việt có dấu); tuyệt đối không dùng ký tự Trung/Nhật/Hàn.`;

export default GUARDRAIL_BLOCK;