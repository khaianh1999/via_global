import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { getExpertise } from "@/content/expertise";
import { getRelatedSolutions, getSolution, solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    solutions.map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getSolution(slug);
  if (!item) return {};

  return buildPageMetadata({
    locale: locale as Locale,
    title: item.title[locale as Locale],
    description: item.excerpt[locale as Locale],
    href: { pathname: "/giai-phap/[slug]", params: { slug } },
  });
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getSolution(slug);
  if (!item) notFound();

  const currentLocale = locale as Locale;
  const expertise = getExpertise(item.expertise);
  const related = getRelatedSolutions(item.slug);
  const t = await getTranslations("solutionsPage");

  return (
    <>
      <PageHero
        label={expertise?.title[currentLocale] ?? t("label")}
        title={item.title[currentLocale]}
        lead={item.excerpt[currentLocale]}
      />

      <section className="bg-white py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6">
          {item.body[currentLocale].map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-ink/85">
              {paragraph}
            </p>
          ))}
          <Link href="/giai-phap" className="inline-flex text-sm font-semibold text-blue">
            ← {t("backToList")}
          </Link>
        </Container>
      </section>

      <section className="border-y border-line bg-ice py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.6rem] bg-white p-8">
            <h2 className="font-serif text-2xl text-navy">{t("problem")}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{item.problem[currentLocale]}</p>
          </article>
          <article className="rounded-[1.6rem] bg-white p-8">
            <h2 className="font-serif text-2xl text-navy">{t("audience")}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{item.audience[currentLocale]}</p>
          </article>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-3xl text-navy">{t("scope")}</h2>
            <ul className="mt-8 space-y-3">
              {item.scope[currentLocale].map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-line px-5 py-4 text-sm leading-7 text-ink"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-navy">{t("outcomes")}</h2>
            <ul className="mt-8 space-y-4">
              {item.outcomes[currentLocale].map((point) => (
                <li key={point} className="text-sm leading-7 text-muted">
                  {point}
                </li>
              ))}
            </ul>
            {expertise ? (
              <Link
                href={{ pathname: "/linh-vuc/[slug]", params: { slug: expertise.slug } }}
                className="mt-8 inline-flex text-sm font-semibold text-blue"
              >
                {t("expertiseLink")} · {expertise.title[currentLocale]} →
              </Link>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-ice py-16 lg:py-20">
        <Container>
          <h2 className="font-serif text-3xl text-navy">{t("process")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {item.process[currentLocale].map((step, index) => (
              <article key={step.title} className="rounded-[1.4rem] bg-white p-7">
                <p className="text-xs tracking-[0.18em] text-blue uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.6rem] border border-line p-8">
            <h2 className="font-serif text-2xl text-navy">{t("fit")}</h2>
            <ul className="mt-5 space-y-3">
              {item.fit[currentLocale].map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.6rem] bg-navy p-8 text-white">
            <h2 className="font-serif text-2xl">{t("notFor")}</h2>
            <ul className="mt-5 space-y-3">
              {item.notFor[currentLocale].map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-bright" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="border-t border-line bg-ice py-16 lg:py-20">
        <Container>
          <h2 className="font-serif text-3xl text-navy">{t("related")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((solution) => (
              <Link
                key={solution.slug}
                href={{ pathname: "/giai-phap/[slug]", params: { slug: solution.slug } }}
                className="rounded-[1.4rem] bg-white p-6 transition-colors hover:border-navy/20"
              >
                <h3 className="font-serif text-xl text-navy">{solution.title[currentLocale]}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {solution.excerpt[currentLocale]}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaContact />
    </>
  );
}
