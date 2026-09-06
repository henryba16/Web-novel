# Vệt nắng cuối hành lang

Visual novel tương tác tiếng Việt được xây dựng trên nền tảng [Monogatari](https://monogatari.io/). Trò chơi lấy bối cảnh lớp 8A, cho người chơi nhập tên và đưa ra các lựa chọn ảnh hưởng đến các chỉ số như đồng cảm, nhận thức và mức độ an toàn.
Website:https://web-novel-rosy.vercel.app

## Tổng quan

Dự án này là một game VN theo phong cách truyện tương tác có:

- nhập tên người chơi ở đầu game
- nền câu chuyện học đường và các nhân vật bạn cùng lớp
- lựa chọn nhánh khác nhau ảnh hưởng trực tiếp tới trạng thái game
- lưu dữ liệu bằng IndexedDB
- hỗ trợ chạy ở web, Electron và Electrobun

## Yêu cầu hệ thống

- [Bun](https://bun.sh/) để chạy dev server và build web
- [Yarn](https://yarnpkg.com/) cho các lệnh Electron
- Một trình duyệt hiện đại để chạy game web

## Cài đặt

```bash
git clone <URL_REPO>
cd monogatari-v2.8.0
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
engine/electron/         Cấu hình Electron
engine/electrobun/       Cấu hình Electrobun
js/script.js             Kịch bản, nhân vật, cảnh và nhánh lựa chọn
js/storage.js            Dữ liệu lưu mặc định cho người chơi và trạng thái game
js/options.js            Thiết lập Monogatari, asset path và cấu hình game
js/main.js               Khởi tạo game
style/main.css           CSS giao diện trò chơi
serve.ts                 Dev server cho web với live reload
build-web.ts             Script build bản web
index.html               Landing page / môi trường desktop launcher
game.html                File chính của game Monogatari
manifest.json            PWA manifest
service-worker.js        Service worker cho web app
```

## Nơi chỉnh sửa chính

Nếu bạn muốn sửa nội dung hoặc nhánh truyện, phần chính cần xem là:

- [js/script.js](js/script.js): thoại, nhân vật, cảnh, lựa chọn và nhánh quyết định
- [js/storage.js](js/storage.js): trạng thái ban đầu của người chơi và các chỉ số
- [js/options.js](js/options.js): tên game, phiên bản, thiết lập lưu, asset path và cấu hình chung
- [game.html](game.html): entry point chính của trò chơi trong web
- [index.html](index.html): landing page / giao diện bắt đầu

Các chỉ số quan trọng hiện có trong game:

- `empathy`: độ đồng cảm
- `awareness`: nhận thức
- `safe`: mức độ an toàn / khả năng lựa chọn an toàn

## Tùy chỉnh nhanh

- Thêm cảnh mới trong `monogatari.assets('scenes', ...)`
- Thêm âm thanh mới trong `monogatari.assets('sounds', ...)` và đặt file tương ứng vào `assets/sounds/`
- Thêm nhân vật mới trong `monogatari.characters({...})`
- Sửa tiêu đề, mô tả, favicon và theme trong [game.html](game.html), [index.html](index.html) và [manifest.json](manifest.json)

## Lưu ý phát triển

- Game được cấu hình theo tỷ lệ `16:9` và ưu tiên chế độ ngang trên mobile.
- `engine/debug/debug.js` được dùng trong môi trường phát triển, nhưng sẽ bị loại khỏi bản web build.
- Game lưu tiến độ bằng IndexedDB với store `GameData`.
- Phần nội dung chính của dự án đang tập trung vào câu chuyện và nhánh lựa chọn; nên ưu tiên sửa trong [js/script.js](js/script.js) trước khi chạm vào cấu hình engine.

## Giấy phép

Dự án hiện khai báo giấy phép `MIT` trong [package.json](package.json). Tuy nhiên, hãy kiểm tra quyền sử dụng riêng của từng asset trong `assets/` trước khi phát hành công khai.
