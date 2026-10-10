# Liên hệ

## Định danh

| Mục | Giá trị |
|---|---|
| File | `src/app/[locale]/lien-he/page.tsx` |
| Form | `src/components/contact/ContactForm.tsx` |
| Action | `src/app/actions/contact.ts` |
| URL VI | `/lien-he` |
| URL EN | `/en/contact` |
| Copy | `contactPage.*` |

## Trường form

| Name | Bắt buộc | Mục đích |
|---|---|---|
| `name` | Có | Họ và tên |
| `company` | Không | Doanh nghiệp |
| `email` | Có | Email phản hồi |
| `phone` | Không | Số điện thoại |
| `topic` | Có | Nhu cầu chính |
| `message` | Có | Nội dung trao đổi |

Giá trị `topic`: `software`, `cloud`, `media`, `other`.

## Hành vi hiện tại

`submitContact` kiểm tra tên, email, nội dung rồi ghi log phía server. Chưa gửi email SMTP.

Trạng thái thành công dùng `contactPage.successTitle` và `successBody`.

## Cấu hình thông tin liên hệ

Sửa `src/lib/site.ts`:

```ts
email: "contact@via-global.vn"
phone: "+84 000 000 000"
address: { vi: "Việt Nam", en: "Vietnam" }
```

Các giá trị này hiện là placeholder và được nêu trong footer.

## Tích hợp gửi mail sau này

Thay phần `console.info` trong `src/app/actions/contact.ts` bằng nhà cung cấp email (Resend, SMTP, CRM). Giữ nguyên schema form để không phải đổi UI.

Không công khai địa chỉ nội bộ hay webhook trên client.
