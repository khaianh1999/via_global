import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { publicPath } from "@/lib/site";

export async function HeroVisual() {
  const t = await getTranslations("hero");

  return (
    <div className="relative mx-auto w-[min(92vw,340px)] min-w-0 sm:w-[min(70vw,420px)] lg:mx-0 lg:w-full lg:max-w-[520px] xl:max-w-[600px] [@media(max-height:740px)]:w-[min(78vw,280px)] [@media(max-height:740px)]:sm:w-[min(56vw,340px)]">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-blue/20 blur-2xl sm:-inset-[4%] sm:blur-2xl lg:-inset-[28%] lg:bg-blue/25 lg:blur-3xl" />
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
            stroke="#2563EB"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="128 450"
          />
        </svg>
      </div>
      <Image
        src={publicPath("/hero-via.png")}
        alt={t("visualAlt")}
        width={1536}
        height={1024}
        priority
        sizes="(min-width: 1280px) 600px, (min-width: 1024px) 520px, (min-width: 640px) 420px, 92vw"
        className="relative z-10 h-auto w-full drop-shadow-[0_24px_36px_rgba(18,59,114,0.18)]"
      />
    </div>
  );
}
