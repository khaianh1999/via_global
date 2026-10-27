import { getTranslations } from "next-intl/server";
import { GlobeCanvas } from "@/components/home/globe/GlobeCanvas";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import type { ServiceIconName } from "@/content/solutions";
import { cn } from "@/lib/cn";

const chips: { key: "ai" | "cloud" | "security" | "software"; icon: ServiceIconName; position: string; delay: string }[] = [
  { key: "ai", icon: "ai", position: "top-[6%] -left-[6%] xl:-left-[12%]", delay: "0s" },
  { key: "cloud", icon: "cloud", position: "top-[16%] -right-[2%] xl:-right-[6%]", delay: "-1.5s" },
  { key: "security", icon: "shield", position: "bottom-[14%] -left-[4%] xl:-left-[10%]", delay: "-3s" },
  { key: "software", icon: "code", position: "bottom-[8%] -right-[4%] xl:-right-[8%]", delay: "-4.5s" },
];

// The orbit is split in two: the far half sits behind the globe canvas and
// the near half, with its satellite, passes in front of it.
function Orbit({ half }: { half: "far" | "near" }) {
  const far = half === "far";

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("pointer-events-none absolute inset-0 h-full w-full overflow-visible", far ? "z-0" : "z-20")}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`hero-orbit-${half}`} x1="0" y1="60" x2="100" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff9f1a" stopOpacity="0.1" />
          <stop offset="0.4" stopColor="#fbbf24" />
          <stop offset="0.75" stopColor="#fde68a" />
          <stop offset="1" stopColor="#5ee7ff" />
        </linearGradient>
        <radialGradient id="hero-satellite">
          <stop stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#a5f3ff" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="rotate(-16 50 50)">
        {far ? (
          <path d="M96 50A46 12 0 0 0 4 50" stroke="url(#hero-orbit-far)" strokeWidth="0.5" fill="none" opacity="0.45" />
        ) : (
          <>
            <path id="hero-orbit-path" d="M4 50A46 12 0 0 0 96 50" stroke="url(#hero-orbit-near)" strokeWidth="0.7" fill="none" />
            <path d="M4 50A46 12 0 0 0 96 50" stroke="#fde68a" strokeWidth="2.4" fill="none" opacity="0.08" />
            <g>
              <circle r="2.6" fill="url(#hero-satellite)" />
              <circle r="0.8" fill="#ffffff" />
              <animateMotion dur="7s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#hero-orbit-path" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="7s" repeatCount="indefinite" />
            </g>
          </>
        )}
      </g>
    </svg>
  );
}

export async function HeroVisual() {
  const t = await getTranslations("hero");

  return (
    <div className="relative mx-auto aspect-square w-[min(88vw,380px)] sm:w-[min(70vw,460px)] lg:mx-0 lg:w-full lg:max-w-[560px] xl:max-w-[620px] [@media(max-height:740px)]:lg:max-w-[480px]">
      <div className="pointer-events-none absolute inset-[18%] rounded-full bg-blue/40 blur-[80px]" />
      <Orbit half="far" />
      <GlobeCanvas className="relative z-10 h-full w-full cursor-grab touch-pan-y active:cursor-grabbing" />
      <Orbit half="near" />

      {chips.map((chip) => (
        <div
          key={chip.key}
          className={cn("hero-float absolute z-30 hidden lg:block", chip.position)}
          style={{ animationDelay: chip.delay }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] py-2.5 pr-4 pl-2.5 shadow-[0_18px_40px_rgba(2,8,23,0.45)] backdrop-blur-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-400/90 to-blue-bright text-white shadow-[0_6px_16px_rgba(56,189,248,0.45)]">
              <ServiceIcon name={chip.icon} className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-white">{t(`chips.${chip.key}`)}</span>
              <span className="mt-0.5 block text-xs text-white/55">{t(`chips.${chip.key}Note`)}</span>
            </span>
          </div>
        </div>
      ))}

      <p className="pointer-events-none absolute bottom-[2%] left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase lg:flex">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
          <path d="M8 12h8M8 12l3-3M8 12l3 3M16 12l-3-3M16 12l-3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {t("globeHint")}
      </p>
    </div>
  );
}
