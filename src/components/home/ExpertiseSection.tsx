import { getLocale, getTranslations } from "next-intl/server";
import { IconCloud, IconMedia, IconTechnology } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section className="bg-ice py-12 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
        <div className="mt-7 grid gap-3.5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {expertiseItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.slug}
                className="flex flex-col rounded-[1.35rem] border border-line bg-white p-5 shadow-[0_10px_40px_rgba(11,31,58,0.04)] sm:rounded-[1.6rem] sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ice text-navy sm:h-12 sm:w-12">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <h3 className="mt-4 font-serif text-xl text-navy sm:mt-6 sm:text-2xl">{item.title[locale]}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted sm:mt-3 sm:leading-7">{item.excerpt[locale]}</p>
                <Link
                  href={{ pathname: "/linh-vuc/[slug]", params: { slug: item.slug } }}
                  className="mt-4 text-sm font-semibold text-blue hover:text-navy sm:mt-8"
                >
                  {t("cta")} →
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
