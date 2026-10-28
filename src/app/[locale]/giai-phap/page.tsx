import Image from "next/image";
import { CtaContact } from "@/components/home/CtaContact";
import { IconCloud, IconMedia, IconTechnology } from "@/components/icons/Icons";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getExpertise } from "@/content/expertise";
import { solutionImage, solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema, JsonLd, webPageSchema } from "@/lib/structured-data";
import { publicPath } from "@/lib/site";
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
    title: t("solutionsTitle"),
    description: t("solutionsDescription"),
    href: "/giai-phap",
  });
}

const whyKeys = ["problem", "breadth", "criteria"] as const;
const stepKeys = ["intake", "proposal", "build", "handover"] as const;

const groupIcons = {
  technology: IconTechnology,
  cloud: IconCloud,
  media: IconMedia,
};

// Matches the tile colours in public/solutions/hero.svg.
const groupAccents: Record<string, string> = {
  "technology-software": "from-blue to-[#1e40af]",
  "digital-media": "from-[#818cf8] to-[#4338ca]",
  "cloud-infrastructure": "from-[#22d3ee] to-[#0e7490]",
};

// Groups follow the order their services appear in, so numbering stays 01–07 down the page.
const groups = [...new Set(solutions.map((item) => item.expertise))]
  .map((slug) => getExpertise(slug))
  .filter((group) => group !== undefined);

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;
  const t = await getTranslations("solutionsPage");

  const stats = [
    { value: String(solutions.length).padStart(2, "0"), label: t("stats.services") },
    { value: String(groups.length).padStart(2, "0"), label: t("stats.groups") },
    { value: "01", label: t("stats.partner") },
  ];
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ locale: locale as Locale, href: "/giai-phap", name: t("title"), description: t("lead"), type: "CollectionPage" }),
          itemListSchema(locale as Locale, solutions.map((item) => ({ name: item.title[locale as Locale], href: { pathname: "/giai-phap/[slug]", params: { slug: item.slug } } }))),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("solutions"), href: "/giai-phap" }]),
        ]}
      />
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-blue/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#22d3ee]/20 blur-3xl" />
        <Container className="relative grid items-center gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-blue-bright uppercase">{t("label")}</p>
            <h1 className="mt-4 font-serif text-[2.1rem] leading-[1.12] text-balance sm:text-5xl lg:text-[3.4rem]">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-lg sm:leading-8">{t("lead")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#danh-sach"
                className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-colors hover:bg-blue-bright"
              >
                {t("heroPrimary")} ↓
              </a>
              <ButtonLink href="/lien-he" variant="light" className="w-full sm:w-auto">
                {t("heroSecondary")}
              </ButtonLink>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-white sm:text-4xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src={publicPath("/solutions/hero.svg")}
            alt=""
            width={640}
            height={560}
            priority
            className="mx-auto w-full max-w-md lg:max-w-none"
          />
        </Container>
      </section>

      <section id="danh-sach" className="scroll-mt-20 border-b border-line bg-ice py-14 lg:py-20">
        <Container>
          <SectionHeading label={t("listLabel")} title={t("listTitle")} body={t("listBody")} />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-6">
            {groups.map((group, index) => {
              const Icon = groupIcons[group.icon];
              const items = solutions.filter((item) => item.expertise === group.slug);

              return (
                <a
                  key={group.slug}
                  href={`#${group.slug}`}
                  className="group flex flex-col rounded-[1.6rem] border border-line bg-white p-6 shadow-[0_14px_34px_rgba(18,59,114,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_22px_48px_rgba(37,99,235,0.14)]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-[0_10px_22px_rgba(37,99,235,0.25)]",
                        groupAccents[group.slug],
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-ice px-3 py-1 text-xs font-semibold text-navy">
                      {t("groupCount", { count: items.length })}
                    </span>
                  </div>
                  <p className="mt-5 text-[11px] font-semibold tracking-[0.18em] text-blue uppercase">
                    {t("groupLabel", { number: String(index + 1).padStart(2, "0") })}
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl text-navy group-hover:text-blue">{group.title[currentLocale]}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{group.excerpt[currentLocale]}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {items.map((item) => (
                      <li key={item.slug} className="flex items-center gap-2.5 text-sm text-ink">
                        <ServiceIcon name={item.icon} className="h-4 w-4 shrink-0 text-blue" />
                        {item.title[currentLocale]}
                      </li>
                    ))}
                  </ul>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {groups.map((group, groupIndex) => {
        const Icon = groupIcons[group.icon];
        const items = solutions.filter((item) => item.expertise === group.slug);

        return (
          <section
            key={group.slug}
            id={group.slug}
            className={cn("scroll-mt-20 py-14 lg:py-20", groupIndex % 2 === 1 && "border-y border-line bg-ice")}
          >
            <Container>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-[0_12px_26px_rgba(37,99,235,0.28)]",
                      groupAccents[group.slug],
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">
                      {t("groupLabel", { number: String(groupIndex + 1).padStart(2, "0") })}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">
                      {group.title[currentLocale]}
                    </h2>
                  </div>
                </div>
                <p className="max-w-xl text-[15px] leading-7 text-muted">{group.summary[currentLocale]}</p>
              </div>

              <div className="mt-10 space-y-10 lg:mt-14 lg:space-y-16">
                {items.map((item, itemIndex) => {
                  const number = String(solutions.indexOf(item) + 1).padStart(2, "0");
                  const dark = Boolean(item.product);
                  const reverse = itemIndex % 2 === 1;

                  return (
                    <article
                      key={item.slug}
                      className={cn(
                        "grid items-center gap-7 lg:grid-cols-2 lg:gap-14",
                        dark && "rounded-[2rem] bg-navy p-5 text-white shadow-[0_30px_70px_rgba(12,44,86,0.3)] sm:p-8 lg:p-10",
                      )}
                    >
                      <Link
                        href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
                        className={cn(
                          "group relative block overflow-hidden rounded-[1.6rem] shadow-[0_24px_60px_rgba(12,44,86,0.22)] ring-1",
                          dark ? "ring-white/15" : "ring-navy/10",
                          reverse && "lg:order-2",
                        )}
                      >
                        <Image
                          src={solutionImage(item.slug)}
                          alt={item.title[currentLocale]}
                          width={800}
                          height={520}
                          sizes="(min-width: 1024px) 540px, 100vw"
                          className="w-full transition duration-500 group-hover:scale-[1.03]"
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-serif text-sm text-navy backdrop-blur">
                          {number}
                        </span>
                      </Link>

                      <div className={cn(reverse && "lg:order-1")}>
                        {item.product ? (
                          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-white uppercase">
                            {t("productBadge")}
                          </span>
                        ) : null}
                        <h3
                          className={cn(
                            "font-serif text-[1.7rem] leading-snug sm:text-[2.1rem]",
                            item.product && "mt-3",
                            dark ? "text-white" : "text-navy",
                          )}
                        >
                          <span className={cn("mr-3 font-serif", dark ? "text-blue-bright" : "text-blue/50")}>{number}</span>
                          {item.title[currentLocale]}
                        </h3>
                        <p className={cn("mt-3 text-base font-semibold", dark ? "text-blue-bright" : "text-blue")}>
                          {item.tagline[currentLocale]}
                        </p>
                        <p className={cn("mt-3 text-[15px] leading-7", dark ? "text-white/75" : "text-muted")}>
                          {item.excerpt[currentLocale]}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {item.highlights[currentLocale].map((point) => (
                            <li
                              key={point}
                              className={cn("flex gap-3 text-sm leading-6", dark ? "text-white/90" : "text-ink")}
                            >
                              <CheckIcon className={cn("mt-0.5 h-5 w-5 shrink-0", dark ? "text-blue-bright" : "text-blue")} />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
                          className={cn(
                            "mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                            dark
                              ? "bg-white text-navy hover:bg-ice"
                              : "bg-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] hover:bg-blue-deep",
                          )}
                        >
                          {t("viewSolution")} →
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="border-y border-line bg-ice py-14 lg:py-20">
        <Container>
          <SectionHeading label={t("whyLabel")} title={t("whyTitle")} />
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-6">
            {whyKeys.map((key, index) => (
              <article
                key={key}
                className={cn(
                  "rounded-[1.4rem] p-6 lg:p-7",
                  index === 0
                    ? "bg-navy text-white shadow-[0_18px_40px_rgba(12,44,86,0.22)]"
                    : "border border-blue/15 bg-white shadow-[0_14px_34px_rgba(37,99,235,0.08)]",
                )}
              >
                <p
                  className={cn(
                    "inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-semibold text-white",
                    index === 0 ? "bg-blue" : "bg-navy",
                  )}
                >
                  0{index + 1}
                </p>
                <h3 className={cn("mt-4 font-serif text-2xl", index === 0 ? "text-white" : "text-navy")}>
                  {t(`why.${key}.title`)}
                </h3>
                <p className={cn("mt-3 text-sm leading-7", index === 0 ? "text-white/75" : "text-muted")}>
                  {t(`why.${key}.body`)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 lg:mt-20">
            <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("processLabel")}</p>
            <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{t("processTitle")}</h2>
            <ol className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              <span
                aria-hidden="true"
                className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 bg-linear-to-r from-blue/20 via-blue/60 to-blue/20 lg:block"
              />
              {stepKeys.map((key, index) => (
                <li key={key} className="relative text-center">
                  <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue font-serif text-lg text-white shadow-[0_10px_22px_rgba(37,99,235,0.35)] ring-8 ring-ice">
                    {index + 1}
                  </span>
                  <div className="mt-5 rounded-[1.3rem] bg-white p-5 shadow-[0_10px_30px_rgba(18,59,114,0.05)]">
                    <h3 className="font-serif text-xl text-navy">{t(`steps.${key}.title`)}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{t(`steps.${key}.body`)}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-center text-sm leading-7 text-muted">{t("processNote")}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <Container className="max-w-4xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-navy text-balance sm:text-4xl">
            {t("closingTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{t("closingBody")}</p>
          <p className="mt-6 inline-flex rounded-full bg-blue/10 px-5 py-2.5 text-sm font-semibold text-blue">
            {t("slogan")}
          </p>
        </Container>
      </section>

      <CtaContact />
    </>
  );
}
