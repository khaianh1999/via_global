import { cn } from "@/lib/cn";

export function SectionHeading({
  label,
  title,
  body,
  align = "left",
  light = false,
}: {
  label?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {label ? (
        <p
          className={cn(
            "mb-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase sm:mb-4 sm:text-xs sm:tracking-[0.22em]",
            light ? "text-blue-bright/80" : "text-blue",
          )}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-[1.7rem] leading-[1.18] tracking-tight text-balance sm:text-4xl sm:leading-tight lg:text-5xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-3 text-[15px] leading-7 sm:mt-5 sm:text-lg sm:leading-8",
            light ? "text-white/75" : "text-muted",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
