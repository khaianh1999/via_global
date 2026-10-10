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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[76px] sm:gap-4 sm:px-8">
        <Logo />

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
                  "text-[13px] font-medium tracking-wide transition-colors",
                  active ? "text-navy" : "text-muted hover:text-navy",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/lien-he"
            className="hidden rounded-full bg-navy px-4 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            {t("partnerCta")}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("block h-px w-4 bg-navy transition", open && "translate-y-[3.5px] rotate-45")} />
              <span className={cn("block h-px w-4 bg-navy transition", open && "-translate-y-[3.5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ice py-3 text-sm font-medium text-navy"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white"
            >
              {t("partnerCta")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
