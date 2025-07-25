# 🧑‍🏫 SÀN GIÁO DỤC THƯƠNG MẠI ĐIỆN TỬ ANTOREE

## 📌 Giới thiệu

Đây là giao diện demo của một nền tảng sàn thương mại điện tử chuyên về giáo dục, nơi kết nối học viên và giảng viên với hàng trăm khóa học trực tuyến thuộc nhiều lĩnh vực khác nhau như Toán học, Ngoại ngữ, CNTT, Kinh doanh, v.v.

Người dùng có thể:

- Tìm kiếm khóa học theo tên, lọc giá , gợi ý khóa học dựa theo hành vi người dùng ( yêu thích, đã xem)
- Hiển thị danh sách khóa học, phân loại khóa học, xem chi tiết khóa học 
- Đăng nhập , lưu khóa học yêu thích
- Xem khóa học yêu thích, xem lại các khóa học đã nhấn vào xem.
- Đăng kí khóa học


## 🧰 Công nghệ sử dụng

- **React** `^19.1.0`
- **React DOM** `^19.1.0`
- **React Router DOM** `^7.6.3`
- **Axios** `^1.10.0` – Gọi API
- **Framer Motion** `^12.23.5` & `motion` – Animation hiện đại
- **React Icons** `^5.5.0` – Bộ icon phổ biến
- **@tabler/icons-react** `^3.34.0` – Icon vector dạng SVG
- **classnames** `^2.5.1` & **clsx** `^2.1.1` – Quản lý class Tailwind dễ dàng
- **tailwind-merge** `^3.3.1` – Gộp class Tailwind thông minh


## ⚙️ Hướng dẫn Build & Run

### 1. Clone repo
- Clone dự án 
- Mở dự án
- Mở thư mục dự án
- Mở 2 tab terminal
- Tab1 : chạy lệnh **npm run dev**
- Tab2 : chạy lệnh **npm run start:api**

**Demo** : https://edu-web-8etd-ht1dqb0i4-camtus-projects.vercel.app
- Khi đăng nhập thành công ( lưu ý load trang lại để cập nhật )
- khi xem bằng link demo vercel thì chạy lênh **npm run start:api** để load dữ liệu
## 🎨 Giao diện

- **Trang đăng nhập**
<img width="1908" alt="edu-login" src="https://github.com/user-attachments/assets/6df07da0-e933-447b-ac2a-6b56ca049ee5" />

- **Trang chủ**: Giới thiệu nền tảng, phân loại khóa học, khóa học phổ biến, đội ngũ gia sư,gợi ý khóa học, tin tức
  
<img width="1908" alt="edu-homee" src="https://github.com/user-attachments/assets/26c577c8-2759-4039-89b0-fabf0237635c" />

- **Trang danh mục khóa học**: Tìm kiếm theo tên khóa học, lọc theo giá
  
 <img width="1908" alt="edu-couresPage" src="https://github.com/user-attachments/assets/282783f0-db81-44e8-bb83-1931c7187123" />

 - **Gợi ý khóa học :** Gợi ý các khóa học dựa theo hành vi của người dùng ( xem, yêu thích )

   <img width="935" alt="edu-suggestion" src="https://github.com/user-attachments/assets/76549fee-1576-49d6-9983-2f1bcb2b1a83" />

- **Trang chi tiết khóa học**: Hình ảnh, tên khóa học, phân loại, mô tả dài, lộ trình học, thời gian học, giá , nút đăng kí
  
  <img width="935" alt="edu-modal-detail" src="https://github.com/user-attachments/assets/6d2d79e3-f553-4305-8c28-1f8c0f0a5caa" />

- **Trang đăng ký học**: Modal form đơn giản, xác nhận thông tin
  
  <img width="1879" alt="image" src="https://github.com/user-attachments/assets/2878b463-1227-4cee-8994-b82abc52f806" />

- **Trang danh mục yêu thích**: Hiển thị các khóa học người dùng lưu yêu thích
  
<img width="1908"  alt="edu-favorite" src="https://github.com/user-attachments/assets/14a5cd2f-8837-4814-aaad-7a462e57f367" />

- **Trang lịch sử xem**: Hiển thị các khóa học người dùng đã xem
  
<img width="1908"  alt="edu-viewd" src="https://github.com/user-attachments/assets/128cb469-702f-44a8-806e-f76abfe28c1c" />
