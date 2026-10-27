# Dự án

## Định danh

| Mục | Giá trị |
|---|---|
| Danh sách | `src/app/[locale]/du-an/page.tsx` |
| Chi tiết | `src/app/[locale]/du-an/[slug]/page.tsx` |
| Dữ liệu | `src/content/projects.ts` |
| Ảnh bìa | `public/projects/` (trường `cover`) |
| URL VI | `/du-an`, `/du-an/[slug]` |
| URL EN | `/en/projects`, `/en/projects/[slug]` |

## Đang tạm ẩn

Trang Dự án đang tắt bằng `siteConfig.features.projects = false` trong `src/lib/site.ts`. Khi tắt:

- Không có mục Dự án trong menu đầu trang, menu điện thoại và chân trang
- Trang chủ không hiện khối dự án, thanh mục bên phải bỏ mục Dự án
- `/du-an`, `/en/projects` và các trang chi tiết trả về 404, không index
- Sitemap không liệt kê các URL dự án

Muốn mở lại: đổi thành `projects: true` rồi build lại. Code và dữ liệu dự án vẫn giữ nguyên.

## Bố cục trang danh sách

1. Hero nền tối (`DarkPageHero`, cùng kiểu trang chủ và Dịch vụ): nhãn, tiêu đề, lead; bên phải là xấp ảnh bìa dự án
2. Dự án nổi bật: dự án đầu tiên trong `projects`, ảnh lớn bên trái, nội dung bên phải; bên dưới là `projectsPage.disclaimer`
3. Các dự án khác trên nền xanh nhạt: lưới ba cột thẻ trắng, mỗi thẻ có ảnh, số thứ tự, lĩnh vực, tên, mô tả, vai trò
4. Khối liên hệ `CtaContact`

Muốn đổi dự án nổi bật, đưa dự án đó lên đầu mảng `projects`. Cùng ảnh bìa được dùng ở trang chủ, trang danh sách và trang chi tiết.

Mỗi dự án ghi rõ vai trò của công ty và ghi chú loại hạng mục (dự án triển khai thực tế / sản phẩm nội bộ / mô hình triển khai) ở trang chi tiết.

## Schema dữ liệu

```ts
{
  slug: string
  field: { vi: string; en: string }
  role: { vi: string; en: string }
  title: { vi: string; en: string }
  excerpt: { vi: string; en: string }
  body: { vi: string; en: string }
  cover: string // đường dẫn ảnh trong public/projects/, tỉ lệ 16:9
  note: { vi: string; en: string }
}
```

## Khi có dự án thương mại thật

1. Thay title, excerpt, body bằng thông tin được phép công bố
2. Ghi đúng vai trò: tư vấn, thiết kế, phát triển, triển khai, bảo trì
3. Thay ảnh bìa bằng ảnh thật (16:9, rộng từ 1280px) trong `public/projects/` và cập nhật `cover`
4. Không thêm số liệu “tăng X%” nếu khách hàng không xác nhận
