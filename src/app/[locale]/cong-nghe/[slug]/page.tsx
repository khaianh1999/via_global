import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getInsight, insights } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata, socialImage } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import { publicPath } from "@/lib/site";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    insights.map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getInsight(slug);
  if (!item) return {};

  return buildPageMetadata({
    locale: locale as Locale,
    title: item.title[locale as Locale],
    description: item.excerpt[locale as Locale],
    href: { pathname: "/cong-nghe/[slug]", params: { slug } },
    image: socialImage(item.cover),
    article: { publishedTime: item.date, section: item.topic[locale as Locale] },
  });
}

type Article = (typeof insights)[number];

const articleHref = (article: Article) => ({ pathname: "/cong-nghe/[slug]" as const, params: { slug: article.slug } });

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getInsight(slug);
  if (!item) notFound();

  const lang = locale as Locale;
  const t = await getTranslations("common");
  const page = await getTranslations("insightsPage");
  const nav = await getTranslations("nav");
  const format = await getFormatter();
  const others = [...insights]
    .filter((article) => article.slug !== item.slug)
    .sort((a, b) => b.date.localeCompare(a.date));
  const date = (value: string) => format.dateTime(new Date(value), { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <JsonLd
        data={[
          articleSchema({
            locale: lang,
            href: articleHref(item),
            headline: item.title[lang],
            description: item.excerpt[lang],
            image: item.cover,
            datePublished: item.date,
            section: item.topic[lang],
          }),
          breadcrumbSchema(lang, [
            { name: nav("home"), href: "/" },
            { name: nav("insights"), href: "/cong-nghe" },
            { name: item.title[lang], href: articleHref(item) },
          ]),
        ]}
      />

      {/* Header */}
      <header className="bg-linear-to-b from-ice to-white">
        <Container className="max-w-3xl pt-12 pb-10 text-center sm:pt-20">
          <Link
            href="/cong-nghe"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-blue"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {nav("insights")}
          </Link>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">{item.topic[lang]}</span>
            <span className="text-muted">
              {date(item.date)} · {t("readingTime", { minutes: item.readTime })}
            </span>
          </div>
          <h1 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-navy text-balance sm:text-[2.75rem]">
            {item.title[lang]}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">{item.excerpt[lang]}</p>
        </Container>
      </header>

      <Container className="max-w-5xl">
        <Image
          src={publicPath(item.cover)}
          alt={item.title[lang]}
          width={1280}
          height={720}
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-[0_24px_60px_rgba(18,59,114,0.12)]"
        />
      </Container>

      {/* Body */}
      <div className="mx-auto mt-12 max-w-[42rem] space-y-7 px-5 text-[17px] leading-[1.85] text-ink/85 sm:mt-16 sm:px-0 sm:text-lg">
        {item.body[lang].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="flex items-center gap-4 border-t border-line pt-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">VIA</span>
          <div className="text-sm leading-6">
            <p className="font-semibold text-navy">VIA Global</p>
            <p className="text-muted">{date(item.date)}</p>
          </div>
        </div>
      </div>

      {/* More */}
      <section className="mt-20 bg-ice py-14 sm:mt-28 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-navy">{page("related")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={articleHref(article)}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(37,99,235,0.14)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={publicPath(article.cover)}
                    alt=""
                    width={1280}
                    height={720}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">{article.topic[lang]}</span>
                  <h3 className="mt-3 flex-1 text-base leading-snug font-bold text-navy group-hover:text-blue">
                    {article.title[lang]}
                  </h3>
                  <p className="mt-3 text-xs text-muted">{date(article.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
