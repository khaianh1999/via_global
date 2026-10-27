export function publicPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteConfig = {
  name: "VIA Global",
  shortName: "VIA",
  legalName: {
    vi: "Công ty Cổ phần Công nghệ và Truyền thông VIA Global",
    en: "VIA Global Technology and Media Joint Stock Company",
  },
  // Enterprise registration (tax) number and first registration date.
  taxId: "0111638951",
  foundingDate: "2026-09-23",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "contact@viaglobal.vn",
  phone: "0825 319 319",
  phoneE164: "+84825319319",
  address: {
    vi: "Tổ dân phố Đông Sơn, Phường Chương Mỹ, Thành phố Hà Nội, Việt Nam",
    en: "Dong Son Residential Group, Chuong My Ward, Hanoi, Vietnam",
  },
  addressParts: {
    street: { vi: "Tổ dân phố Đông Sơn, Phường Chương Mỹ", en: "Dong Son Residential Group, Chuong My Ward" },
    locality: { vi: "Hà Nội", en: "Hanoi" },
    country: "VN",
  },
  social: {
    linkedin: "",
    facebook: "",
  },
  zalo: {
    phone: process.env.NEXT_PUBLIC_ZALO_PHONE ?? "",
    href: process.env.NEXT_PUBLIC_ZALO_PHONE
      ? `https://zalo.me/${process.env.NEXT_PUBLIC_ZALO_PHONE}`
      : "",
  },
  // Sections that can be switched off without deleting their code.
  // Projects is hidden for now: no menu link, no homepage section, pages return 404.
  features: {
    projects: false,
  },
} as const;
