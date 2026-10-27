import type { Locale } from "@/i18n/routing";
import { absoluteUrl, defaultOgImage, resolveHref, type PageHref } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type Thing = Record<string, unknown>;

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

// Renders schema.org data; "<" is escaped so content can never close the tag.
export function JsonLd({ data }: { data: Thing | Thing[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function pageUrl(locale: Locale, href: PageHref) {
  return absoluteUrl(resolveHref(locale, href));
}

export function organizationSchema(locale: Locale, description: string): Thing {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/logo-globe.svg"),
    image: absoluteUrl(defaultOgImage.url),
    description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: siteConfig.address[locale],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: ["Vietnamese", "English"],
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(locale: Locale): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: pageUrl(locale, "/"),
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbSchema(locale: Locale, items: { name: string; href: PageHref }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(locale, item.href),
    })),
  };
}

export function webPageSchema({
  locale,
  href,
  name,
  description,
  type = "WebPage",
}: {
  locale: Locale;
  href: PageHref;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}): Thing {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: pageUrl(locale, href),
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}

export function serviceSchema({
  locale,
  href,
  name,
  description,
  category,
  audience,
}: {
  locale: Locale;
  href: PageHref;
  name: string;
  description: string;
  category?: string;
  audience?: string;
}): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: pageUrl(locale, href),
    serviceType: category ?? name,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "Vietnam" },
    ...(audience ? { audience: { "@type": "BusinessAudience", audienceType: audience } } : {}),
  };
}

export function articleSchema({
  locale,
  href,
  headline,
  description,
  image,
  datePublished,
  section,
}: {
  locale: Locale;
  href: PageHref;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  section?: string;
}): Thing {
  const url = pageUrl(locale, href);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: [absoluteUrl(image)],
    datePublished,
    dateModified: datePublished,
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
    ...(section ? { articleSection: section } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };
}

export function projectSchema({
  locale,
  href,
  name,
  description,
  image,
  about,
}: {
  locale: Locale;
  href: PageHref;
  name: string;
  description: string;
  image: string;
  about?: string;
}): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    image: absoluteUrl(image),
    url: pageUrl(locale, href),
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
    ...(about ? { about } : {}),
    creator: { "@id": organizationId },
  };
}

export function itemListSchema(locale: Locale, items: { name: string; href: PageHref }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: pageUrl(locale, item.href),
    })),
  };
}
