"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  onLight = true,
}: {
  onLight?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  function switchTo(next: Locale) {
    if (next === locale) return;
    router.replace(
      // @ts-expect-error next-intl accepts the current pathname with params
      { pathname, params },
      { locale: next },
    );
  }

  return (
    <div
      className={cn(
        "flex items-center rounded-full p-1 text-[13px] font-bold tracking-[0.08em]",
        onLight ? "bg-navy/5 ring-1 ring-navy/10" : "bg-white/8 ring-1 ring-white/15",
      )}
      aria-label="Language"
    >
      {(["vi", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            locale === code
              ? onLight
                ? "bg-navy text-white"
                : "bg-white text-navy"
              : onLight
                ? "text-muted hover:text-navy"
                : "text-white/65 hover:text-white",
          )}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
