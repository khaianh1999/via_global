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
          "flex h-10 w-10 items-center justify-center rounded-2xl text-[12px] font-semibold tracking-[0.12em] shadow-[0_8px_18px_rgba(18,59,114,0.22)]",
          onLight ? "bg-navy text-white" : "bg-white text-navy",
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
