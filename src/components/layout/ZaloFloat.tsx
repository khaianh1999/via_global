import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/site";

export async function ZaloFloat() {
  if (!siteConfig.zalo.href) return null;

  const t = await getTranslations("common");

  return (
    <a
      href={siteConfig.zalo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("openZalo")}
      className="zalo-float fixed right-5 bottom-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full shadow-[0_10px_28px_rgba(3,90,218,0.35)] sm:right-7 sm:bottom-7"
    >
      <span className="zalo-float-ping" aria-hidden="true" />
      <img
        src="/icon-zalo.svg"
        alt=""
        width={56}
        height={56}
        className="relative z-10 h-14 w-14"
      />
    </a>
  );
}
