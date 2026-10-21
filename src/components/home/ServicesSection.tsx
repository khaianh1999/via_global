import { getLocale, getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export async function ServicesSection() {
  const t = await getTranslations("services");
  const locale = (await getLocale()) as Locale;

  return (
    <section id="dich-vu" className={cn(homeSectionFrame, "bg-ice py-10 sm:py-14 lg:py-10")}>
      <Container>
        <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-4">
          {solutions.map((item, index) => (
            <Link
              key={item.slug}
              href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
              className="group flex gap-4 rounded-[1.35rem] border border-line bg-white p-4 shadow-[0_10px_30px_rgba(18,59,114,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_18px_40px_rgba(37,99,235,0.14)] lg:flex-col lg:gap-0 lg:p-5"
            >
              <div className="flex shrink-0 items-start justify-between lg:w-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue text-white shadow-[0_8px_18px_rgba(37,99,235,0.3)] transition-colors group-hover:bg-navy">
                  <ServiceIcon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="hidden text-xs font-semibold tracking-[0.16em] text-blue/70 lg:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="min-w-0 lg:mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-lg leading-snug text-navy group-hover:text-blue lg:text-xl">
                    {item.title[locale]}
                  </h3>
                  {item.product ? (
                    <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-blue uppercase">
                      {t("productBadge")}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm leading-6 text-muted">{item.tagline[locale]}</p>
              </div>
            </Link>
          ))}
          <div className="flex flex-col justify-between gap-4 rounded-[1.35rem] bg-navy p-5 text-white shadow-[0_18px_40px_rgba(12,44,86,0.25)] sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-serif text-xl leading-snug">{t("ctaTitle")}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{t("ctaBody")}</p>
            </div>
            <Link
              href="/giai-phap"
              className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-ice"
            >
              {t("ctaAll")} →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
