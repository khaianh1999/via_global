import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionImage, solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { publicPath } from "@/lib/site";

export async function ServicesSection() {
  const t = await getTranslations("services");
  const locale = (await getLocale()) as Locale;

  return (
    <section id="dich-vu" className={cn(homeSectionFrame, "bg-ice py-10 sm:py-14 lg:py-8")}>
      <Container>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading label={t("label")} title={t("title")} />
          <p className="max-w-md text-[15px] leading-7 text-muted lg:pb-1">{t("body")}</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:mt-7 lg:grid-cols-4 lg:gap-4">
          {solutions.map((item, index) => (
            <Link
              key={item.slug}
              href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
              className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-line bg-white shadow-[0_10px_30px_rgba(18,59,114,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_18px_40px_rgba(37,99,235,0.16)] sm:rounded-[1.35rem]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={solutionImage(item.slug)}
                  alt=""
                  width={800}
                  height={520}
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="h-24 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-36 lg:h-28 xl:h-32"
                />
                <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-navy sm:top-3 sm:left-3 sm:px-2.5 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.product ? (
                  <span className="absolute top-2 right-2 rounded-full bg-blue px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-white uppercase sm:top-3 sm:right-3 sm:text-[10px]">
                    {t("productBadge")}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <div className="flex items-start gap-2.5">
                  <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white sm:flex">
                    <ServiceIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-[15px] leading-snug text-navy group-hover:text-blue sm:text-lg">
                    {item.title[locale]}
                  </h3>
                </div>
                <p className="mt-1.5 hidden text-sm leading-6 text-muted sm:line-clamp-2">{item.tagline[locale]}</p>
              </div>
            </Link>
          ))}
          <div className="relative col-span-2 flex flex-col justify-between gap-4 overflow-hidden rounded-[1.35rem] bg-navy p-5 text-white shadow-[0_18px_40px_rgba(12,44,86,0.25)] lg:col-span-1">
            <Image
              src={publicPath("/solutions/hero.svg")}
              alt=""
              width={640}
              height={560}
              className="pointer-events-none absolute -right-14 -bottom-16 w-56 opacity-40"
            />
            <div className="relative">
              <h3 className="font-serif text-xl leading-snug">{t("ctaTitle")}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{t("ctaBody")}</p>
            </div>
            <Link
              href="/giai-phap"
              className="relative inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-ice"
            >
              {t("ctaAll")} →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
