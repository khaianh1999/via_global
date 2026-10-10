import { IconCloud, IconMedia, IconTechnology } from "@/components/icons/Icons";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { expertiseItems } from "@/content/expertise";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

const icons = {
  technology: IconTechnology,
  cloud: IconCloud,
  media: IconMedia,
};

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
    title: t("expertiseTitle"),
    description: t("expertiseDescription"),
    href: "/linh-vuc",
  });
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = (await getLocale()) as Locale;
  const t = await getTranslations("expertisePage");
  const common = await getTranslations("common");

  return (
    <>
      <PageHero label={t("label")} title={t("title")} lead={t("lead")} />
      <section className="bg-white py-20">
        <Container className="grid gap-6">
          {expertiseItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.slug}
                className="grid gap-8 rounded-[1.8rem] border border-line p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ice text-navy">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="font-serif text-3xl text-navy">{item.title[currentLocale]}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                    {item.summary[currentLocale]}
                  </p>
                </div>
                <Link
                  href={{ pathname: "/linh-vuc/[slug]", params: { slug: item.slug } }}
                  className="text-sm font-semibold text-blue hover:text-navy"
                >
                  {common("learnMore")} →
                </Link>
              </article>
            );
          })}
        </Container>
      </section>
      <CtaContact />
    </>
  );
}
