import { CtaContact } from "@/components/home/CtaContact";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/pages/PageHero";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    href: "/gioi-thieu",
  });
}

const steps = ["listen", "design", "build", "handover"] as const;
const values = ["clarity", "fit", "continuity"] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  return (
    <>
      <PageHero label={t("label")} title={t("title")} lead={t("lead")} />
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy">{t("storyTitle")}</h2>
            <p className="mt-5 text-base leading-8 text-muted">{t("story")}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-navy">{t("approachTitle")}</h2>
            <p className="mt-5 text-base leading-8 text-muted">{t("approach")}</p>
          </div>
        </Container>
      </section>
      <section className="bg-ice py-20">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="rounded-[1.4rem] bg-white p-6">
              <p className="text-xs tracking-[0.18em] text-blue uppercase">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-navy">{t(`steps.${step}.title`)}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{t(`steps.${step}.body`)}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <h2 className="font-serif text-3xl text-navy">{t("valuesTitle")}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value} className="rounded-[1.4rem] border border-line p-7">
                <h3 className="font-serif text-2xl text-navy">{t(`values.${value}.title`)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{t(`values.${value}.body`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaContact />
    </>
  );
}
