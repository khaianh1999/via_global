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
        "flex items-center gap-1 text-xs font-semibold tracking-[0.16em]",
        onLight ? "text-muted" : "text-white/55",
      )}
      aria-label="Language"
    >
      {(["vi", "en"] as const).map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 ? <span aria-hidden="true">|</span> : null}
          <button
            type="button"
            onClick={() => switchTo(code)}
            className={cn(
              "rounded-sm px-1 py-0.5 uppercase transition-colors",
              locale === code
                ? onLight
                  ? "text-navy"
                  : "text-white"
                : onLight
                  ? "hover:text-navy"
                  : "hover:text-white",
            )}
            aria-pressed={locale === code}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
