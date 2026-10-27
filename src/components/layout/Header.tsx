"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { primaryNav } from "@/components/layout/nav";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b text-white backdrop-blur-md transition-[background-color,box-shadow] duration-300",
        scrolled || open
          ? "border-white/10 bg-[#030b1c]/95 shadow-[0_10px_30px_rgba(2,10,26,0.35)]"
          : "border-white/10 bg-[#041126]/90",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[76px] sm:gap-4 sm:px-8">
        <Logo onLight={false} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[15px] font-semibold transition-colors xl:px-4",
                  active ? "bg-white/12 text-white" : "text-white/75 hover:bg-white/8 hover:text-white",
                )}
              >
                {t(item.key)}
                {active ? (
                  <span className="absolute -bottom-[13px] left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)] sm:-bottom-[19px]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher onLight={false} />
          <Link
            href="/lien-he"
            className="group hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-linear-to-r from-sky-400 to-blue-bright px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(56,189,248,0.35)] transition hover:shadow-[0_10px_28px_rgba(56,189,248,0.55)] sm:inline-flex"
          >
            {t("partnerCta")}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex flex-col gap-[5px]">
              <span className={cn("block h-0.5 w-5 rounded-full bg-white transition", open && "translate-y-[7px] rotate-45")} />
              <span className={cn("block h-0.5 w-5 rounded-full bg-white transition", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 rounded-full bg-white transition", open && "-translate-y-[7px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-[#061d38] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8" aria-label="Mobile">
            {primaryNav.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl px-4 py-3.5 text-[17px] font-semibold transition-colors",
                    active ? "bg-white/10 text-white" : "text-white/85 hover:bg-white/5",
                  )}
                >
                  <span className={cn("text-xs tabular-nums", active ? "text-sky-300" : "text-white/40")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{t(item.key)}</span>
                  <ArrowIcon className={cn("h-5 w-5", active ? "text-sky-300" : "text-white/30")} />
                </Link>
              );
            })}
            <Link
              href="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-blue-bright px-5 py-3.5 text-base font-bold text-white shadow-[0_10px_26px_rgba(56,189,248,0.35)]"
            >
              {t("partnerCta")}
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
