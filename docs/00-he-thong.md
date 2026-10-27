# Tổng quan hệ thống

## Mục tiêu sản phẩm

Website là mặt tiền uy tín của doanh nghiệp. Khách hàng và đối tác cần nhìn thấy:

- Phạm vi năng lực rõ ràng
- Cách làm việc có kiểm soát
- Thông tin liên hệ dễ tìm
- Hai phiên bản ngôn ngữ nhất quán

## Stack kỹ thuật

| Thành phần | Giá trị | File cấu hình |
|---|---|---|
| Framework | Next.js 16 App Router | `package.json` |
| Styling | Tailwind CSS 4 | `src/app/globals.css` |
| Ngôn ngữ | TypeScript | `tsconfig.json` |
| i18n | next-intl 4 | `src/i18n/routing.ts` |
| Proxy locale | next-intl middleware | `src/proxy.ts` |
| Font chữ | Be Vietnam Pro (một font cho toàn site) | `src/app/[locale]/layout.tsx` |

## Cấu trúc thư mục quan trọng

```text
src/
  app/[locale]/          Màn hình theo locale
  components/            Header, Footer, khu vực trang chủ, UI
  content/               Dự án, giải pháp, lĩnh vực, bài viết
  i18n/                  Routing, navigation, request config
  messages/              Bản dịch giao diện vi.json / en.json
  lib/site.ts            Tên thương hiệu, email, điện thoại, URL
docs/                    Tài liệu cấu hình từng màn
```

## Hệ thống thiết kế

### Màu sắc

| Token | Mã | Vai trò |
|---|---|---|
| `navy` | `#0B1F3A` | Tiêu đề, nút chính, CTA |
| `blue` | `#1A5F9E` | Nhãn, liên kết, điểm nhấn |
| `ice` | `#F3F7FB` | Nền phụ, khối giới thiệu |
| `line` | `#D5E2EE` | Đường phân cách mảnh |
| `ink` | `#142033` | Văn bản chính |
| `muted` | `#5D6B7C` | Văn bản phụ |
| `paper` | `#FFFFFF` | Nền chính |

Không bật dark mode. Website giữ nền trắng – xanh dương để tạo cảm giác sang và tin cậy.

### Typography

- Tiêu đề: Be Vietnam Pro đậm (class `font-serif` giữ tên cũ nhưng hiển thị weight 700), tracking chặt, màu navy
- Nội dung: Be Vietnam Pro, sans-serif, leading rộng
- Nhãn nhỏ: uppercase, tracking rộng, màu blue
- Cả hai font đều có subset tiếng Việt

### Layout

- Chiều rộng tối đa: `72rem` (`max-w-6xl`)
- Header cao 76px, nền trắng, `sticky`, đường kẻ mảnh
- Menu giữa trên desktop, hamburger trên mobile
- Khoảng cách section: `py-20` đến `py-28`

### Thương hiệu tạm thời

Tên **VIA Global** lấy theo thư mục dự án và có thể thay. Các vị trí cần sửa khi chốt tên pháp lý:

1. `src/lib/site.ts`
2. `src/messages/vi.json` và `src/messages/en.json`
3. `src/components/brand/Logo.tsx`
4. `src/app/icon.tsx`
5. Các đoạn copy trong `src/content/` còn nhắc tên công ty
6. Toàn bộ tài liệu trong `docs/`

## Điều hướng chính

| Menu VI | Menu EN | Path nội bộ | URL VI | URL EN |
|---|---|---|---|---|
| Trang chủ | Home | `/` | `/` | `/en` |
| Giới thiệu | About | `/gioi-thieu` | `/gioi-thieu` | `/en/about` |
| Giải pháp | Solutions | `/giai-phap` | `/giai-phap` | `/en/solutions` |
| Dự án | Projects | `/du-an` | `/du-an` | `/en/projects` |
| Tin công nghệ | Insights | `/cong-nghe` | `/cong-nghe` | `/en/insights` |
| Liên hệ | Contact | `/lien-he` | `/lien-he` | `/en/contact` |

Path nội bộ luôn dùng slug tiếng Việt. next-intl tự đổi URL tiếng Anh.
