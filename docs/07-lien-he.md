# Liên hệ

## Định danh

| Mục | Giá trị |
|---|---|
| File | `src/app/[locale]/lien-he/page.tsx` |
| Form | `src/components/contact/ContactForm.tsx` |
| URL VI | `/lien-he` |
| URL EN | `/en/contact` |
| Copy | `contactPage.*` |

## Bố cục

1. Hero nền tối `DarkPageHero` (cùng kiểu trang chủ và Dịch vụ): nhãn, tiêu đề, lead
2. Bên phải hero: thẻ kính với email, điện thoại, Zalo (chỉ hiện khi đặt `NEXT_PUBLIC_ZALO_PHONE`) và địa chỉ
3. Bên dưới, trên nền xanh nhạt: thẻ form, nhu cầu chính chọn bằng các nút tròn, sau đó là thông tin liên hệ và nội dung

## Trường form

| Name | Bắt buộc | Mục đích |
|---|---|---|
| `name` | Có | Họ và tên |
| `company` | Không | Doanh nghiệp |
| `email` | Có | Email phản hồi |
| `phone` | Không | Số điện thoại |
| `topic` | Có | Nhu cầu chính |
| `message` | Có | Nội dung trao đổi |

Giá trị `topic`: `software`, `ai`, `media`, `cloud`, `other` (mặc định `software`).

## Hành vi hiện tại

Form chỉ kiểm tra tên, email, nội dung ở trình duyệt rồi hiện trạng thái thành công. **Chưa gửi dữ liệu đi đâu**: chưa có server action, email hay CRM.

Trạng thái thành công dùng `contactPage.successTitle` và `successBody`.

## Cấu hình thông tin liên hệ

Sửa `src/lib/site.ts`:

```ts
legalName: { vi: "Công ty Cổ phần Công nghệ và Truyền thông VIA Global", en: "VIA Global Technology and Media Joint Stock Company" }
taxId: "0111638951"           // mã số doanh nghiệp, hiện ở chân trang và JSON-LD
email: "contact@viaglobal.vn"
phone: "0825 319 319"         // hiển thị
phoneE164: "+84825319319"     // dùng cho tel: và JSON-LD
address: { vi: "Tổ dân phố Đông Sơn, Phường Chương Mỹ, Thành phố Hà Nội, Việt Nam", en: "Dong Son Residential Group, Chuong My Ward, Hanoi, Vietnam" }
```

Thông tin lấy theo giấy đăng ký doanh nghiệp, hiển thị ở chân trang, trang Liên hệ và dữ liệu cấu trúc (JSON-LD).

## Tích hợp gửi mail sau này

Trong `onSubmit` của `ContactForm.tsx`, gửi dữ liệu tới một dịch vụ nhận form (Resend, SMTP qua API, CRM, Formspree...). Bản build GitHub Pages là trang tĩnh nên không chạy được server action. Giữ nguyên schema form để không phải đổi UI.

Không công khai địa chỉ nội bộ hay webhook trên client.
