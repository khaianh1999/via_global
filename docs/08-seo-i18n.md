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
src/app/[locale]/giai-phap/page.tsx
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

## Sitemap, robots, manifest

- `src/app/sitemap.ts`: mỗi trang có một URL cho từng ngôn ngữ (`/` và `/en`), kèm hreflang, `lastModified` (bài viết lấy theo `date`), `changeFrequency` và `priority`
- `src/app/robots.ts`: cho phép toàn site, trỏ sitemap. Không chặn `/_next/` vì Google cần CSS/JS để hiển thị trang
- `src/app/manifest.ts`: tên, màu theme `#061733`, icon
- Khi build GitHub Pages (`trailingSlash`), `absoluteUrl` thêm dấu `/` cuối để sitemap, JSON-LD và canonical khớp nhau

## Metadata chung

`src/app/[locale]/layout.tsx` khai báo `metadataBase`, template tiêu đề `%s | VIA Global`, `keywords` (`meta.keywords`), tác giả, nhà xuất bản, `theme-color` và ảnh chia sẻ mặc định.

Trang chủ dùng tiêu đề tuyệt đối `VIA Global | <meta.homeTitle>` vì cùng cấp với layout nên không nhận template.

Xác minh Google Search Console: đặt `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` rồi build lại, thẻ `google-site-verification` sẽ tự xuất hiện.

## Open Graph và Twitter

`buildPageMetadata` (`src/lib/metadata.ts`) gửi cho mọi trang:

- `og:title`, `og:description`, `og:url`, `og:site_name`
- `og:locale` và `og:locale:alternate` (`vi_VN` / `en_US`)
- `og:image` 1200×630: mặc định `public/og/default.png`; bài viết và dự án dùng ảnh bìa nếu là .jpg/.png (mạng xã hội không hiển thị SVG nên ảnh .svg tự rơi về ảnh mặc định)
- Bài viết: `og:type=article`, `article:published_time`, `article:section`, `article:author`
- `twitter:card=summary_large_image` cùng tiêu đề, mô tả, ảnh
- `robots`: `max-image-preview: large`, `max-snippet: -1`

## Dữ liệu cấu trúc (JSON-LD)

Hàm dựng nằm trong `src/lib/structured-data.tsx`, render bằng `<JsonLd />`:

| Trang | Schema |
|---|---|
| Mọi trang (layout) | `Organization` (email, điện thoại, địa chỉ, ContactPoint), `WebSite` |
| Giới thiệu | `AboutPage`, `BreadcrumbList` |
| Dịch vụ / Dự án / Tin công nghệ | `CollectionPage`, `ItemList`, `BreadcrumbList` |
| Chi tiết dịch vụ | `Service` (nhà cung cấp, lĩnh vực, đối tượng), `BreadcrumbList` |
| Chi tiết dự án | `CreativeWork`, `BreadcrumbList` |
| Chi tiết bài viết | `BlogPosting` (ngày đăng, ảnh, chuyên mục), `BreadcrumbList` |
| Liên hệ | `ContactPage`, `BreadcrumbList` |

Kiểm tra bằng [Rich Results Test](https://search.google.com/test/rich-results) hoặc [Schema Markup Validator](https://validator.schema.org/). Khi có trang mạng xã hội, điền `siteConfig.social` để thêm `sameAs`.

## Chuyển ngôn ngữ

`LanguageSwitcher` giữ nguyên pathname nội bộ và đổi locale. Trang `/gioi-thieu` trở thành `/en/about`. Trang có `[slug]` giữ nguyên slug vì slug dữ liệu đang dùng chung hai ngôn ngữ.

## Checklist SEO trước khi lên production

- [ ] Đổi `NEXT_PUBLIC_SITE_URL` thành domain thật
- [ ] Rà title/description từng trang, độ dài hợp lý
- [ ] Xác nhận hreflang trên HTML và sitemap
- [ ] Không index trang thử nghiệm
- [ ] Thêm Search Console cho cả `/` và `/en`, đặt `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- [ ] Thay số điện thoại, địa chỉ placeholder trong `src/lib/site.ts` (đang được đưa vào JSON-LD)
- [ ] Điền `siteConfig.social` khi có trang mạng xã hội
- [ ] Gửi `sitemap.xml` lên Search Console
