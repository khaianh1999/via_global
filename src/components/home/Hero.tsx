import { getLocale, getTranslations } from "next-intl/server";
import { HeroVisual } from "@/components/home/HeroVisual";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export async function Hero() {
  const t = await getTranslations("hero");
  const s = await getTranslations("solutionsPage");
  const locale = (await getLocale()) as Locale;
  const groups = new Set(solutions.map((item) => item.expertise)).size;

  const stats = [
    { value: String(solutions.length).padStart(2, "0"), label: s("stats.services") },
    { value: String(groups).padStart(2, "0"), label: s("stats.groups") },
    { value: "01", label: s("stats.partner") },
  ];

  return (
    <section
      id="mo-dau"
      className={cn(homeSectionFrame, "relative isolate overflow-hidden border-b border-white/10 bg-[#030b1c] text-white")}
    >
      {/* Deep-space backdrop: aurora glows, a fading grid and twinkling stars */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#4f46e5]/25 blur-[120px]" />
        <div className="absolute top-1/2 right-[-10%] h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-[#0ea5e9]/20 blur-[140px]" />
        <div className="absolute -bottom-48 left-1/3 h-[420px] w-[620px] rounded-full bg-[#2563eb]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,197,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,197,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_60%_45%,black_10%,transparent_70%)] bg-[size:64px_64px]" />
        <div className="hero-stars absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#030b1c]" />
      </div>

      <Container className="relative grid w-full items-center lg:flex-1 gap-6 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[1.02fr_1fr] lg:gap-6 lg:py-8 lg:pr-16 xl:gap-10 xl:pr-20 min-[1440px]:pr-8 [@media(max-height:740px)]:py-4">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-1.5 text-xs sm:text-[13px] font-semibold text-white/85 backdrop-blur">
            <span className="hidden rounded-full bg-linear-to-r from-amber-300 to-orange-400 px-2.5 py-0.5 whitespace-nowrap sm:inline text-[11px] font-extrabold tracking-[0.16em] text-[#1a1203] uppercase">
              {t("eyebrow")}
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t("badge")}
          </p>

          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.04] tracking-tight text-balance sm:mt-8 sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem] [@media(max-height:740px)]:lg:text-[3.4rem]">
            {t.rich("title", {
              accent: (chunks) => (
                <span className="inline-block bg-linear-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text pr-[0.12em] pb-[0.06em] text-transparent italic">
                  {chunks}
                </span>
              ),
            })}
          </h1>

          <p className="mt-5 flex items-center gap-3 text-lg font-semibold text-sky-200 sm:mt-7 sm:text-2xl">
            <span className="h-px w-10 bg-linear-to-r from-sky-300 to-transparent sm:w-14" />
            {t("subtitle")}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/65 sm:mt-5 sm:text-lg sm:leading-8">{t("body")}</p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link
              href="/giai-phap"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-blue-bright px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_36px_rgba(56,189,248,0.4)] transition hover:shadow-[0_18px_44px_rgba(56,189,248,0.6)]"
            >
              {t("primary")}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-[15px] font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              {t("secondary")}
            </Link>
          </div>

          <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:mt-12 [@media(max-height:740px)]:mt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="bg-linear-to-b from-white to-sky-200 bg-clip-text font-serif text-3xl text-transparent sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-5 text-white/55 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </Container>

      <div className="relative border-t border-white/10 bg-white/[0.02] py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <ul className="hero-marquee flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
            {[...solutions, ...solutions].map((item, index) => (
              <li key={`${item.slug}-${index}`} className="flex shrink-0 items-center gap-10 text-sm font-semibold tracking-wide whitespace-nowrap text-white/55">
                {item.title[locale]}
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-amber-300" aria-hidden="true">
                  <path d="M6 0c.4 3.2 2.4 5.6 6 6-3.6.4-5.6 2.8-6 6-.4-3.2-2.4-5.6-6-6 3.6-.4 5.6-2.8 6-6Z" fill="currentColor" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
