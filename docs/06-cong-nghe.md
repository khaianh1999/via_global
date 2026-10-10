# Tin công nghệ

## Định danh

| Mục | Giá trị |
|---|---|
| Danh sách | `src/app/[locale]/cong-nghe/page.tsx` |
| Chi tiết | `src/app/[locale]/cong-nghe/[slug]/page.tsx` |
| Dữ liệu | `src/content/insights.ts` |
| URL VI | `/cong-nghe`, `/cong-nghe/[slug]` |
| URL EN | `/en/insights`, `/en/insights/[slug]` |

## Mục tiêu chuyên môn

- Thể hiện cách công ty nghĩ về công nghệ
- Hỗ trợ SEO cho các cụm từ: AI doanh nghiệp, chuyển đổi số, Cloud, phần mềm, truyền thông số
- Giúp khách hàng hiểu năng lực trước khi liên hệ

## Bài viết mặc định

| Slug | Chủ đề |
|---|---|
| `ai-in-the-enterprise` | Ứng dụng AI trong doanh nghiệp |
| `digital-transformation` | Giải pháp công nghệ và chuyển đổi số |
| `cloud-and-internet` | Hạ tầng Cloud và Internet |
| `software-craft` | Công nghệ phần mềm |
| `media-technology-trends` | Xu hướng công nghệ truyền thông |

## Schema dữ liệu

```ts
{
  slug: string
  topic: { vi: string; en: string }
  title: { vi: string; en: string }
  excerpt: { vi: string; en: string }
  date: string
  readTime: number
  body: { vi: string[]; en: string[] }
}
```

## Quy tắc biên tập

- Mỗi bài có bản Việt và Anh riêng, không để một ngôn ngữ làm bản gốc lộ trong ngôn ngữ kia
- Mở bài bằng luận điểm, không bằng định nghĩa Wikipedia
- Có thể nhắc VIA Global như chủ thể tư duy, không biến bài viết thành brochure
- Khi xuất bản bài mới: thêm vào `insights.ts`, sitemap sẽ tự lấy
