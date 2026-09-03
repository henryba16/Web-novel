# Web Novel

Visual novel tương tác tiếng Việt, được xây dựng với [Monogatari](https://monogatari.io/). Người chơi nhập tên, theo dõi câu chuyện tại lớp 8A và đưa ra các lựa chọn ảnh hưởng đến những chỉ số như đồng cảm, nhận thức và an toàn.

## Yêu cầu

- [Bun](https://bun.sh/) để chạy máy chủ phát triển, build web và Electrobun.
- [Yarn](https://yarnpkg.com/) cho các lệnh Electron được định nghĩa trong dự án.

## Cài đặt

```bash
git clone <URL-kho-luu-tru>
cd web-novel
bun install
```

Nếu dùng Yarn thay cho Bun:

```bash
yarn install
```

## Chạy dự án

### Web với hot reload

```bash
bun run serve
```

Mở [http://localhost:5100](http://localhost:5100). Có thể đổi cổng bằng biến môi trường `PORT`:

```bash
PORT=5200 bun run serve
```

Máy chủ phát triển tự động tải lại trang khi các tệp trong `js/`, `style/` hoặc `engine/` thay đổi.

### Electron

```bash
bun run start
```

Ứng dụng Electron mở `index.html` trong cửa sổ desktop với kích thước khởi đầu `960x540`.

### Electrobun

```bash
bun run start:electrobun
```

## Build

### Bản web

```bash
bun run build:web
```

Tệp phát hành được tạo trong `build/web/`. Bản build này loại bỏ thư viện debug khỏi `index.html`.

### Electron

```bash
bun run build          # macOS, Windows và Linux
bun run build:windows  # Windows
bun run build:mac      # macOS
bun run build:linux    # Linux
```

Artifact Electron nằm trong `build/electron/`.

### Electrobun

```bash
bun run build:electrobun
```

Artifact nằm trong `build/electrobun/artifacts/`.

## Cấu trúc chính

```text
assets/                 Tài nguyên hình ảnh, âm thanh, font, video và giao diện
engine/core/            Monogatari engine
engine/debug/           Công cụ debug, chỉ dùng khi phát triển
engine/electron/         Cấu hình cửa sổ và preload cho Electron
engine/electrobun/       Main process và view cho Electrobun
js/script.js             Kịch bản, nhân vật, cảnh và lựa chọn của visual novel
js/storage.js            Dữ liệu người chơi, chỉ số và trạng thái lựa chọn
js/options.js            Cấu hình Monogatari và vị trí tài nguyên
js/main.js               Khởi tạo Monogatari
style/main.css           CSS giao diện trò chơi
serve.ts                 Máy chủ web phát triển có live reload
build-web.ts             Script đóng gói bản web
index.html               Điểm vào của trò chơi
```

## Chỉnh sửa nội dung

- Thêm hoặc sửa lời thoại, cảnh, nhân vật và lựa chọn trong `js/script.js`.
- Khai báo hình nền trong `monogatari.assets('scenes', ...)`.
- Khai báo âm thanh trong `monogatari.assets('sounds', ...)` và đặt tệp tương ứng vào `assets/sounds/`.
- Thay đổi dữ liệu mặc định của người chơi và các chỉ số trong `js/storage.js`.
- Thay đổi tên game, phiên bản, tốc độ chữ, hướng màn hình và cơ chế lưu trong `js/options.js`.
- Khi thêm loại tài nguyên mới, bảo đảm đường dẫn khớp với `AssetsPath` trong `js/options.js`.

Các lựa chọn hiện tại cập nhật ba chỉ số chính:

- `empathy`: mức đồng cảm.
- `awareness`: mức nhận thức.
- `safe`: xu hướng lựa chọn an toàn.

Dữ liệu game được lưu bằng IndexedDB với store `GameData`. Save slot và các tùy chọn được Monogatari quản lý.

## Lưu ý phát triển

- Game được cấu hình chạy ở tỷ lệ `16:9` và ưu tiên hướng ngang trên thiết bị di động.
- `engine/debug/debug.js` được nạp khi chạy phát triển nhưng sẽ bị loại khỏi bản web build.
- Trước khi phát hành, nên cập nhật tên game, phiên bản, tác giả, mô tả và các thông tin placeholder trong `package.json`, `index.html` và `manifest.json`.
- Tệp `engine/LICENSE` là giấy phép của phần engine đi kèm dự án.

## Giấy phép

Dự án hiện khai báo giấy phép `MIT` trong `package.json`. Hãy kiểm tra quyền sử dụng riêng của từng tài nguyên trong `assets/` trước khi phát hành.