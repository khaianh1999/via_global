import Image from "next/image";
import { CtaContact } from "@/components/home/CtaContact";
import { CoverStack, DarkPageHero } from "@/components/pages/DarkPageHero";
import { Container } from "@/components/ui/Container";
import { insights } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema, JsonLd, webPageSchema } from "@/lib/structured-data";
import { publicPath } from "@/lib/site";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";

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
  const lang = locale as Locale;
  const t = await getTranslations("insightsPage");
  const common = await getTranslations("common");
  const format = await getFormatter();
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  const [latest, ...rest] = sorted;

  const meta = (article: (typeof insights)[number]) =>
    `${format.dateTime(new Date(article.date), { day: "numeric", month: "long", year: "numeric" })} · ${common("readingTime", { minutes: article.readTime })}`;
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ locale: locale as Locale, href: "/cong-nghe", name: t("title"), description: t("lead"), type: "CollectionPage" }),
          itemListSchema(locale as Locale, sorted.map((item) => ({ name: item.title[locale as Locale], href: { pathname: "/cong-nghe/[slug]", params: { slug: item.slug } } }))),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("insights"), href: "/cong-nghe" }]),
        ]}
      />
      <DarkPageHero label={t("label")} title={t("title")} lead={t("lead")}>
        <CoverStack covers={sorted.map((article) => article.cover)} />
      </DarkPageHero>

      {/* Latest article */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("latest")}</p>
          <Link
            href={{ pathname: "/cong-nghe/[slug]", params: { slug: latest.slug } }}
            className="group mt-6 grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <div className="overflow-hidden rounded-[1.6rem] shadow-[0_24px_60px_rgba(12,44,86,0.18)] lg:col-span-7">
              <Image
                src={publicPath(latest.cover)}
                alt={latest.topic[lang]}
                width={1280}
                height={720}
                priority
                sizes="(min-width: 1024px) 670px, 100vw"
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-5">
              <span className="inline-flex rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-blue uppercase">
                {latest.topic[lang]}
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy transition-colors group-hover:text-blue sm:text-4xl">
                {latest.title[lang]}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{latest.excerpt[lang]}</p>
              <p className="mt-6 border-t border-line pt-5 text-sm text-muted">{meta(latest)}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
                {common("readArticle")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Other articles */}
      <section className="border-t border-line bg-ice py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("more")}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={{ pathname: "/cong-nghe/[slug]", params: { slug: article.slug } }}
                className="group flex gap-5 rounded-[1.4rem] border border-line bg-white p-4 shadow-[0_12px_32px_rgba(18,59,114,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(37,99,235,0.16)] sm:gap-6 sm:p-5"
              >
                <div className="w-28 shrink-0 self-start overflow-hidden rounded-xl sm:w-44">
                  <Image
                    src={publicPath(article.cover)}
                    alt={article.topic[lang]}
                    width={1280}
                    height={720}
                    sizes="176px"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 py-1">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-blue uppercase">{article.topic[lang]}</p>
                  <h2 className="mt-2 font-serif text-lg leading-snug text-navy transition-colors group-hover:text-blue sm:text-xl">
                    {article.title[lang]}
                  </h2>
                  <p className="mt-2 hidden text-sm leading-6 text-muted sm:line-clamp-2">{article.excerpt[lang]}</p>
                  <p className="mt-3 text-xs text-muted">{meta(article)}</p>
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
