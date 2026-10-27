# Giải pháp

## Định danh

| Mục | Giá trị |
|---|---|
| Danh sách | `src/app/[locale]/giai-phap/page.tsx` |
| Chi tiết | `src/app/[locale]/giai-phap/[slug]/page.tsx` |
| Dữ liệu | `src/content/solutions.ts` |
| Copy khung trang | `solutionsPage.*` trong `src/messages/*.json` |
| URL VI | `/giai-phap`, `/giai-phap/[slug]` |
| URL EN | `/en/solutions`, `/en/solutions/[slug]` |

## Bố cục trang danh sách

1. Hero nền tối: tiêu đề, lead, hai nút, ba con số, hình `public/solutions/hero.svg`
2. Ba thẻ lĩnh vực (lấy từ `src/content/expertise.ts`), bấm để cuộn tới nhóm tương ứng (`#technology-software`, ...)
3. Mỗi lĩnh vực một khối: các dịch vụ xếp so le ảnh/chữ; giải pháp `product: true` nằm trong khung tối
4. Vì sao chọn VIA Global và quy trình 4 bước dạng dòng thời gian
5. Lời kết và CTA liên hệ

Trang Lĩnh vực đã bỏ; lĩnh vực giờ chỉ là cách nhóm dịch vụ trên trang này.

## Hình minh họa

Mỗi dịch vụ có một hình SVG tại `public/solutions/<slug>.svg` (800×520), lấy qua `solutionImage(slug)`. Thêm dịch vụ mới thì thêm hình cùng tên slug.

## Bố cục trang chi tiết

1. Hero nền navy: liên kết về danh sách, icon và lĩnh vực (hoặc nhãn sản phẩm), tên dịch vụ, `excerpt`, nút liên hệ và nút cuộn xuống; ảnh dịch vụ bên phải
2. Tổng quan: `tagline` làm câu dẫn, các đoạn `body`; bên phải là thẻ tối dính khi cuộn gồm `audience`, `highlights` và liên kết lĩnh vực
3. Phạm vi dịch vụ (thẻ đánh số) và Giá trị mang lại trên nền xanh nhạt; `note` nếu có
4. Quy trình bốn bước trên nền tối
5. Dịch vụ khác dạng thẻ có ảnh
6. Khối liên hệ `CtaContact`

## Danh mục

| Slug | Liên kết lĩnh vực |
|---|---|
| `enterprise-software` | technology-software |
| `digital-platforms` | technology-software |
| `cloud-architecture` | cloud-infrastructure |
| `system-integration` | technology-software |
| `media-technology` | digital-media |

## Schema dữ liệu

Mỗi giải pháp có bản `vi` và `en` cho toàn bộ trường:

```ts
{
  slug: string
  expertise: string
  title
  excerpt
  problem
  audience
  highlights: string[3]
  body: string[]
  scope: string[]
  process: { title: string; body: string }[]
  outcomes: string[]
  fit: string[]
  notFor: string[]
}
```

## Nguyên tắc viết

- Viết theo bài toán và điều kiện hợp tác, không theo tính năng phô trương
- Có mục “chưa phải lựa chọn nếu” để giữ uy tín
- Không cam kết định lượng nếu chưa đo được
- Bản tiếng Anh tương đương ý, không dịch từ từng chữ
