"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { primaryNav } from "@/components/layout/nav";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-300/35 bg-[#08304f]/95 text-white shadow-[inset_0_-2px_0_0_rgba(56,189,248,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[76px] sm:gap-4 sm:px-8">
        <Logo onLight={false} />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[13px] font-medium tracking-wide transition-colors",
                  active
                    ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-sky-300"
                    : "text-white/70 hover:text-white",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher onLight={false} />
          <Link
            href="/lien-he"
            className="hidden rounded-full bg-sky-400 px-4 py-2 text-xs font-semibold tracking-wide text-[#06243c] shadow-[0_8px_20px_rgba(56,189,248,0.28)] transition-colors hover:bg-sky-300 sm:inline-flex"
          >
            {t("partnerCta")}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("block h-px w-4 bg-white transition", open && "translate-y-[3.5px] rotate-45")} />
              <span className={cn("block h-px w-4 bg-white transition", open && "-translate-y-[3.5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#08304f] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-medium text-white"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-[#06243c] hover:bg-sky-300"
            >
              {t("partnerCta")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
