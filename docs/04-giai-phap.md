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

1. `PageHero`: tiêu đề và lead
2. Ba nguyên tắc định nghĩa giải pháp: bắt đầu từ việc, phạm vi có thể chốt, nói rõ khi không phù hợp
3. Năm thẻ lớn: số thứ tự, lĩnh vực, mô tả, ba điểm nhấn, nút xem chi tiết
4. CTA liên hệ

## Bố cục trang chi tiết

1. Hero: lĩnh vực, tên giải pháp, excerpt
2. Ba đoạn phân tích
3. Bài toán / Dành cho ai
4. Phạm vi triển khai và kết quả hướng tới
5. Bốn bước triển khai
6. Phù hợp khi / Chưa phải lựa chọn nếu
7. Các giải pháp khác
8. CTA liên hệ

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
