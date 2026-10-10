import { getLocale, getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insights } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function InsightsPreview() {
  const t = await getTranslations("insights");
  const common = await getTranslations("common");
  const locale = (await getLocale()) as Locale;
  const featured = insights.slice(0, 3);

  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:gap-8">
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ButtonLink href="/cong-nghe" variant="secondary" className="w-full shrink-0 sm:w-auto">
            {t("cta")}
          </ButtonLink>
        </div>
        <div className="mt-6 divide-y divide-line border-y border-line sm:mt-12">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={{ pathname: "/cong-nghe/[slug]", params: { slug: article.slug } }}
              className="group grid gap-2 py-5 sm:gap-4 sm:py-8 lg:grid-cols-12 lg:items-center"
            >
              <p className="text-[11px] tracking-[0.16em] text-blue uppercase sm:text-xs lg:col-span-3">
                {article.topic[locale]}
              </p>
              <div className="lg:col-span-7">
                <h3 className="font-serif text-xl leading-snug text-navy group-hover:text-blue sm:text-2xl">
                  {article.title[locale]}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:mt-3 sm:leading-7">{article.excerpt[locale]}</p>
              </div>
              <p className="text-sm font-semibold text-blue lg:col-span-2 lg:text-right">
                {common("readArticle")} →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
