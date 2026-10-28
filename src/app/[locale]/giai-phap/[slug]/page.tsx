import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { getExpertise } from "@/content/expertise";
import { getRelatedSolutions, getSolution, solutionImage, solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, serviceSchema } from "@/lib/structured-data";
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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

  const lang = locale as Locale;
  const expertise = getExpertise(item.expertise);
  const related = getRelatedSolutions(item.slug);
  const t = await getTranslations("solutionsPage");
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            locale: locale as Locale,
            href: { pathname: "/giai-phap/[slug]", params: { slug: item.slug } },
            name: item.title[locale as Locale],
            description: item.excerpt[locale as Locale],
            category: expertise?.title[locale as Locale],
            audience: item.audience[locale as Locale],
          }),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("solutions"), href: "/giai-phap" }, { name: item.title[locale as Locale], href: { pathname: "/giai-phap/[slug]", params: { slug: item.slug } } }]),
        ]}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blue/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#22d3ee]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,197,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,197,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)] bg-[size:64px_64px]" />
        </div>
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
          <div>
            <Link
              href="/giai-phap"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {t("backToList")}
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-blue-bright text-white shadow-[0_8px_22px_rgba(56,189,248,0.4)]">
                <ServiceIcon name={item.icon} className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold tracking-[0.22em] text-blue-bright uppercase">
                {item.product ? t("productBadge") : (expertise?.title[lang] ?? t("label"))}
              </span>
            </div>
            <h1 className="mt-5 font-serif text-[2.2rem] leading-[1.1] text-balance sm:text-5xl lg:text-[3.4rem]">
              {item.title[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-lg sm:leading-8">{item.excerpt[lang]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lien-he"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-blue-bright px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_36px_rgba(56,189,248,0.4)] transition hover:shadow-[0_18px_44px_rgba(56,189,248,0.6)]"
              >
                {t("heroSecondary")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#tong-quan"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-[15px] font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                {t("overview")} ↓
              </a>
            </div>
          </div>
          <Image
            src={solutionImage(item.slug)}
            alt={item.title[lang]}
            width={800}
            height={520}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full rounded-[1.6rem] shadow-[0_40px_90px_rgba(2,8,23,0.55)] ring-1 ring-white/15"
          />
        </Container>
      </section>

      {/* Overview with sticky summary */}
      <section id="tong-quan" className="scroll-mt-20 bg-white py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("overview")}</p>
            <p className="mt-5 font-serif text-2xl leading-snug text-navy sm:text-[1.7rem]">{item.tagline[lang]}</p>
            <div className="mt-8 space-y-6 text-[17px] leading-8 text-ink/80">
              {item.body[lang].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit lg:sticky lg:top-28 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-navy-deep p-7 text-white shadow-[0_24px_60px_rgba(12,44,86,0.25)]">
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue/40 blur-3xl" />
              <p className="relative text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{t("audience")}</p>
              <p className="relative mt-3 text-[15px] leading-7 text-white/80">{item.audience[lang]}</p>
              <p className="relative mt-6 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">{t("highlights")}</p>
              <ul className="relative mt-3 space-y-3">
                {item.highlights[lang].map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-6 text-white/90">
                    <span className="text-sky-300">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              {expertise ? (
                <Link
                  href={{ pathname: "/giai-phap", hash: expertise.slug }}
                  className="relative mt-7 inline-flex text-sm font-semibold text-sky-300 hover:text-white"
                >
                  {t("groupLink")} · {expertise.title[lang]} →
                </Link>
              ) : null}
            </div>
          </aside>
        </Container>
      </section>

      {/* Scope and outcomes */}
      <section className="border-y border-line bg-ice py-14 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("scope")}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {item.scope[lang].map((point, index) => (
                  <li
                    key={point}
                    className="rounded-[1.3rem] border border-line bg-white p-5 shadow-[0_12px_32px_rgba(18,59,114,0.06)]"
                  >
                    <span className="font-serif text-3xl text-blue/30">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-[15px] leading-6 font-medium text-navy">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("outcomes")}</p>
              <ul className="mt-6 divide-y divide-line rounded-[1.3rem] border border-line bg-white px-6">
                {item.outcomes[lang].map((point) => (
                  <li key={point} className="flex gap-3 py-5 text-[15px] leading-6 text-ink">
                    <span className="text-blue">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {item.note ? (
            <div className="mt-10 flex gap-4 rounded-[1.3rem] border border-amber-300/60 bg-amber-50 px-6 py-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-white">
                !
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">{t("noteTitle")}</p>
                <p className="mt-1.5 text-sm leading-7 text-ink">{item.note[lang]}</p>
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy-deep py-14 text-white lg:py-20">
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[420px] w-[620px] rounded-full bg-blue/25 blur-[120px]" />
        <Container className="relative">
          <p className="text-xs font-semibold tracking-[0.22em] text-blue-bright uppercase">{t("processLabel")}</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{t("processTitle")}</h2>
          <ol className="relative mt-10 grid gap-7 md:mt-12 md:grid-cols-4 md:gap-6">
            <span
              aria-hidden
              className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-sky-400/0 via-sky-400/60 to-sky-400/0 md:block"
            />
            {stepKeys.map((key, index) => (
              <li key={key} className="relative flex gap-4 md:block md:text-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/40 bg-[#071a3a] shrink-0 font-serif text-lg text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.25)] md:mx-auto">
                  {index + 1}
                </span>
                <div>
                  <h3 className="mt-2.5 font-serif text-lg md:mt-5 md:text-xl">{t(`steps.${key}.title`)}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/60 md:mt-2">{t(`steps.${key}.body`)}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm leading-7 text-white/50 md:text-center">{t("processNote")}</p>
        </Container>
      </section>

      {/* Related services */}
      <section className="bg-ice py-14 lg:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("related")}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((solution) => (
              <Link
                key={solution.slug}
                href={{ pathname: "/giai-phap/[slug]", params: { slug: solution.slug } }}
                className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-[0_16px_40px_rgba(18,59,114,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(37,99,235,0.18)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={solutionImage(solution.slug)}
                    alt=""
                    width={800}
                    height={520}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                    <ServiceIcon name={solution.icon} className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg leading-snug text-navy group-hover:text-blue">{solution.title[lang]}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{solution.tagline[lang]}</p>
                  </div>
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
