import { AboutPreview } from "@/components/home/AboutPreview";
import { Advantages } from "@/components/home/Advantages";
import { CtaContact } from "@/components/home/CtaContact";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return buildPageMetadata({
    locale: locale as Locale,
    title: t("homeTitle"),
    description: t("homeDescription"),
    href: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ExpertiseSection />
      <Advantages />
      <FeaturedProjects />
      <InsightsPreview />
      <CtaContact />
    </>
  );
}
