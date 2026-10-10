import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { expertiseItems, getExpertise } from "@/content/expertise";
import { solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    expertiseItems.map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getExpertise(slug);
  if (!item) return {};

  return buildPageMetadata({
    locale: locale as Locale,
    title: item.title[locale as Locale],
    description: item.excerpt[locale as Locale],
    href: { pathname: "/linh-vuc/[slug]", params: { slug } },
  });
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getExpertise(slug);
  if (!item) notFound();

  const currentLocale = locale as Locale;
  const t = await getTranslations("expertisePage");
  const related = solutions.filter((solution) => solution.expertise === item.slug);

  return (
    <>
      <PageHero
        label={t("label")}
        title={item.title[currentLocale]}
        lead={item.summary[currentLocale]}
      />
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ul className="space-y-4">
            {item.points[currentLocale].map((point) => (
              <li key={point} className="rounded-2xl border border-line px-5 py-4 text-sm leading-7 text-ink">
                {point}
              </li>
            ))}
          </ul>
          <aside className="rounded-[1.6rem] bg-ice p-7">
            <h2 className="font-serif text-2xl text-navy">{t("relatedSolutions")}</h2>
            <ul className="mt-5 space-y-3">
              {related.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={{ pathname: "/giai-phap/[slug]", params: { slug: solution.slug } }}
                    className="text-sm font-medium text-blue hover:text-navy"
                  >
                    {solution.title[currentLocale]} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
      <CtaContact />
    </>
  );
}
