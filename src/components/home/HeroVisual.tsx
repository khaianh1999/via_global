import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { publicPath } from "@/lib/site";

export async function HeroVisual() {
  const t = await getTranslations("hero");

  return (
    <div className="mx-auto w-[min(58vw,220px)] min-w-0 sm:w-[min(42vw,300px)] lg:mx-0 lg:w-[360px] xl:w-[420px]">
      <Image
        src={publicPath("/hero-via-global.png")}
        alt={t("visualAlt")}
        width={839}
        height={755}
        priority
        sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 640px) 300px, 58vw"
        className="h-auto w-full drop-shadow-[0_16px_28px_rgba(11,31,58,0.12)]"
      />
    </div>
  );
}
