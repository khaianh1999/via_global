# Trang chủ

## Định danh

| Mục | Giá trị |
|---|---|
| File | `src/app/[locale]/page.tsx` |
| URL VI | `/` |
| URL EN | `/en` |
| Mục tiêu | Giới thiệu doanh nghiệp, tạo ấn tượng uy tín trong một lần cuộn |
| SEO title | `meta.homeTitle` |
| SEO description | `meta.homeDescription` |

## Cấu trúc 8 khu vực

### 1. Header

| Mục | Cấu hình |
|---|---|
| Component | `src/components/layout/Header.tsx` |
| Vị trí logo | Trái, `Logo` |
| Menu | Giữa, `src/components/layout/nav.ts` |
| Phải | `VI \| EN` + nút Liên hệ hợp tác |
| Nền | Trắng, `border-b border-line`, `sticky top-0` |
| Menu VI | Trang chủ, Giới thiệu, Lĩnh vực hoạt động, Giải pháp, Dự án, Tin công nghệ, Liên hệ |
| Copy | `nav.*` trong `src/messages/*.json` |

Cách đổi menu: sửa `primaryNav` rồi bổ sung pathname trong `src/i18n/routing.ts`.

### 2. Hero

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/Hero.tsx` |
| Minh họa | `src/components/home/HeroVisual.tsx` |
| Tiêu đề | `hero.title` |
| Phụ đề | `hero.subtitle` |
| Đoạn mở | `hero.body` |
| Nút 1 | `hero.primary` → `/linh-vuc` |
| Nút 2 | `hero.secondary` → `/lien-he` |

Nội dung mặc định tiếng Việt:

- Công nghệ kiến tạo giá trị
- Đồng hành cùng doanh nghiệp trong kỷ nguyên số
- Đoạn mô tả giải pháp công nghệ, nền tảng số và truyền thông

Khi đã có tên pháp lý và năng lực thật, sửa `hero.*` ở cả hai file ngôn ngữ. Không để lại câu chung chung.

### 3. Giới thiệu ngắn

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/AboutPreview.tsx` |
| Tiêu đề | `aboutPreview.title` |
| Copy | `aboutPreview.body`, `point1`, `point2` |
| CTA | `aboutPreview.cta` → `/gioi-thieu` |
| Bố cục | Hai cột: nội dung trái, khối minh họa phải |

### 4. Lĩnh vực hoạt động

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/ExpertiseSection.tsx` |
| Dữ liệu | `src/content/expertise.ts` |
| Số thẻ | 3 |
| Nút | `/linh-vuc/[slug]` |

Ba thẻ mặc định:

1. Technology & Software
2. Cloud & Digital Infrastructure
3. Digital Media & Communication

### 5. Năng lực và lợi thế

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/Advantages.tsx` |
| Tiêu đề | `advantages.title` |
| 4 điểm | `advantages.items.*` |

Không gắn số liệu. Chỉ nêu năng lực, tư duy thực tiễn, tích hợp và đồng hành lâu dài.

### 6. Dự án tiêu biểu

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/FeaturedProjects.tsx` |
| Dữ liệu | 3 mục đầu trong `src/content/projects.ts` |
| Thẻ | Ảnh minh họa, tên, lĩnh vực, mô tả ngắn |
| CTA | `/du-an` |

### 7. Góc công nghệ

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/InsightsPreview.tsx` |
| Dữ liệu | 3 bài đầu trong `src/content/insights.ts` |
| CTA | `/cong-nghe` |

Chủ đề mặc định: AI trong doanh nghiệp, chuyển đổi số, Cloud, phần mềm, công nghệ truyền thông.

### 8. Liên hệ hợp tác

| Mục | Cấu hình |
|---|---|
| Component | `src/components/home/CtaContact.tsx` |
| Nền | Navy |
| Tiêu đề | `cta.title` |
| Nút | `cta.button` → `/lien-he` |

## Metadata

Hàm `buildPageMetadata` gắn:

- `canonical`: `/` hoặc `/en`
- `hreflang`: `vi`, `en`, `x-default`
- Open Graph locale: `vi_VN` / `en_US`

## Checklist biên tập trang chủ

- [ ] Hero không còn lời giới thiệu chung chung
- [ ] Tên công ty đã thay ở logo và eyebrow
- [ ] 3 lĩnh vực khớp năng lực thật
- [ ] Dự án hiển thị đúng vai trò, không bịa khách hàng
- [ ] Hai ngôn ngữ khớp ý, không dịch máy cứng
