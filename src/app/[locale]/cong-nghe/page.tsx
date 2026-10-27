import Image from "next/image";
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

type Article = (typeof insights)[number];

const articleHref = (article: Article) => ({ pathname: "/cong-nghe/[slug]" as const, params: { slug: article.slug } });

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
  const nav = await getTranslations("nav");
  const format = await getFormatter();
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;
  const date = (article: Article) =>
    format.dateTime(new Date(article.date), { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <JsonLd
        data={[
          webPageSchema({ locale: lang, href: "/cong-nghe", name: t("title"), description: t("lead"), type: "CollectionPage" }),
          itemListSchema(lang, sorted.map((item) => ({ name: item.title[lang], href: articleHref(item) }))),
          breadcrumbSchema(lang, [{ name: nav("home"), href: "/" }, { name: nav("insights"), href: "/cong-nghe" }]),
        ]}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-linear-to-b from-ice to-white">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
        <Container className="relative max-w-3xl py-16 text-center sm:py-24">
          <span className="inline-flex rounded-full bg-blue/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-blue uppercase">
            {t("label")}
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-navy text-balance sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">{t("lead")}</p>
        </Container>
      </section>

      {/* Featured */}
      <Container className="mt-4">
        <Link
          href={articleHref(featured)}
          className="group grid overflow-hidden rounded-3xl bg-white ring-1 ring-line shadow-[0_20px_50px_rgba(18,59,114,0.08)] transition hover:shadow-[0_28px_60px_rgba(37,99,235,0.15)] lg:grid-cols-2"
        >
          <div className="overflow-hidden">
            <Image
              src={publicPath(featured.cover)}
              alt={featured.title[lang]}
              width={1280}
              height={720}
              priority
              sizes="(min-width: 1024px) 576px, 100vw"
              className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">{featured.topic[lang]}</span>
              <span className="text-muted">{date(featured)}</span>
            </div>
            <h2 className="mt-5 text-2xl leading-snug font-bold text-navy transition-colors group-hover:text-blue sm:text-3xl">
              {featured.title[lang]}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{featured.excerpt[lang]}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
              {common("readArticle")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>
      </Container>

      {/* Grid */}
      <Container className="mt-16 sm:mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-navy">{t("more")}</h2>
          <p className="text-sm text-muted">{t("count", { count: sorted.length })}</p>
        </div>
        <div className="mt-8 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {rest.map((article) => (
            <Link key={article.slug} href={articleHref(article)} className="group flex flex-col">
              <div className="overflow-hidden rounded-2xl ring-1 ring-line">
                <Image
                  src={publicPath(article.cover)}
                  alt={article.title[lang]}
                  width={1280}
                  height={720}
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">{article.topic[lang]}</span>
                <span className="text-muted">{date(article)}</span>
              </div>
              <h3 className="mt-3 text-lg leading-snug font-bold text-navy transition-colors group-hover:text-blue sm:text-xl">
                {article.title[lang]}
              </h3>
              <p className="mt-2 line-clamp-2 text-[15px] leading-6 text-muted">{article.excerpt[lang]}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
