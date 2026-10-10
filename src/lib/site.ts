export const siteConfig = {
  name: "VIA Global",
  shortName: "VIA",
  legalName: "VIA Global",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "contact@via-global.vn",
  phone: "+84 000 000 000",
  address: {
    vi: "Việt Nam",
    en: "Vietnam",
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
} as const;
