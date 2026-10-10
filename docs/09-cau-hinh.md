# Cấu hình vận hành

## Biến môi trường

File mẫu: `.env.example`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ZALO_PHONE=0326927477
```

`NEXT_PUBLIC_ZALO_PHONE` là số Zalo, không kèm `https://zalo.me/`. Website tự tạo link `https://zalo.me/{số}`. Đổi số rồi khởi động lại `npm run dev`.

Trên production đặt domain chính thức, không có dấu `/` ở cuối. Ví dụ: `https://via-global.vn`.

## Lệnh

```bash
npm run dev      # phát triển
npm run build    # build production
npm run start    # chạy bản build
npm run lint     # eslint
```

## File cần biết khi bàn giao

| Việc cần làm | File |
|---|---|
| Đổi tên công ty, email, điện thoại | `src/lib/site.ts` |
| Đổi số Zalo (nút góc phải) | `.env.local` → `NEXT_PUBLIC_ZALO_PHONE` |
| Đổi copy giao diện | `src/messages/vi.json`, `en.json` |
| Đổi URL ngôn ngữ | `src/i18n/routing.ts` |
| Đổi màu | `src/app/globals.css` |
| Đổi menu | `src/components/layout/nav.ts` |
| Đổi lĩnh vực / giải pháp / dự án / bài viết | `src/content/*.ts` |
| Đổi hành vi form | `src/app/actions/contact.ts` |

## Header và Footer

Header cố định khi cuộn. Footer lặp lại điều hướng, email, điện thoại và ghi chú placeholder pháp lý.

Khi có giấy phép kinh doanh, thay `footer.placeholderNote` bằng thông tin MST, địa chỉ đăng ký và họ tên người đại diện nếu pháp lý yêu cầu.

## Form liên hệ

Hiện tại chỉ validate và log. Không lưu database. Không gửi mail.

Trước khi nhận lead thật:

1. Kết nối email hoặc CRM
2. Thêm chống spam nếu cần
3. Lưu consent nếu dùng dữ liệu cho marketing

## Những gì cố tình chưa làm

- Không bịa số khách hàng, năm kinh nghiệm, doanh thu
- Không dùng ảnh stock đội ngũ
- Không tự nhận diện ngôn ngữ theo trình duyệt
- Chưa gắn CMS; nội dung nằm trong Git để kiểm soát biên tập

## Thứ tự việc sau khi có thông tin thật

1. Chốt tên thương hiệu và tên pháp lý
2. Cập nhật logo, favicon, email, điện thoại, địa chỉ
3. Viết lại Hero và trang Giới thiệu
4. Thay dự án minh họa bằng hạng mục được phép công bố
5. Gắn domain, sitemap, Search Console
6. Kết nối form liên hệ
