import type { StaticPathname } from "@/i18n/routing";

export const primaryNav: Array<{ href: StaticPathname; key: string }> = [
  { href: "/", key: "home" },
  { href: "/gioi-thieu", key: "about" },
  { href: "/linh-vuc", key: "expertise" },
  { href: "/giai-phap", key: "solutions" },
  { href: "/du-an", key: "projects" },
  { href: "/cong-nghe", key: "insights" },
  { href: "/lien-he", key: "contact" },
];
