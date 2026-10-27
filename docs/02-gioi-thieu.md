# Giới thiệu

## Định danh

| Mục | Giá trị |
|---|---|
| File | `src/app/[locale]/gioi-thieu/page.tsx` |
| URL VI | `/gioi-thieu` |
| URL EN | `/en/about` |
| Copy | `aboutPage.*` |
| SEO | `meta.aboutTitle`, `meta.aboutDescription` |

## Bố cục

Trang là một bài viết giới thiệu công ty, nền trắng, cột chữ rộng tối đa `max-w-3xl`:

1. Nhãn, tiêu đề, đoạn mở đầu
2. Ảnh đội ngũ rộng toàn khung
3. Đội ngũ của chúng tôi
4. Chúng tôi làm gì, kèm liên kết tới trang Dịch vụ
5. Hoạt động, kèm ba ảnh hoạt động (hai ảnh cạnh nhau, một ảnh rộng)
6. Câu trích về cách làm việc, câu kết và liên kết tới trang Liên hệ

## Ảnh

Hiện tất cả là ảnh minh họa tạm trong `public/about/`:

| File | Vị trí | Kích thước gợi ý |
|---|---|---|
| `team.svg` | Ảnh đội ngũ đầu bài | tỉ lệ 2:1, rộng từ 2000px |
| `activity-workshop.svg` | Buổi chia sẻ chuyên môn | tỉ lệ 3:2, rộng từ 1200px |
| `activity-event.svg` | Sự kiện công nghệ | tỉ lệ 3:2, rộng từ 1200px |
| `activity-outing.svg` | Hoạt động gắn kết | tỉ lệ 2:1, rộng từ 2000px |

Khi có ảnh thật: đặt file .jpg hoặc .webp vào `public/about/` rồi đổi đường dẫn trong hằng `photos` của `page.tsx`. Chú thích ảnh lấy từ `aboutPage.teamCaption` và `aboutPage.photo*`.

## Trường nội dung

| Khóa | Mục đích |
|---|---|
| `aboutPage.title`, `aboutPage.lead` | Tiêu đề và đoạn mở đầu |
| `aboutPage.team*` | Ảnh và đoạn giới thiệu đội ngũ |
| `aboutPage.services*` | Đoạn dịch vụ và chữ của liên kết |
| `aboutPage.activities*`, `aboutPage.photo*` | Đoạn hoạt động và chú thích ảnh |
| `aboutPage.belief`, `aboutPage.closing`, `aboutPage.contactLink` | Câu trích, câu kết và liên kết liên hệ |

## Ghi chú cấu hình

- Trang này cố ý không có năm thành lập hay số liệu tăng trưởng.
- Khi danh sách dịch vụ thay đổi, sửa lại đoạn `aboutPage.services` cho khớp.
- Khi có hồ sơ pháp lý, thêm một đoạn thông tin công ty trước câu kết.
