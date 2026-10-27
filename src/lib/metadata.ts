import { getPathname } from "@/i18n/navigation";
import type { Locale, StaticPathname } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

type DynamicHref =
  | { pathname: "/giai-phap/[slug]"; params: { slug: string } }
  | { pathname: "/du-an/[slug]"; params: { slug: string } }
  | { pathname: "/cong-nghe/[slug]"; params: { slug: string } };

export type PageHref = StaticPathname | DynamicHref;

export const defaultOgImage = {
  url: "/og/default.png",
  width: 1200,
  height: 630,
};

// Social networks do not render SVG, so SVG covers fall back to the default image.
export function socialImage(cover: string) {
  return cover.endsWith(".svg") ? undefined : { url: cover, width: 1280, height: 720 };
}

export function resolveHref(locale: Locale, href: PageHref): string {
  return getPathname({ locale, href });
}

// Absolute URL including any base path carried by NEXT_PUBLIC_SITE_URL.
// The GitHub Pages export uses trailingSlash, so page URLs get one to match the canonical tags.
export function absoluteUrl(path: string) {
  let normalized = path.startsWith("/") ? path : `/${path}`;
  const isPage = !/[.#]/.test(normalized.split("/").pop() ?? "");
  if (process.env.GITHUB_PAGES === "true" && isPage && !normalized.endsWith("/")) normalized += "/";
  return `${siteConfig.url.replace(/\/$/, "")}${normalized}`;
}

export function buildPageMetadata({
  locale,
  title,
  description,
  href,
  index = true,
  image,
  article,
  keywords,
}: {
  locale: Locale;
  title: string;
  description: string;
  href: PageHref;
  index?: boolean;
  /** Path under public/ (jpg/png; social networks do not render SVG). */
  image?: { url: string; width: number; height: number; alt?: string };
  article?: { publishedTime: string; section?: string };
  keywords?: string[];
}): Metadata {
  const canonicalPath = resolveHref(locale, href);
  const languages: Record<string, string> = {
    vi: resolveHref("vi", href),
    en: resolveHref("en", href),
    "x-default": resolveHref("vi", href),
  };

  const pageTitle =
    title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;
  const ogImage = { ...(image ?? defaultOgImage), alt: image?.alt ?? pageTitle };

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        }
      : { index: false, follow: true },
    openGraph: {
      ...(article
        ? { type: "article", publishedTime: article.publishedTime, section: article.section, authors: [siteConfig.name] }
        : { type: "website" }),
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? "en_US" : "vi_VN",
      url: canonicalPath,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage.url],
    },
  };
}
