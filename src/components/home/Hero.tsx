import { getTranslations } from "next-intl/server";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section id="mo-dau" className={cn(homeSectionFrame, "relative overflow-hidden border-b border-line bg-white")}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,31,58,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,31,58,0.055)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <Container className="relative grid w-full items-center gap-3 py-4 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:gap-8 lg:py-8 lg:pr-16 xl:gap-10 xl:pr-20 min-[1440px]:pr-8 [@media(max-height:740px)]:py-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase sm:text-xs sm:tracking-[0.24em]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 font-serif text-[2.05rem] leading-[1.08] tracking-tight text-navy text-balance sm:mt-5 sm:text-5xl lg:text-[3.35rem]">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg leading-7 text-navy/80 text-balance sm:mt-6 sm:text-2xl sm:leading-8">
            {t("subtitle")}
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-ink sm:mt-6 sm:text-lg sm:leading-8">{t("body")}</p>
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
