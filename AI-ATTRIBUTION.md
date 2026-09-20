# Phụ lục: Công cụ AI và nguồn lực sử dụng trong SchoolShield

> Mọi thông tin dưới đây là báo cáo trung thực về quá trình sử dụng AI,
> API, thư viện và mã nguồn mở trong dự án.

## 1. Công cụ AI tham gia phát triển

| Công cụ | Nhà cung cấp | Dùng cho | Ghi chú kiểm chứng |
|---|---|---|---|
| OpenCode agent (Muse Spark) | OpenCode / Meta | Thiết lập harness, redesign landing page, chatbot ending, làm mới game shell, kiểm tra sprite, tài liệu README | Lịch sử làm việc trong phiên phát triển; code thay đổi qua các commit sau `18d068c` |
| ChatGPT | OpenAI | Công cụ chính: phác thảo storyboard, gợi ý thoại và nhánh lựa chọn, debug code, giải thích tài liệu kỹ thuật | Dùng luân phiên với các AI dưới đây tùy thời điểm |
| Grok | xAI | Dự phòng khi ChatGPT quá tải: tiếp tục cùng storyboard, debug, hỏi đáp kỹ thuật | Chuỗi dự phòng: ChatGPT → Grok → Gemini |
| Gemini | Google | Dự phòng khi Grok quá tải: cùng storyboard, kiểm tra logic nhánh truyện, tài liệu | Chuỗi dự phòng: ChatGPT → Grok → Gemini |
| Claude | Anthropic | Rà soát code, kiểm tra logic game (storage, API ending), hỗ trợ viết tài liệu | Đối chiếu commit `bedb1b6` trở đi |
| Dreamina | CapCut / ByteDance | Tạo ảnh tổng hợp chứa toàn bộ sprite của 1 nhân vật trong một ảnh | File gốc trong `assets/` trước khi cắt |
| Gemini Nano Banana | Google | Nâng chất lượng (enhance) từng sprite sau khi cắt | Chạy trên ảnh sprite đơn |
| GIMP | GNU (miễn phí) | Chỉnh sửa, căn cắt sprite thủ công sau enhance | File PNG cuối trong `assets/characters/` |

Quy tắc ghi công trung thực: storyboard và phần lớn code do bạn tự viết —
các AI trên dùng luân phiên cho cùng các khâu (kịch bản, hình ảnh, code,
testing) tùy công cụ nào khả dụng lúc đó; AI chỉ hỗ trợ, quyết định cuối
cùng là của bạn.

## 2. API AI trong sản phẩm (runtime, không phải công cụ dev)

| API | Nhà cung cấp | Dùng cho | Key |
|---|---|---|---|
| OpenRouter (`openrouter/free`) | OpenRouter | `api/analyze-ending.js`: phân tích phản hồi ending; `api/chat-ending.js`: chatbot follow-up | `OPENROUTER_API_KEY` (server-side, Vercel env, không commit) |

## 3. Thư viện và framework (từ `package.json`)

| Thư viện | Phiên bản | Dùng cho |
|---|---|---|
| Monogatari (vendored, `engine/`) | Bundled (không qua npm) | Visual novel engine — render, lưu trữ, animation |
| Electron | ^42.4.0 | Vỏ desktop (`engine/electron/`) |
| electron-builder | ^26.15.3 | Đóng gói bản desktop Win/Mac/Linux |
| @electron/notarize | ^3.1.1 | Notarize bản macOS |
| Electrobun | ^1.18.1 | Vỏ desktop thay thế (`engine/electrobun/`) |
| @vercel/analytics | ^2.0.1 | Phân tích lượt dùng web |
| @vercel/speed-insights | ^2.0.0 | Đo hiệu năng web |
| dotenv (dev) | ^16.4.5 | Biến môi trường dev |
| Bun | (môi trường) | Dev server (`serve.ts`), build web (`build-web.ts`) |
| Vercel | (nền tảng) | Deploy web + serverless functions `api/` |

## 4. Dữ liệu

- Kịch bản, thoại, nhánh lựa chọn: do nhóm tự viết trong `js/script.js`,
  có sự hỗ trợ luân phiên của ChatGPT/Grok/Gemini/Claude ở khâu phác thảo,
  gợi ý thoại và debug.
- Asset hình/âm (`assets/`): vẽ tay kết hợp AI theo quy trình —
  Dreamina tạo 1 ảnh tổng hợp toàn bộ sprite của mỗi nhân vật, cắt thành
  từng sprite đơn, enhance bằng Gemini Nano Banana, chỉnh sửa cuối trong
  GIMP. **[CẦN BẠN ĐIỀN: quyền sử dụng từng asset trước khi phát hành
  công khai]**.
- Không dùng dataset huấn luyện hay dữ liệu người dùng thật; chỉ số game
  phản ánh lựa chọn mô phỏng, không phải dữ liệu sức khỏe thật.

## 5. Mã nguồn

- Repo dự án: https://github.com/henryba16/Web-novel.git
- Engine Monogatari: mã nguồn mở, giấy phép MIT, bản quyền Diana Islas Ocampo
  (xem `engine/LICENSE`); thư mục `engine/core/` và `engine/debug/` giữ nguyên,
  không chỉnh sửa.
- Giấy phép dự án: MIT (khai báo trong `package.json`).
