import Image from "next/image";
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
    <Link href="/" aria-label="VIA Global" className={cn("flex shrink-0 items-center", className)}>
      <Image
        src={publicPath(onLight ? "/brand/logo.png" : "/brand/logo-light.png")}
        alt="VIA Global"
        width={640}
        height={294}
        priority={!onLight}
        sizes="140px"
        className={cn("w-auto", onLight ? "h-14" : "h-11 sm:h-14")}
      />
    </Link>
  );
}
