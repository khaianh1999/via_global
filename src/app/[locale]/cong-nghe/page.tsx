import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { insights } from "@/content/insights";
import { Link } from "@/i18n/navigation";
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
    title: t("insightsTitle"),
    description: t("insightsDescription"),
    href: "/cong-nghe",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;
  const t = await getTranslations("insightsPage");
  const common = await getTranslations("common");

  return (
    <>
      <PageHero label={t("label")} title={t("title")} lead={t("lead")} />
      <section className="bg-white py-20">
        <Container className="divide-y divide-line border-y border-line">
          {insights.map((article) => (
            <article key={article.slug} className="grid gap-4 py-8 lg:grid-cols-12">
              <p className="text-xs tracking-[0.16em] text-blue uppercase lg:col-span-3">
                {article.topic[currentLocale]}
              </p>
              <div className="lg:col-span-9">
                <h2 className="font-serif text-2xl text-navy">
                  <Link href={{ pathname: "/cong-nghe/[slug]", params: { slug: article.slug } }}>
                    {article.title[currentLocale]}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {article.excerpt[currentLocale]}
                </p>
                <p className="mt-4 text-xs text-muted">
                  {common("readingTime", { minutes: article.readTime })}
                </p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaContact />
    </>
  );
}
