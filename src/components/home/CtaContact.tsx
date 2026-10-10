import { getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

const paths = ["software", "cloud", "media"] as const;
const steps = ["listen", "design", "build", "handover"] as const;

export async function CtaContact() {
  const t = await getTranslations("cta");

  return (
    <section
      id="lien-he"
      className={cn(homeSectionFrame, "relative overflow-hidden bg-navy-deep text-white")}
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue/40 blur-3xl" />
      <Container className="relative py-10 sm:py-14 lg:py-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.9fr)] lg:gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-blue-bright uppercase sm:text-xs">
              {t("label")}
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-[1.85rem] leading-[1.12] text-balance sm:text-4xl lg:text-[2.65rem]">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">{t("body")}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <span className="rounded-full bg-blue px-3 py-1 text-[11px] tracking-[0.14em] text-white uppercase">
                {t("emailLabel")}
              </span>
              {siteConfig.email}
            </a>
            <div className="mt-6">
              <ButtonLink href="/lien-he" variant="light">
                {t("button")}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white p-4 text-navy shadow-[0_18px_40px_rgba(6,18,36,0.28)] sm:p-5">
            <p className="px-1 text-[11px] font-semibold tracking-[0.2em] text-blue uppercase">{t("pathsLabel")}</p>
            <div className="mt-3 grid gap-2.5">
              {paths.map((key, index) => (
                <article key={key} className="rounded-2xl border border-line bg-ice px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-blue">0{index + 1}</p>
                  <h3 className="mt-1 font-serif text-lg leading-snug text-navy">{t(`paths.${key}.title`)}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink">{t(`paths.${key}.body`)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 lg:mt-7">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-bright uppercase">{t("stepsLabel")}</p>
          <ol className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((key, index) => (
              <li key={key} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                <p className="text-xs font-semibold text-blue-bright">0{index + 1}</p>
                <p className="mt-1 text-sm font-semibold text-white">{t(`steps.${key}.title`)}</p>
                <p className="mt-1 text-xs leading-5 text-white/70">{t(`steps.${key}.body`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
