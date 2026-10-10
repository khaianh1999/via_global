import { getLocale, getTranslations } from "next-intl/server";
import { IconCloud, IconMedia, IconTechnology } from "@/components/icons/Icons";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { expertiseItems } from "@/content/expertise";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const icons = {
  technology: IconTechnology,
  cloud: IconCloud,
  media: IconMedia,
};

export async function ExpertiseSection() {
  const t = await getTranslations("expertise");
  const locale = (await getLocale()) as Locale;

  return (
    <section id="linh-vuc" className={cn(homeSectionFrame, "bg-ice py-10 sm:py-14 lg:py-16")}>
      <Container>
        <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
        <div className="mt-6 grid gap-3 sm:mt-8 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {expertiseItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.slug}
                className="flex gap-4 rounded-[1.35rem] border border-blue/10 border-l-4 border-l-blue bg-white p-4 shadow-[0_16px_40px_rgba(18,59,114,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(37,99,235,0.16)] sm:rounded-[1.6rem] lg:flex-col lg:border-t-4 lg:border-l lg:border-t-blue lg:border-l-blue/10 lg:p-7"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue text-white shadow-[0_8px_18px_rgba(37,99,235,0.35)] sm:h-12 sm:w-12">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <div className="min-w-0">
                <h3 className="font-serif text-xl text-navy lg:mt-6 lg:text-2xl">{item.title[locale]}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted sm:mt-3 sm:leading-7">{item.excerpt[locale]}</p>
                <Link
                  href={{ pathname: "/linh-vuc/[slug]", params: { slug: item.slug } }}
                  className="mt-3 inline-flex text-sm font-semibold text-blue hover:text-navy lg:mt-8"
                >
                  {t("cta")} →
                </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
