1. Mục đích

Đây là tài liệu bắt buộc phải đọc trước khi thực hiện bất kỳ thay đổi nào trong project.

2. Quy tắc bắt buộc

Trước khi code, AI phải:

Đọc file AGENTS.md này.
Kiểm tra cấu trúc project hiện tại.
Đọc các file liên quan trực tiếp đến task.
Không tự ý thay đổi kiến trúc nếu chưa cần thiết.
Chỉ được sửa đổi code ở 2 file home.html và index.html, vì đây là project lớn lên git sẽ gây ra xung đột file khi xâm phạm các file khác. 
Chỉ được đọc các file khác để tham khảo sự liên kết giữa các file, không fix các file khác ngoài các file cho phép trên.

3. Coding Convention
Viết code đơn giản, dễ đọc.
Không tạo abstraction nếu chưa cần thiết.
Không duplicate logic.
Tên biến/hàm phải thể hiện rõ mục đích.
Không để lại debug code, console.log hoặc TODO không cần thiết.
Không sửa format của những file không liên quan đến task.\

4. Kiến trúc

Trước khi thay đổi architecture:

Kiểm tra cách project hiện tại đang tổ chức.
Tìm implementation tương tự đã tồn tại.
Tái sử dụng pattern hiện có nếu phù hợp.
Nếu cần thay đổi architecture lớn, phải giải thích lý do và đợi tôi chấp thuận mới làm.

5. Dependency

Không tự ý thêm package/dependency mới.

Nếu dependency mới thực sự cần thiết:

Giải thích tại sao cần.
Kiểm tra xem project đã có package tương đương chưa.
Chỉ thêm dependency khi không có giải pháp phù hợp bằng dependency hiện tại.

6. Testing

Sau mỗi thay đổi:

Chạy test liên quan.
Nếu có lint/typecheck thì chạy.
Không bỏ qua lỗi bằng cách disable rule hoặc suppress error nếu chưa có lý do chính đáng.

7. Git

AI không được tự ý:

git reset --hard
xóa branch
force push
xóa thay đổi của user

Không commit code trừ khi được yêu cầu.

8. Khi không chắc chắn

Nếu yêu cầu mơ hồ hoặc có nhiều cách triển khai:

Kiểm tra code hiện tại trước.
Ưu tiên cách ít thay đổi nhất.
Hỏi lại nếu quyết định có thể gây ảnh hưởng lớn đến architecture hoặc behavior.

9. Definition of Done

Một task chỉ được xem là hoàn thành khi:

Code đã được implement.
Không có lỗi type/lint nghiêm trọng liên quan.
Test liên quan đã pass hoặc đã giải thích rõ lý do không thể chạy.
Không tạo file/dependency không cần thiết.
Không làm thay đổi behavior ngoài phạm vi task.