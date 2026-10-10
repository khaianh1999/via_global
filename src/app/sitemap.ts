import { expertiseItems } from "@/content/expertise";
import { insights } from "@/content/insights";
import { projects } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { getPathname } from "@/i18n/navigation";
import { type Locale, type StaticPathname } from "@/i18n/routing";
import type { PageHref } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/gioi-thieu",
  "/linh-vuc",
  "/giai-phap",
  "/du-an",
  "/cong-nghe",
  "/lien-he",
] as const satisfies StaticPathname[];

function urlFor(locale: Locale, href: PageHref) {
  return `${siteConfig.url}${getPathname({ locale, href })}`;
}

function entry(href: PageHref): MetadataRoute.Sitemap[number] {
  return {
    url: urlFor("vi", href),
    lastModified: "2026-10-10",
    alternates: {
      languages: {
        vi: urlFor("vi", href),
        en: urlFor("en", href),
        "x-default": urlFor("vi", href),
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => entry(path)),
    ...expertiseItems.map((item) =>
      entry({ pathname: "/linh-vuc/[slug]", params: { slug: item.slug } }),
    ),
    ...solutions.map((item) =>
      entry({ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }),
    ),
    ...projects.map((item) =>
      entry({ pathname: "/du-an/[slug]", params: { slug: item.slug } }),
    ),
    ...insights.map((item) =>
      entry({ pathname: "/cong-nghe/[slug]", params: { slug: item.slug } }),
    ),
  ];
}
