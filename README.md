# SchoolShield

SchoolShield là công cụ giáo dục hỗ trợ sức khỏe tinh thần học sinh, mô phỏng các tình huống học đường dưới dạng visual novel tương tác. Sản phẩm được xây dựng trên nền tảng [Monogatari](https://monogatari.io/), đặt người chơi vào các tình huống xã hội cụ thể để thực hành nhận diện cảm xúc, đồng cảm và lựa chọn cách ứng phó lành mạnh.

Website: [https://web-novel-rosy.vercel.app](https://web-novel-rosy.vercel.app)

## Bối cảnh vấn đề

Học sinh THCS-THPT có thể gặp lo âu, căng thẳng và suy giảm tự tin trong giai đoạn phát triển tâm sinh lý quan trọng. Tuy nhiên, nhiều em chưa được trang bị đầy đủ kỹ năng nhận diện cảm xúc của bản thân hoặc phản ứng phù hợp trước các tình huống xã hội gây tổn thương, trong đó có bắt nạt học đường.

Các chương trình giáo dục sức khỏe tinh thần ở trường học thường thiên về truyền đạt lý thuyết qua poster, buổi nói chuyện hoặc tiết sinh hoạt. SchoolShield hướng đến việc bổ sung môi trường trải nghiệm, nơi học sinh có thể trực tiếp đối mặt với tình huống mô phỏng và quan sát hệ quả của từng lựa chọn.

## Mục tiêu

- Rèn khả năng nhận diện sớm các dấu hiệu tổn thương tâm lý ở bản thân và bạn bè thông qua tình huống tương tác.
- Xây dựng năng lực đồng cảm bằng cách lựa chọn cách phản hồi trước cảm xúc của nhân vật khác.
- Hình thành thói quen lựa chọn hành vi ứng phó lành mạnh khi gặp xung đột hoặc áp lực xã hội.
- Hỗ trợ giáo viên và nhà trường có thêm một công cụ giáo dục phòng ngừa với dữ liệu định lượng từ Research Dashboard, giúp nhận diện xu hướng chung để có phương án giáo dục phù hợp.

## Phạm vi và nguyên tắc sử dụng

SchoolShield là công cụ hỗ trợ giáo dục nhận thức và kỹ năng phòng ngừa, không phải công cụ đánh giá hoặc chẩn đoán lâm sàng. Các chỉ số trong game phản ánh lựa chọn trong tình huống mô phỏng, không phải kết luận về sức khỏe tinh thần hay tính cách của người chơi.

Khi triển khai trong môi trường trường học, dữ liệu cần được sử dụng theo nguyên tắc bảo mật, tôn trọng học sinh và phục vụ mục đích giáo dục. Tình huống nhạy cảm nên đi kèm hướng dẫn kết nối tới giáo viên, cán bộ tâm lý học đường, gia đình hoặc nguồn hỗ trợ chuyên môn khi cần thiết. Research Dashboard chỉ hỗ trợ nhận diện xu hướng ở cấp độ phù hợp, không thay thế vai trò tư vấn và chẩn đoán của chuyên gia.

## Tổng quan sản phẩm

Phiên bản hiện tại là một visual novel tương tác có:

- Nhập tên người chơi ở đầu game.
- Bối cảnh học đường và các nhân vật bạn cùng lớp.
- Các nhánh lựa chọn ảnh hưởng trực tiếp tới trạng thái game.
- Ba chỉ số mô phỏng: đồng cảm, nhận thức và hành vi an toàn.
- Lưu dữ liệu bằng IndexedDB.
- Hỗ trợ chạy trên web, Electron và Electrobun.

Research Dashboard là hướng phát triển để cung cấp góc nhìn định lượng cho giáo viên và nhà trường; không nên diễn giải dữ liệu này như hồ sơ sức khỏe tinh thần cá nhân.

## Yêu cầu hệ thống

- [Bun](https://bun.sh/) để chạy dev server và build web
- [Yarn](https://yarnpkg.com/) cho các lệnh Electron
- Một trình duyệt hiện đại để chạy game web

## Cài đặt

```bash
git clone <URL_REPO>
cd web-novel
bun install
```

Nếu bạn muốn dùng Yarn thay cho Bun:

```bash
yarn install
```

## Chạy dự án

### 1) Chạy bản web ở chế độ phát triển

```bash
bun run serve
```

Sau đó mở:

```text
http://localhost:5100
```

Bạn có thể đổi cổng bằng biến môi trường `PORT`:

```bash
PORT=5200 bun run serve
```

Máy chủ này hỗ trợ live reload khi các file trong `js/`, `style/` hoặc `engine/` thay đổi.

### 2) Chạy phiên bản Electron

```bash
bun run start
```

Lệnh này mở ứng dụng Electron dựa trên file [index.html](index.html).

### 3) Chạy với Electrobun

```bash
bun run start:electrobun
```

## Build

### Build web

```bash
bun run build:web
```

Kết quả được xuất ra thư mục `build/web/`.

### Build Electron

```bash
bun run build
```

Các lệnh cụ thể:

```bash
bun run build:windows
bun run build:mac
bun run build:linux
```

Artifact Electron được lưu trong `build/electron/`.

### Build Electrobun

```bash
bun run build:electrobun
```

## Cấu trúc chính của project

```text
assets/                  Tài nguyên hình ảnh, âm thanh, font, video và UI
engine/core/             Engine Monogatari chính
engine/debug/            Công cụ debug trong môi trường phát triển
engine/electron/          Cấu hình Electron
engine/electrobun/       Cấu hình Electrobun
js/script.js             Kịch bản, nhân vật, cảnh và nhánh lựa chọn
js/storage.js            Dữ liệu lưu mặc định cho người chơi và trạng thái game
js/options.js            Thiết lập Monogatari, asset path và cấu hình game
js/main.js               Khởi tạo game
style/main.css           CSS giao diện trò chơi
serve.ts                 Dev server cho web với live reload
build-web.ts             Script build bản web
index.html               Điểm vào của game
manifest.json            PWA manifest
service-worker.js        Service worker cho web app
```

## Nơi chỉnh sửa chính

Nếu bạn muốn sửa nội dung hoặc nhánh truyện, phần chính cần xem là:

- [js/script.js](js/script.js): thoại, nhân vật, cảnh, lựa chọn và nhánh quyết định
- [js/storage.js](js/storage.js): trạng thái ban đầu của người chơi và các chỉ số
- [js/options.js](js/options.js): tên game, phiên bản, thiết lập lưu, asset path và cấu hình chung
- [index.html](index.html): entry point chính của trò chơi trên web và desktop

Các chỉ số quan trọng hiện có trong game:

- `empathy`: độ đồng cảm
- `awareness`: nhận thức
- `safe`: mức độ an toàn / khả năng lựa chọn an toàn

## Tùy chỉnh nhanh

- Thêm cảnh mới trong `monogatari.assets('scenes', ...)`
- Thêm âm thanh mới trong `monogatari.assets('sounds', ...)` và đặt file tương ứng vào `assets/sounds/`
- Thêm nhân vật mới trong `monogatari.characters({...})`
- Sửa tiêu đề, mô tả, favicon và theme trong [index.html](index.html) và [manifest.json](manifest.json)

## Lưu ý phát triển

- Game được cấu hình theo tỷ lệ `16:9` và ưu tiên chế độ ngang trên mobile.
- `engine/debug/debug.js` được dùng trong môi trường phát triển, nhưng sẽ bị loại khỏi bản web build.
- Game lưu tiến độ bằng IndexedDB với store `GameData`.
- Phần nội dung chính của dự án đang tập trung vào câu chuyện và nhánh lựa chọn; nên ưu tiên sửa trong [js/script.js](js/script.js) trước khi chạm vào cấu hình engine.

## Giấy phép

Dự án hiện khai báo giấy phép `MIT` trong [package.json](package.json). Tuy nhiên, hãy kiểm tra quyền sử dụng riêng của từng asset trong `assets/` trước khi phát hành công khai.
