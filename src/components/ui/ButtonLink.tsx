import { Link } from "@/i18n/navigation";
import type { StaticPathname } from "@/i18n/routing";
import { cn } from "@/lib/cn";

type Props = {
  href: StaticPathname;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
        variant === "primary" &&
          "bg-navy text-white shadow-sm hover:bg-navy-deep",
        variant === "secondary" &&
          "border border-navy/15 bg-white text-navy hover:border-navy/40 hover:bg-ice",
        variant === "ghost" && "px-0 text-blue hover:text-navy",
        variant === "light" &&
          "bg-white text-navy hover:bg-ice",
        className,
      )}
    >
      {children}
    </Link>
  );
}
