import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { publicPath } from "@/lib/site";

export async function HeroVisual() {
  const t = await getTranslations("hero");

  return (
    <div className="relative mx-auto w-[min(92vw,340px)] min-w-0 sm:w-[min(70vw,420px)] lg:mx-0 lg:w-full lg:max-w-[520px] xl:max-w-[600px] [@media(max-height:740px)]:w-[min(78vw,280px)] [@media(max-height:740px)]:sm:w-[min(56vw,340px)]">
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[#8fd4ff]/30 blur-2xl sm:inset-[2%] lg:-inset-[16%] lg:bg-[#8fd4ff]/35 lg:blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 aspect-square h-[104%] -translate-x-1/2 -translate-y-1/2 lg:h-[150%]"
      >
        <svg viewBox="0 0 200 200" className="orbit-ring absolute inset-0 overflow-visible">
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="#3DB7E8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="188 390"
          />
        </svg>
        <svg viewBox="0 0 200 200" className="orbit-ring-rev absolute inset-[10%] overflow-visible">
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="#6FCF72"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="160 418"
          />
        </svg>
        <svg viewBox="0 0 200 200" className="orbit-ring-slow absolute inset-[20%] overflow-visible">
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="#D7EEFF"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="128 450"
          />
        </svg>
      </div>
      <Image
        src={publicPath("/hero-stage.png")}
        alt={t("visualAlt")}
        width={1280}
        height={720}
        priority
        sizes="(min-width: 1280px) 600px, (min-width: 1024px) 520px, (min-width: 640px) 420px, 92vw"
        className="relative z-10 h-auto w-full drop-shadow-[0_0_22px_rgba(160,220,255,0.55)] drop-shadow-[0_18px_28px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}
