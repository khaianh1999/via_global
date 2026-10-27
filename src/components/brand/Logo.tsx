import Image from "next/image";
import { Wordmark } from "@/components/brand/Wordmark";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { publicPath } from "@/lib/site";

export function Logo({
  className,
  onLight = true,
}: {
  className?: string;
  onLight?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="VIA Global"
      className={cn("group flex shrink-0 items-center gap-2.5", onLight ? "text-navy" : "text-white", className)}
    >
      <Image
        src={publicPath("/brand/logo-globe.svg")}
        alt=""
        width={64}
        height={64}
        unoptimized
        priority={!onLight}
        className="h-12 w-12 transition-transform duration-700 group-hover:rotate-[-12deg] sm:h-14 sm:w-14"
      />
      <span className="flex flex-col items-start gap-1.5">
        <Wordmark className="h-[22px] w-auto sm:h-[25px]" />
        <span
          className={cn(
            "text-[9.5px] leading-none font-bold tracking-[0.55em] sm:text-[10.5px] sm:tracking-[0.6em]",
            onLight ? "text-blue" : "text-sky-300",
          )}
        >
          GLOBAL
        </span>
      </span>
    </Link>
  );
}
