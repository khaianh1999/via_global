import type { StaticPathname } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const allNav: Array<{ href: StaticPathname; key: string }> = [
  { href: "/", key: "home" },
  { href: "/gioi-thieu", key: "about" },
  { href: "/giai-phap", key: "solutions" },
  { href: "/du-an", key: "projects" },
  { href: "/cong-nghe", key: "insights" },
  { href: "/lien-he", key: "contact" },
];

// Projects stays out of the menus while siteConfig.features.projects is off.
export const primaryNav = allNav.filter((item) => item.href !== "/du-an" || siteConfig.features.projects);
