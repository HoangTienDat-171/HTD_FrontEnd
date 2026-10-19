# [Bài Tập] Thiết Kế UI/UX Giao Diện Trang Đăng Ký Người Dùng

> **Khóa học:** Lập trình Front-End CodeGym  
> **Học viên thực hiện:** Hoàng Tiến Đạt  
> **Dự án:** Giao diện Đăng ký Người dùng Đạt chuẩn Fitts' Law & WCAG Accessibility

---

## 1. Tổng Quan Mục Tiêu & Yêu Cầu

Dự án được thiết kế nhằm áp dụng trọn vẹn các nguyên lý thiết kế trải nghiệm người dùng (UX) và giao diện trực quan (UI), đảm bảo tính khả dụng (Usability), dễ hiểu, thân thiện và tuân thủ các quy luật tâm lý học thiết kế hiện đại.

### Các thành phần chính:
- **Trang 1 - Form Đăng ký (Input Phase):**
  - Họ và tên (Full Name) kèm xác thực định dạng 2 từ trở lên.
  - Địa chỉ Email (Email Address) kèm kiểm tra regex cú pháp thời gian thực.
  - Mật khẩu (Password) kèm nút bật/tắt hiển thị (👁️), thước đo độ mạnh (4 cấp độ màu) và checklist yêu cầu.
  - Xác nhận mật khẩu (Confirm Password) với icon kiểm tra khớp tức thì.
  - Checkbox chấp thuận Điều khoản dịch vụ & Chính sách bảo mật.
  - Tùy chọn Đăng ký nhanh 1-Click qua Google & GitHub.
- **Trang 2 - Trang Xác nhận Thành công (Success & Next Steps Phase):**
  - Biểu tượng tích xanh hoạt họa (Animated Success Checkmark) tôn vinh thành quả người dùng.
  - Thẻ tóm tắt thông tin tài khoản vừa tạo (Họ tên, Email, Trạng thái).
  - Hướng dẫn kiểm tra hòm thư kích hoạt rõ ràng, trực quan.
  - Nút chuyển hướng "Vào trang học tập ngay" (Primary CTA) và "Gửi lại email xác thực".
- **Bản phác thảo Wireframe & Sơ đồ Luồng người dùng (User Flow Map):**
  - Mô hình khung xương tỷ lệ 1:1 cho cả 2 trang.
  - Sơ đồ hành trình 4 bước từ Tiếp cận -> Nhập liệu -> Chuyển đổi -> Xác nhận.
- **Thuyết minh & Phân tích các định luật UI/UX:**
  - Định luật Fitts (Fitts' Law)
  - Định luật Hick (Hick's Law)
  - Định luật Jakob (Jakob's Law)
  - Định luật Miller & Phân đoạn thông tin (Chunking)
  - Khả năng tiếp cận chuẩn WCAG 2.1 & Thiết kế đáp ứng (Responsive).

---

## 2. Thuyết Minh Các Nguyên Tắc UI/UX Đã Ứng Dụng

### 🎯 2.1. Định luật Fitts (Fitts' Law) - Trọng tâm bài tập
* **Khái niệm:** Thời gian để người dùng di chuyển con trỏ chuột (hoặc ngón tay) chạm tới một mục tiêu phụ thuộc vào **khoảng cách** và **kích thước** của mục tiêu đó.
* **Ứng dụng thực tế trong bài:**
  1. **Kích thước nút bấm (Target Size):** Nút *Tạo Tài Khoản* có chiều cao vượt trội **54px** và độ rộng phủ **100%** chiều ngang form. Kích thước này vượt xa tiêu chuẩn ngón tay cái tối thiểu của Apple/Google (48x48px), giúp người dùng bấm trúng ngay cả khi đang di chuyển hoặc dùng thiết bị di động bằng 1 tay.
  2. **Vị trí nút:** Đặt ngay phía dưới trường điều khoản, nằm thẳng trên trục quét mắt từ trên xuống dưới (Natural Reading Flow), loại bỏ hoàn toàn khoảng cách di chuột thừa.
  3. **Phản hồi tương tác (Affordance):** Nút có đổ bóng nổi (elevation), hiệu ứng hover nâng cao (-2px) và trạng thái active ấn xuống rõ rệt.

### ⚡ 2.2. Định luật Hick (Hick's Law)
* Giảm thiểu áp lực nhận thức bằng cách chỉ giữ lại **4 trường cốt lõi nhất**.
* Bổ sung nút đăng ký nhanh 1 chạm qua Google / GitHub giúp người dùng hoàn tất đăng ký trong 3 giây mà không cần điền form.

### 🧠 2.3. Định luật Jakob (Jakob's Law)
* Người dùng đã quen với các giao diện đăng ký chuẩn quốc tế (Google, Facebook, Twitter, Airbnb).
* Áp dụng bố cục chuẩn mực:
  - Nhãn (Label) đặt phía trên ô nhập (Top-aligned label) giúp mắt quét nhanh hơn 40% so với nhãn đặt bên trái.
  - Biểu tượng con mắt ở góc phải trường mật khẩu là quy ước toàn cầu để bật/tắt mật khẩu.
  - Dấu sao hoa thị đỏ `*` quy ước trường bắt buộc.

### 🛡️ 2.4. Phản hồi tức thì & Ngăn ngừa lỗi (Immediate Feedback & Error Prevention)
* **Inline Validation:** Thay vì đợi bấm nút mới báo lỗi, hệ thống kiểm tra và đổi viền xanh lá (✓) hoặc đỏ (!) ngay khi người dùng hoàn thành nhập ô đó.
* **Password Strength Meter:** Hiển thị 4 nấc màu sống động:
  - 1 nấc: Đỏ (Yếu)
  - 2 nấc: Cam (Trung bình)
  - 3 nấc: Xanh dương (Khá mạnh)
  - 4 nấc: Xanh lá (Rất mạnh)
* Kèm theo checklist 3 gạch đầu dòng tự động sáng đèn xanh khi thỏa mãn điều kiện.

---

## 3. Cấu Trúc Mã Nguồn

```
user-registration-ui/
├── index.html        # Mã nguồn HTML tích hợp 3 Tab (Live UI, Wireframe, Thuyết minh UX)
├── style.css         # Hệ thống Design System CSS thuần (Grid, Flexbox, Animations, Variables)
├── script.js         # Xử lý tương tác, kiểm tra dữ liệu realtime, chuyển cảnh Form sang Success
└── README.md         # Báo cáo thuyết minh toàn diện nộp bài
```

---

## 4. Hướng Dẫn Chạy & Chụp Ảnh Nộp Bài

1. Mở tệp `index.html` trong trình duyệt web (Google Chrome, Microsoft Edge, Firefox).
2. **Chụp Trang 1 (Form Đăng ký):**
   - Giữ nguyên tab *Giao diện Hoàn thiện (Live UI)* -> Chụp ảnh form nhập liệu.
   - Bạn có thể gõ thử thông tin để xem hiệu ứng thanh đo mật khẩu và icon checkmark.
3. **Chụp Trang 2 (Trang Xác nhận):**
   - Bấm nút **"Đăng Ký Tài Khoản"** (hoặc bấm nút mô phỏng *Trang 2: Đăng Ký Thành Công* ở trên góc) để chuyển sang màn hình chúc mừng -> Chụp ảnh màn hình xác nhận.
4. **Chụp Bản Phác Thảo & Thuyết Minh:**
   - Nhấp vào tab **"Bản phác thảo (Wireframe & Flow)"** để chụp ảnh sơ đồ thiết kế.
   - Nhấp vào tab **"Thuyết minh & Ghi chú UI/UX"** để chụp bảng đối chiếu và giải thích Fitts' Law.
