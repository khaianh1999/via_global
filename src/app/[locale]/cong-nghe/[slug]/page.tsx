import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
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

function MetaIcon({ name }: { name: "date" | "time" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {name === "date" ? (
        <>
          <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </>
      )}
    </svg>
  );
}

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
  const format = await getFormatter();
  const related = [...insights]
    .filter((article) => article.slug !== item.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const date = (value: string) => format.dateTime(new Date(value), { day: "numeric", month: "long", year: "numeric" });
  const [first, ...paragraphs] = item.body[lang];
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            locale: locale as Locale,
            href: { pathname: "/cong-nghe/[slug]", params: { slug: item.slug } },
            headline: item.title[locale as Locale],
            description: item.excerpt[locale as Locale],
            image: item.cover,
            datePublished: item.date,
            section: item.topic[locale as Locale],
          }),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("insights"), href: "/cong-nghe" }, { name: item.title[locale as Locale], href: { pathname: "/cong-nghe/[slug]", params: { slug: item.slug } } }]),
        ]}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep pb-36 text-white sm:pb-52 lg:pb-64">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blue/40 blur-3xl" />
          <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#22d3ee]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,197,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,197,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_50%_30%,black_10%,transparent_70%)] bg-[size:64px_64px]" />
        </div>
        <Container className="max-w-4xl pt-10 sm:pt-14">
          <Link
            href="/cong-nghe"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {page("backToList")}
          </Link>
          <p className="mt-10 w-fit rounded-full border border-sky-300/30 bg-sky-300/10 px-3.5 py-1 text-xs font-semibold tracking-[0.16em] text-sky-200 uppercase">
            {item.topic[lang]}
          </p>
          <h1 className="mt-6 font-serif text-[2.2rem] leading-[1.12] text-balance sm:text-5xl lg:text-[3.6rem]">
            {item.title[lang]}
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/70 sm:text-xl sm:leading-9">{item.excerpt[lang]}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <MetaIcon name="date" />
              {date(item.date)}
            </span>
            <span className="inline-flex items-center gap-2">
              <MetaIcon name="time" />
              {t("readingTime", { minutes: item.readTime })}
            </span>
          </div>
        </Container>
      </section>

      {/* Cover overlapping the hero, then the article body */}
      <section className="flow-root bg-white pb-20 sm:pb-28">
        <Container className="relative z-10 -mt-28 max-w-5xl sm:-mt-40 lg:-mt-52">
          <Image
            src={publicPath(item.cover)}
            alt={item.topic[lang]}
            width={1280}
            height={720}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="aspect-[16/9] w-full rounded-[1.6rem] object-cover shadow-[0_40px_90px_rgba(3,11,28,0.35)] ring-1 ring-white/10 sm:rounded-[2rem]"
          />
        </Container>

        <Container className="mt-14 grid max-w-5xl gap-12 sm:mt-20 lg:grid-cols-12">
          <div className="text-[17px] leading-8 text-ink/80 sm:text-lg sm:leading-9 lg:col-span-8">
            <p className="text-xl leading-9 text-navy first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-blue sm:text-[1.35rem] sm:leading-10">
              {first}
            </p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-7">
                {paragraph}
              </p>
            ))}
            <div className="mt-12 flex items-center gap-4 border-t border-line pt-8">
              <span className="h-px w-10 bg-blue" />
              <Link
                href="/cong-nghe"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                {page("backToList")}
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-[1.4rem] border border-line bg-ice p-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-[0.18em] text-blue uppercase">{page("aboutArticle")}</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">{page("topic")}</dt>
                  <dd className="mt-1 font-semibold text-navy">{item.topic[lang]}</dd>
                </div>
                <div>
                  <dt className="text-muted">{page("published")}</dt>
                  <dd className="mt-1 font-semibold text-navy">{date(item.date)}</dd>
                </div>
                <div>
                  <dt className="text-muted">{page("readTime")}</dt>
                  <dd className="mt-1 font-semibold text-navy">{t("readingTime", { minutes: item.readTime })}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      {/* Related articles */}
      <section className="border-t border-line bg-ice py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{page("more")}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((article) => (
              <Link
                key={article.slug}
                href={{ pathname: "/cong-nghe/[slug]", params: { slug: article.slug } }}
                className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-[0_16px_40px_rgba(18,59,114,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(37,99,235,0.18)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={publicPath(article.cover)}
                    alt={article.topic[lang]}
                    width={1280}
                    height={720}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{article.topic[lang]}</p>
                  <h2 className="mt-3 flex-1 font-serif text-xl leading-snug text-navy transition-colors group-hover:text-blue">
                    {article.title[lang]}
                  </h2>
                  <p className="mt-4 text-xs text-muted">{date(article.date)}</p>
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
