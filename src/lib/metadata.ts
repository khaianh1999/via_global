import { getPathname } from "@/i18n/navigation";
import type { Locale, StaticPathname } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

type DynamicHref =
  | { pathname: "/linh-vuc/[slug]"; params: { slug: string } }
  | { pathname: "/giai-phap/[slug]"; params: { slug: string } }
  | { pathname: "/du-an/[slug]"; params: { slug: string } }
  | { pathname: "/cong-nghe/[slug]"; params: { slug: string } };

export type PageHref = StaticPathname | DynamicHref;

function resolveHref(locale: Locale, href: PageHref): string {
  if (typeof href === "string") {
    return getPathname({ locale, href });
  }

  return getPathname({ locale, href });
}

export function buildPageMetadata({
  locale,
  title,
  description,
  href,
  index = true,
}: {
  locale: Locale;
  title: string;
  description: string;
  href: PageHref;
  index?: boolean;
}): Metadata {
  const canonicalPath = resolveHref(locale, href);
  const languages: Record<string, string> = {
    vi: resolveHref("vi", href),
    en: resolveHref("en", href),
    "x-default": resolveHref("vi", href),
  };

  const pageTitle =
    title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      url: `${siteConfig.url}${canonicalPath}`,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
