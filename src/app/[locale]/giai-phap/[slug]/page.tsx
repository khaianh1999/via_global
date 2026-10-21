import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { ServiceIcon } from "@/components/services/ServiceIcon";
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

const stepKeys = ["intake", "proposal", "build", "handover"] as const;

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
        label={item.product ? t("productBadge") : t("label")}
        title={item.title[currentLocale]}
        lead={item.excerpt[currentLocale]}
      />

      <section className="bg-white py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.45fr_0.85fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("overview")}</p>
            <div className="mt-5 space-y-5">
              {item.body[currentLocale].map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link href="/giai-phap" className="mt-8 inline-flex text-sm font-semibold text-blue hover:text-navy">
              ← {t("backToList")}
            </Link>
          </div>
          <aside className="h-fit space-y-4 lg:sticky lg:top-28">
            <div className="rounded-[1.6rem] bg-navy p-6 text-white shadow-[0_24px_60px_rgba(12,44,86,0.25)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy">
                <ServiceIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-serif text-xl">{t("audience")}</h2>
              <p className="mt-2 text-sm leading-7 text-white/75">{item.audience[currentLocale]}</p>
              {expertise ? (
                <Link
                  href={{ pathname: "/linh-vuc/[slug]", params: { slug: expertise.slug } }}
                  className="mt-5 inline-flex text-sm font-semibold text-blue-bright hover:text-white"
                >
                  {t("expertiseLink")} · {expertise.title[currentLocale]} →
                </Link>
              ) : null}
            </div>
            <div className="rounded-[1.6rem] border border-line bg-ice p-6">
              <h2 className="font-serif text-xl text-navy">{t("highlights")}</h2>
              <ul className="mt-4 space-y-3">
                {item.highlights[currentLocale].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-ice py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
          <div>
            <h2 className="font-serif text-3xl text-navy">{t("scope")}</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {item.scope[currentLocale].map((point, index) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-blue/10 bg-white px-4 py-4 text-sm leading-6 text-ink shadow-[0_8px_24px_rgba(18,59,114,0.04)]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-[11px] font-semibold text-blue">
                    {index + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-navy">{t("outcomes")}</h2>
            <ul className="mt-7 space-y-3">
              {item.outcomes[currentLocale].map((point) => (
                <li key={point} className="flex gap-3 rounded-2xl bg-white px-4 py-4 text-sm leading-6 text-ink">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-blue" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
        {item.note ? (
          <Container className="mt-10">
            <div className="rounded-[1.4rem] border border-amber-300/60 bg-amber-50 px-6 py-5">
              <p className="text-sm font-semibold text-navy">{t("noteTitle")}</p>
              <p className="mt-1.5 text-sm leading-7 text-ink">{item.note[currentLocale]}</p>
            </div>
          </Container>
        ) : null}
      </section>

      <section className="bg-white py-14 lg:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("processLabel")}</p>
          <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{t("processTitle")}</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stepKeys.map((key, index) => (
              <li key={key} className="rounded-[1.3rem] border border-line bg-ice p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue font-serif text-lg text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl text-navy">{t(`steps.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{t(`steps.${key}.body`)}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-7 text-muted">{t("processNote")}</p>
        </Container>
      </section>

      <section className="border-t border-line bg-ice py-14 lg:py-20">
        <Container>
          <h2 className="font-serif text-3xl text-navy">{t("related")}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((solution) => (
              <Link
                key={solution.slug}
                href={{ pathname: "/giai-phap/[slug]", params: { slug: solution.slug } }}
                className="group flex gap-4 rounded-[1.3rem] border border-line bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <ServiceIcon name={solution.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-snug text-navy group-hover:text-blue">
                    {solution.title[currentLocale]}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{solution.tagline[currentLocale]}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaContact />
    </>
  );
}
