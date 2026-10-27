import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { insights } from "@/content/insights";
import { Link } from "@/i18n/navigation";
import { publicPath } from "@/lib/site";
import type { Locale } from "@/i18n/routing";

export async function InsightsPreview() {
  const t = await getTranslations("insights");
  const common = await getTranslations("common");
  const locale = (await getLocale()) as Locale;
  const featured = insights.slice(0, 3);

  return (
    <section id="goc-nhin" className={cn(homeSectionFrame, "bg-white py-10 sm:py-14 lg:py-8")}>
      <Container>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end lg:gap-8">
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ButtonLink href="/cong-nghe" variant="secondary" className="w-full shrink-0 sm:w-auto">
            {t("cta")}
          </ButtonLink>
        </div>
        <div className="mt-6 grid gap-4 sm:mt-8 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={{ pathname: "/cong-nghe/[slug]", params: { slug: article.slug } }}
              className="group flex flex-col overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-[0_10px_30px_rgba(18,59,114,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,59,114,0.1)]"
            >
              <Image
                src={publicPath(article.cover)}
                alt={article.topic[locale]}
                width={1280}
                height={720}
                sizes="(min-width: 1024px) 360px, 100vw"
                className="h-44 w-full object-cover object-center sm:h-52 lg:h-40"
              />
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-serif text-lg leading-snug text-navy group-hover:text-blue sm:text-xl">
                  {article.title[locale]}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted">{article.excerpt[locale]}</p>
                <p className="mt-4 text-sm font-semibold text-blue">{common("readArticle")} →</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
