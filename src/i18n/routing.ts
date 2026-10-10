import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/gioi-thieu": {
      vi: "/gioi-thieu",
      en: "/about",
    },
    "/linh-vuc": {
      vi: "/linh-vuc",
      en: "/expertise",
    },
    "/linh-vuc/[slug]": {
      vi: "/linh-vuc/[slug]",
      en: "/expertise/[slug]",
    },
    "/giai-phap": {
      vi: "/giai-phap",
      en: "/solutions",
    },
    "/giai-phap/[slug]": {
      vi: "/giai-phap/[slug]",
      en: "/solutions/[slug]",
    },
    "/du-an": {
      vi: "/du-an",
      en: "/projects",
    },
    "/du-an/[slug]": {
      vi: "/du-an/[slug]",
      en: "/projects/[slug]",
    },
    "/cong-nghe": {
      vi: "/cong-nghe",
      en: "/insights",
    },
    "/cong-nghe/[slug]": {
      vi: "/cong-nghe/[slug]",
      en: "/insights/[slug]",
    },
    "/lien-he": {
      vi: "/lien-he",
      en: "/contact",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
export type StaticPathname = Exclude<
  AppPathname,
  | "/linh-vuc/[slug]"
  | "/giai-phap/[slug]"
  | "/du-an/[slug]"
  | "/cong-nghe/[slug]"
>;
