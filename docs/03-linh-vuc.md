# Lĩnh vực hoạt động

## Định danh

| Mục | Giá trị |
|---|---|
| Danh sách | `src/app/[locale]/linh-vuc/page.tsx` |
| Chi tiết | `src/app/[locale]/linh-vuc/[slug]/page.tsx` |
| Dữ liệu | `src/content/expertise.ts` |
| URL VI | `/linh-vuc`, `/linh-vuc/[slug]` |
| URL EN | `/en/expertise`, `/en/expertise/[slug]` |

## Slug mặc định

| Slug | Tên |
|---|---|
| `technology-software` | Technology & Software |
| `cloud-infrastructure` | Cloud & Digital Infrastructure |
| `digital-media` | Digital Media & Communication |

## Schema dữ liệu

```ts
{
  slug: string
  icon: "technology" | "cloud" | "media"
  title: { vi: string; en: string }
  excerpt: { vi: string; en: string }
  summary: { vi: string; en: string }
  points: { vi: string[]; en: string[] }
}
```

## Trang chi tiết

- Hero lấy `title` + `summary`
- Danh sách `points`
- Cột phải liệt kê giải pháp có `expertise` trùng slug
- CTA liên hệ ở cuối

## Cách thêm lĩnh vực mới

1. Thêm object vào `expertiseItems`
2. Thêm icon trong `src/components/icons/Icons.tsx` nếu cần
3. Gắn giải pháp liên quan trong `src/content/solutions.ts`
4. Không cần tạo file trang mới; `[slug]` đã phủ toàn bộ danh sách
