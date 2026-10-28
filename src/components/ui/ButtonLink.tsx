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
        "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide transition-all duration-200",
        variant !== "ghost" && "px-6 py-3",
        variant === "primary" &&
          "bg-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)] hover:bg-blue-deep",
        variant === "secondary" &&
          "border border-navy/15 bg-white text-navy hover:border-blue/40 hover:bg-ice",
        variant === "ghost" && "justify-start text-blue hover:text-navy",
        variant === "light" &&
          "bg-white text-navy hover:bg-ice",
        className,
      )}
    >
      {children}
    </Link>
  );
}
