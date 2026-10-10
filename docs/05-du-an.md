# Dự án

## Định danh

| Mục | Giá trị |
|---|---|
| Danh sách | `src/app/[locale]/du-an/page.tsx` |
| Chi tiết | `src/app/[locale]/du-an/[slug]/page.tsx` |
| Dữ liệu | `src/content/projects.ts` |
| Ảnh thẻ | `src/components/projects/ProjectCover.tsx` |
| URL VI | `/du-an`, `/du-an/[slug]` |
| URL EN | `/en/projects`, `/en/projects/[slug]` |

## Cách trình bày khi chưa có nhiều dự án thương mại

Mỗi thẻ gồm:

- Hình minh họa trừu tượng theo `accent`
- Tên dự án
- Lĩnh vực
- Mô tả ngắn
- Trang chi tiết ghi rõ vai trò của công ty
- Ghi chú: dự án triển khai thực tế / sản phẩm nội bộ / mô hình triển khai

Trang danh sách có `projectsPage.disclaimer` để nói rõ tên khách hàng chỉ được nêu khi có đồng ý.

## Schema dữ liệu

```ts
{
  slug: string
  field: { vi: string; en: string }
  role: { vi: string; en: string }
  title: { vi: string; en: string }
  excerpt: { vi: string; en: string }
  body: { vi: string; en: string }
  accent: "navy" | "blue" | "ice" | "slate"
  note: { vi: string; en: string }
}
```

## Khi có dự án thương mại thật

1. Thay title, excerpt, body bằng thông tin được phép công bố
2. Ghi đúng vai trò: tư vấn, thiết kế, phát triển, triển khai, bảo trì
3. Có thể thay `ProjectCover` bằng ảnh thật trong `public/projects/`
4. Không thêm số liệu “tăng X%” nếu khách hàng không xác nhận
