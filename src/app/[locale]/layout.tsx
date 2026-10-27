import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ZaloFloat } from "@/components/layout/ZaloFloat";
import { routing, type Locale } from "@/i18n/routing";
import { defaultOgImage } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/structured-data";
import "../globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("homeTitle"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("homeDescription"),
    keywords: t("keywords").split(",").map((keyword) => keyword.trim()),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      images: [{ ...defaultOgImage, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      images: [defaultOgImage.url],
    },
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}

export const viewport: Viewport = {
  themeColor: "#061733",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("common");
  const meta = await getTranslations("meta");

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${beVietnam.variable} h-full scroll-pt-16 scroll-smooth antialiased sm:scroll-pt-[4.75rem] motion-reduce:snap-none`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <JsonLd data={[organizationSchema(locale as Locale, meta("homeDescription")), websiteSchema(locale as Locale)]} />
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
          >
            {t("skipToContent")}
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <ZaloFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
