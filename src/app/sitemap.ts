import { insights } from "@/content/insights";
import { projects } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { routing, type Locale, type StaticPathname } from "@/i18n/routing";
import { absoluteUrl, resolveHref, type PageHref } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_UPDATED = "2026-10-27";

type Entry = {
  href: PageHref;
  lastModified?: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticPages: { path: StaticPathname; changeFrequency: Entry["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/giai-phap", changeFrequency: "monthly", priority: 0.9 },
  { path: "/gioi-thieu", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cong-nghe", changeFrequency: "weekly", priority: 0.7 },
  { path: "/lien-he", changeFrequency: "yearly", priority: 0.6 },
];

const urlFor = (locale: Locale, href: PageHref) => absoluteUrl(resolveHref(locale, href));

// One URL per locale, each listing every language version for hreflang.
function expand({ href, lastModified = SITE_UPDATED, changeFrequency, priority }: Entry): MetadataRoute.Sitemap {
  const languages = {
    vi: urlFor("vi", href),
    en: urlFor("en", href),
    "x-default": urlFor("vi", href),
  };

  return routing.locales.map((locale) => ({
    url: urlFor(locale, href),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    ...(siteConfig.features.projects
      ? [{ href: "/du-an" as const, changeFrequency: "monthly" as const, priority: 0.7 }]
      : []),
    ...staticPages.map(({ path, changeFrequency, priority }) => ({ href: path, changeFrequency, priority })),
    ...solutions.map((item) => ({
      href: { pathname: "/giai-phap/[slug]" as const, params: { slug: item.slug } },
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...(siteConfig.features.projects ? projects : []).map((item) => ({
      href: { pathname: "/du-an/[slug]" as const, params: { slug: item.slug } },
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((item) => ({
      href: { pathname: "/cong-nghe/[slug]" as const, params: { slug: item.slug } },
      lastModified: item.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  return entries.flatMap(expand);
}
