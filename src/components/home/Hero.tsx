import { getTranslations } from "next-intl/server";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,31,58,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,31,58,0.035)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Container className="relative grid items-center gap-4 py-8 sm:gap-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8 lg:py-16">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase sm:text-xs sm:tracking-[0.24em]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 font-serif text-[1.85rem] leading-[1.12] tracking-tight text-navy uppercase text-balance sm:mt-5 sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg leading-7 text-navy/80 text-balance sm:mt-6 sm:text-2xl sm:leading-8">
            {t("subtitle")}
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">{t("body")}</p>
          <div className="mt-5 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:gap-3">
            <ButtonLink href="/linh-vuc" className="w-full sm:w-auto">
              {t("primary")}
            </ButtonLink>
            <ButtonLink href="/lien-he" variant="secondary" className="w-full sm:w-auto">
              {t("secondary")}
            </ButtonLink>
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
