import { AboutPreview } from "@/components/home/AboutPreview";
import { Advantages } from "@/components/home/Advantages";
import { CtaContact } from "@/components/home/CtaContact";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { HomeExperience } from "@/components/home/HomeExperience";
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
  const hero = await getTranslations("hero");
  const about = await getTranslations("aboutPreview");
  const expertise = await getTranslations("expertise");
  const advantages = await getTranslations("advantages");
  const projects = await getTranslations("projects");
  const insights = await getTranslations("insights");
  const contact = await getTranslations("nav");

  return (
    <>
      <HomeExperience
        sections={[
          { id: "mo-dau", label: hero("eyebrow") },
          { id: "gioi-thieu", label: about("label") },
          { id: "linh-vuc", label: expertise("label") },
          { id: "nang-luc", label: advantages("label") },
          { id: "du-an", label: projects("label") },
          { id: "goc-nhin", label: insights("label") },
          { id: "lien-he", label: contact("contact") },
        ]}
      />
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
