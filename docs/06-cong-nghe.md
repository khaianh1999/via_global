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

## Bố cục

- Danh sách: kiểu blog, nền trắng. Đầu trang căn giữa trên nền xanh nhạt (nhãn, tiêu đề, lead); bài mới nhất (theo `date`) là thẻ lớn ảnh + nội dung; các bài còn lại là lưới thẻ hai cột, mỗi thẻ có ảnh bo góc, chuyên mục, ngày, tiêu đề và hai dòng tóm tắt
- Chi tiết: đầu bài căn giữa (liên kết về danh sách, chuyên mục, ngày, thời gian đọc, tiêu đề, tóm tắt), ảnh bìa lớn bo góc, nội dung một cột rộng khoảng 42rem, chữ ký VIA Global, rồi ba bài khác dạng thẻ trên nền xanh nhạt
- Ảnh bìa dùng chung cho trang chủ, danh sách và chi tiết

## Schema dữ liệu

```ts
{
  slug: string
  topic: { vi: string; en: string }
  title: { vi: string; en: string }
  excerpt: { vi: string; en: string }
  date: string
  readTime: number
  cover: string // ảnh bìa trong public/insights/, tỉ lệ 16:9
  body: { vi: string[]; en: string[] }
}
```

## Quy tắc biên tập

- Mỗi bài có bản Việt và Anh riêng, không để một ngôn ngữ làm bản gốc lộ trong ngôn ngữ kia
- Mở bài bằng luận điểm, không bằng định nghĩa Wikipedia
- Có thể nhắc VIA Global như chủ thể tư duy, không biến bài viết thành brochure
- Khi xuất bản bài mới: thêm vào `insights.ts` kèm ảnh bìa trong `public/insights/`, sitemap sẽ tự lấy
