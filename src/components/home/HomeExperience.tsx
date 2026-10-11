"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type SectionLink = {
  id: string;
  label: string;
};

export function HomeExperience({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const signature = sections.map((section) => section.id).join("|");
  const onDark = active === "lien-he" || active === "mo-dau";

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(min-width: 1024px)");
    const syncSnap = () => {
      root.classList.toggle("snap-y", media.matches);
      root.classList.toggle("snap-mandatory", media.matches);
    };
    syncSnap();
    media.addEventListener("change", syncSnap);
    const nodes = signature
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      media.removeEventListener("change", syncSnap);
      root.classList.remove("snap-y", "snap-mandatory");
    };
  }, [signature]);

  function go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label="Mục trang chủ" className="snap-y snap-mandatory pointer-events-none fixed top-1/2 right-3 z-40 -translate-y-1/2 xl:right-6">
      <ol
        className={cn(
          "pointer-events-auto relative flex flex-col items-end gap-2.5 lg:gap-3.5 lg:border-r lg:pr-3",
          onDark ? "border-white/40" : "border-line",
        )}
      >
        {sections.map((section, index) => {
          const current = section.id === active;
          const number = String(index + 1).padStart(2, "0");

          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => go(section.id)}
                aria-current={current ? "true" : undefined}
                aria-label={section.label}
                className="flex items-center gap-3"
              >
                <span
                  className={cn(
                    "hidden max-w-36 truncate text-xs font-medium transition-opacity min-[1440px]:block",
                    onDark ? "text-white" : "text-navy",
                    current ? "opacity-100" : "w-0 opacity-0",
                  )}
                >
                  {section.label}
                </span>
                <span
                  className={cn(
                    "relative text-[11px] tabular-nums tracking-wide transition-colors",
                    onDark
                      ? current
                        ? "font-semibold text-white"
                        : "text-white/55 hover:text-white"
                      : current
                        ? "font-semibold text-navy"
                        : "text-muted/80 hover:text-navy",
                  )}
                >
                  <span className="lg:hidden">
                    <span
                      className={cn(
                        "block h-1.5 w-1.5 rounded-full",
                        onDark ? (current ? "bg-white" : "bg-white/40") : current ? "bg-blue" : "bg-navy/25",
                      )}
                    />
                    <span className="sr-only">{number}</span>
                  </span>
                  <span className="hidden lg:inline">{number}</span>
                  <span
                    className={cn(
                      "absolute top-1/2 -right-3 hidden h-4 w-0.5 -translate-y-1/2 lg:block",
                      onDark ? "bg-white" : "bg-navy",
                      current ? "opacity-100" : "opacity-0",
                    )}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
