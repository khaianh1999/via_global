# SEO và website song ngữ

## Chiến lược URL

Tiếng Việt là locale mặc định, không có tiền tố. Tiếng Anh dùng `/en`.

Cấu hình trong `src/i18n/routing.ts`:

```ts
locales: ["vi", "en"]
defaultLocale: "vi"
localePrefix: "as-needed"
localeDetection: false
```

`localeDetection: false` để `/` luôn là tiếng Việt. Trình duyệt và cookie không được tự đẩy người dùng sang `/en`. Điều này ổn định cho SEO và cho việc chia sẻ link.

## Pathname nội bộ và pathname công khai

App Router dùng path tiếng Việt:

```text
src/app/[locale]/gioi-thieu/page.tsx
src/app/[locale]/linh-vuc/page.tsx
```

next-intl rewrite:

- `/gioi-thieu` → locale `vi`
- `/en/about` → locale `en`, cùng page file

Mọi `Link` phải import từ `@/i18n/navigation`, không dùng `next/link`.

## Canonical và hreflang

`src/lib/metadata.ts` tạo:

- `alternates.canonical` theo locale hiện tại
- `alternates.languages.vi`
- `alternates.languages.en`
- `alternates.languages.x-default` trỏ về bản tiếng Việt

Ví dụ trang giới thiệu:

| Locale | Canonical | hreflang vi | hreflang en | x-default |
|---|---|---|---|---|
| vi | `/gioi-thieu` | `/gioi-thieu` | `/en/about` | `/gioi-thieu` |
| en | `/en/about` | `/gioi-thieu` | `/en/about` | `/gioi-thieu` |

`metadataBase` lấy từ `NEXT_PUBLIC_SITE_URL`.

## Sitemap và robots

- `src/app/sitemap.ts`: trang tĩnh + toàn bộ slug
- Mỗi URL có `alternates.languages`
- `src/app/robots.ts` cho phép toàn site và trỏ sitemap

## Open Graph

Mỗi trang gửi:

- `og:title`, `og:description`
- `og:locale`: `vi_VN` hoặc `en_US`
- `og:site_name`: `VIA Global`
- `twitter:card`: `summary_large_image`

Ảnh Open Graph riêng có thể thêm sau vào `public/og/` rồi gắn `openGraph.images`.

## Chuyển ngôn ngữ

`LanguageSwitcher` giữ nguyên pathname nội bộ và đổi locale. Trang `/gioi-thieu` trở thành `/en/about`. Trang có `[slug]` giữ nguyên slug vì slug dữ liệu đang dùng chung hai ngôn ngữ.

## Checklist SEO trước khi lên production

- [ ] Đổi `NEXT_PUBLIC_SITE_URL` thành domain thật
- [ ] Rà title/description từng trang, độ dài hợp lý
- [ ] Xác nhận hreflang trên HTML và sitemap
- [ ] Không index trang thử nghiệm
- [ ] Thêm Search Console cho cả `/` và `/en`
