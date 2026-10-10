import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { getExpertise } from "@/content/expertise";
import { solutions } from "@/content/solutions";
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
    title: t("solutionsTitle"),
    description: t("solutionsDescription"),
    href: "/giai-phap",
  });
}

const principleKeys = ["problem", "scope", "fit"] as const;

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

      <section className="border-b border-line bg-white py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl text-navy">{t("methodTitle")}</h2>
            <p className="mt-5 text-base leading-8 text-muted">{t("methodBody")}</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {principleKeys.map((key, index) => (
              <article key={key} className="rounded-[1.4rem] border border-line bg-ice p-7">
                <p className="text-xs tracking-[0.18em] text-blue uppercase">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-2xl text-navy">
                  {t(`principles.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {t(`principles.${key}.body`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="space-y-6">
          {solutions.map((item, index) => {
            const expertise = getExpertise(item.expertise);

            return (
              <article
                key={item.slug}
                className="grid gap-8 rounded-[1.8rem] border border-line p-7 lg:grid-cols-[7rem_1fr_auto] lg:items-start lg:p-10"
              >
                <p className="font-serif text-3xl text-blue/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  {expertise ? (
                    <p className="text-xs tracking-[0.16em] text-blue uppercase">
                      {expertise.title[currentLocale]}
                    </p>
                  ) : null}
                  <h2 className="mt-3 font-serif text-3xl text-navy">
                    {item.title[currentLocale]}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                    {item.excerpt[currentLocale]}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {item.highlights[currentLocale].map((point) => (
                      <li
                        key={point}
                        className="rounded-2xl bg-ice px-4 py-3 text-sm leading-6 text-ink/85"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
                  className="inline-flex h-fit items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  {t("viewSolution")}
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
