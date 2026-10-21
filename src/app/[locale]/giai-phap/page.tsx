import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getExpertise } from "@/content/expertise";
import { solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
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
    title: t("solutionsTitle"),
    description: t("solutionsDescription"),
    href: "/giai-phap",
  });
}

const whyKeys = ["problem", "breadth", "criteria"] as const;
const stepKeys = ["intake", "proposal", "build", "handover"] as const;

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;
  const t = await getTranslations("solutionsPage");

  return (
    <>
      <PageHero label={t("label")} title={t("title")} lead={t("lead")} />

      <section className="bg-white py-14 lg:py-20">
        <Container>
          <SectionHeading label={t("listLabel")} title={t("listTitle")} body={t("listBody")} />
          <div className="mt-10 space-y-4 lg:mt-12 lg:space-y-5">
            {solutions.map((item, index) => {
              const expertise = getExpertise(item.expertise);
              const dark = Boolean(item.product);

              return (
                <article
                  key={item.slug}
                  className={cn(
                    "grid gap-5 rounded-[1.6rem] p-5 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8 lg:p-8",
                    dark
                      ? "bg-navy text-white shadow-[0_24px_60px_rgba(12,44,86,0.28)]"
                      : "border border-line bg-white shadow-[0_10px_30px_rgba(18,59,114,0.05)]",
                  )}
                >
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl",
                        dark
                          ? "bg-white text-navy"
                          : "bg-blue text-white shadow-[0_10px_22px_rgba(37,99,235,0.3)]",
                      )}
                    >
                      <ServiceIcon name={item.icon} className="h-7 w-7" />
                    </span>
                    <p className={cn("font-serif text-2xl", dark ? "text-white/50" : "text-blue/50")}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      {expertise ? (
                        <p
                          className={cn(
                            "text-[11px] font-semibold tracking-[0.16em] uppercase",
                            dark ? "text-blue-bright" : "text-blue",
                          )}
                        >
                          {expertise.title[currentLocale]}
                        </p>
                      ) : null}
                      {item.product ? (
                        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-white uppercase">
                          {t("productBadge")}
                        </span>
                      ) : null}
                    </div>
                    <h2
                      className={cn(
                        "mt-2 font-serif text-2xl leading-snug sm:text-3xl",
                        dark ? "text-white" : "text-navy",
                      )}
                    >
                      {item.title[currentLocale]}
                    </h2>
                    <p
                      className={cn(
                        "mt-3 max-w-3xl text-[15px] leading-7",
                        dark ? "text-white/75" : "text-muted",
                      )}
                    >
                      {item.excerpt[currentLocale]}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                      {item.highlights[currentLocale].map((point) => (
                        <li
                          key={point}
                          className={cn(
                            "flex gap-2.5 rounded-xl px-3.5 py-2.5 text-sm leading-6",
                            dark ? "bg-white/10 text-white/85" : "bg-ice text-ink",
                          )}
                        >
                          <span
                            className={cn(
                              "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                              dark ? "bg-blue-bright" : "bg-blue",
                            )}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
                    className={cn(
                      "inline-flex h-fit w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors sm:w-fit",
                      dark
                        ? "bg-white text-navy hover:bg-ice"
                        : "bg-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] hover:bg-blue-deep",
                    )}
                  >
                    {t("viewSolution")} →
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

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

          <div className="mt-14 lg:mt-16">
            <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("processLabel")}</p>
            <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{t("processTitle")}</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stepKeys.map((key, index) => (
                <li key={key} className="relative rounded-[1.3rem] bg-white p-5 shadow-[0_10px_30px_rgba(18,59,114,0.05)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue font-serif text-lg text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-navy">{t(`steps.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{t(`steps.${key}.body`)}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-7 text-muted">{t("processNote")}</p>
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
