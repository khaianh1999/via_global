import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { IconCloud, IconMedia, IconTechnology } from "@/components/icons/Icons";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { expertiseItems } from "@/content/expertise";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { publicPath } from "@/lib/site";

const icons = {
  technology: IconTechnology,
  cloud: IconCloud,
  media: IconMedia,
};

const banners = {
  technology: "/home/field-technology.svg",
  cloud: "/home/field-cloud.svg",
  media: "/home/field-media.svg",
};

export async function ExpertiseSection() {
  const t = await getTranslations("expertise");
  const locale = (await getLocale()) as Locale;

  return (
    <section id="linh-vuc" className={cn(homeSectionFrame, "bg-ice py-10 sm:py-14 lg:py-12")}>
      <Container>
        <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
        <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-3 lg:mt-10 lg:gap-6">
          {expertiseItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Link
                key={item.slug}
                href={{ pathname: "/giai-phap", hash: item.slug }}
                className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-[0_16px_40px_rgba(18,59,114,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(37,99,235,0.18)] sm:rounded-[1.6rem]"
              >
                <div className="relative">
                  <div className="overflow-hidden">
                    <Image
                      src={publicPath(banners[item.icon])}
                      alt=""
                      width={800}
                      height={420}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44 lg:h-40 xl:h-48"
                    />
                  </div>
                  <span className="absolute -bottom-6 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue text-white shadow-[0_10px_22px_rgba(37,99,235,0.4)] ring-4 ring-white lg:left-6">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 pt-9 lg:p-6 lg:pt-10">
                  <h3 className="font-serif text-xl text-navy group-hover:text-blue lg:text-2xl">{item.title[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted sm:leading-7">{item.excerpt[locale]}</p>
                  <p className="mt-4 text-sm font-semibold text-blue">{t("cta")} →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
