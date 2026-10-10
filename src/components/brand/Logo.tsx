import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  onLight = true,
}: {
  className?: string;
  onLight?: boolean;
}) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-semibold tracking-[0.14em]",
          onLight
            ? "border-navy/15 bg-navy text-white"
            : "border-white/20 bg-white text-navy",
        )}
      >
        VIA
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-serif text-xl tracking-tight",
            onLight ? "text-navy" : "text-white",
          )}
        >
          VIA Global
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] tracking-[0.22em] uppercase",
            onLight ? "text-muted" : "text-white/60",
          )}
        >
          Technology
        </span>
      </span>
    </Link>
  );
}
