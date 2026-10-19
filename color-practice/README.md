# [Thực hành] Sử dụng màu sắc trong trang web (Monochromatic Color Harmony)

Bài thực hành luyện tập phối màu đơn tông (Monochromatic) cho trang web giao diện Imaginary Store theo chuẩn giáo trình CodeGym Front-End.

---

## 🎨 1. Bảng màu đơn tông chính (Monochromatic Blue - Bước 1 đến Bước 7)

Màu chủ đạo được xác định dựa theo màu xanh logo CodeGym (`#00ADEE`) làm **màu bậc 1**, giảm dần sắc độ và độ đậm:

| Cấp bậc | Mã màu Hex | Tên gọi & Ứng dụng trên trang web |
| :--- | :--- | :--- |
| **Bậc 1** | `#00ADEE` | **Màu chủ đạo**: Logo chính, thẻ `ON SALE`, nút play `PREVIEW`, nút Flip Card |
| **Bậc 2** | `#00B2EF` | **Màu nhấn nổi bật**: Trạng thái hover play circle, điểm nhấn phụ |
| **Bậc 3** | `#00B8F0` | Tông phụ hỗ trợ |
| **Bậc 4** | `#00BFF2` | **Màu nền Banner chính** (`#banner`) theo yêu cầu Bước 2 |
| **Bậc 5** | `#33CBF4` | Tông sáng trung gian |
| **Bậc 6** | `#5FD4F5` | Tông sáng dịu |
| **Bậc 7** | `#8DD7F7` | **Màu nền khối nội dung** (`.preview li a`) thay cho nền hồng cũ theo Bước 4 |
| **Bậc 8** | `#A9E0F8` | Viền chia khối, phân tách footer |
| **Bậc 9** | `#C6E9FA` | **Màu nền Footer** (`footer`) tạo độ sáng thanh lịch theo Bước 5 |
| **Bậc 10**| `#E4F4FD` | **Màu nền Info** (`#info`) siêu nhạt hài hòa toàn diện |

---

## 🍃 2. Bảng màu đơn tông thứ hai (Monochromatic Emerald Green - Bước 8)

Để đáp ứng trọn vẹn yêu cầu **Bước 8**: *"Hãy sử dụng bảng màu để tạo ra danh sách màu đơn tông khác, và thực hiện phối màu như trên để tạo ra được một trang web khác với màu sắc khác"*, dự án cung cấp thêm phiên bản Emerald Green:

- File giao diện: `emerald-theme.html`
- File CSS: `style-emerald.css`
- Logo tương ứng: `images/logo-emerald.png`

| Cấp bậc | Mã màu Hex | Ứng dụng |
| :--- | :--- | :--- |
| **Bậc 1** | `#059669` | Màu chủ đạo, logo xanh ngọc, ON SALE badge, Preview play circle |
| **Bậc 2** | `#10B981` | Nhấn nổi bật khi hover circle |
| **Bậc 3** | `#34D399` | Tông màu phụ |
| **Bậc 4** | `#6EE7B7` | Màu nền Banner chính |
| **Bậc 5** | `#86EFAC` | Tông sáng vừa |
| **Bậc 6** | `#A7F3D0` | Tông sáng dịu |
| **Bậc 7** | `#A7F3D0` | Màu nền các thẻ Preview |
| **Bậc 8** | `#D1FAE5` | Viền ngăn cách |
| **Bậc 9** | `#ECFDF5` | Màu nền Footer |
| **Bậc 10**| `#F0FDF4` | Màu nền phần Info |

---

## 🛠️ 3. Chi tiết thực hiện các bước

1. **Bước 1**: Phân tách 10 cấp độ màu từ màu gốc `#00ADEE` thành các biến CSS Custom Properties `:root`.
2. **Bước 2**: Đổi màu nền `#banner` sang màu bậc 4 (`#00BFF2`), chữ trắng tương phản tốt, nút Add to Cart dùng bậc 1 (`#00ADEE`) có hiệu ứng hover bóng đổ tinh tế.
3. **Bước 3**: Đổi nhãn `ON SALE` và các nút hình tròn `PREVIEW` từ màu đỏ sang màu bậc 1 (`#00ADEE`).
4. **Bước 4**: Đổi nền hồng của danh sách previews sang màu bậc 7 (`#8DD7F7`), giữ nguyên chữ màu đen đậm để đảm bảo độ tương phản (WCAG AA).
5. **Bước 5**: Đổi nền footer thành màu bậc 9 (`#C6E9FA`) tạo không gian sáng, chữ đen trang nhã.
6. **Bước 6**: Giữ màu chữ cho toàn bộ trang là màu đen (`#222222`), chuyển các liên kết thanh điều hướng từ đỏ sang xanh chủ đạo.
7. **Bước 7**: Kiểm tra hiển thị responsive trên mọi độ phân giải màn hình.
8. **Bước 8**: Thiết kế toàn bộ giao diện độc lập với bảng màu đơn sắc Emerald Green (`emerald-theme.html` + `style-emerald.css`).

---

## 💻 4. Cách chạy và xem kết quả

Mở trực tiếp các tệp HTML trong trình duyệt:
- Giao diện chính (Xanh logo): [index.html](index.html)
- Giao diện biến thể Bước 8 (Xanh ngọc): [emerald-theme.html](emerald-theme.html)
