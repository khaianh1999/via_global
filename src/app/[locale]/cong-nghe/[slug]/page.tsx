import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { getInsight, insights } from "@/content/insights";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    insights.map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getInsight(slug);
  if (!item) return {};

  return buildPageMetadata({
    locale: locale as Locale,
    title: item.title[locale as Locale],
    description: item.excerpt[locale as Locale],
    href: { pathname: "/cong-nghe/[slug]", params: { slug } },
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getInsight(slug);
  if (!item) notFound();

  const currentLocale = locale as Locale;
  const t = await getTranslations("common");

  return (
    <>
      <PageHero
        label={item.topic[currentLocale]}
        title={item.title[currentLocale]}
        lead={item.excerpt[currentLocale]}
      />
      <article className="bg-white py-20">
        <Container className="max-w-3xl">
          <p className="text-xs text-muted">{t("readingTime", { minutes: item.readTime })}</p>
          <div className="mt-8 space-y-6">
            {item.body[currentLocale].map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-ink/85">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>
      <CtaContact />
    </>
  );
}
