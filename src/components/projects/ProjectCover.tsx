import { cn } from "@/lib/cn";

const accents = {
  navy: "from-navy to-[#16345c]",
  blue: "from-blue to-navy",
  ice: "from-[#8fb6d6] to-navy",
  slate: "from-[#3d5270] to-navy-deep",
};

export function ProjectCover({
  accent,
  className,
}: {
  accent: keyof typeof accents;
  className?: string;
}) {
  return (
    <div className={cn("relative h-52 overflow-hidden bg-linear-to-br", accents[accent], className)}>
      <svg viewBox="0 0 400 220" className="h-full w-full opacity-40" aria-hidden="true">
        <circle cx="320" cy="40" r="90" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="60" cy="180" r="70" fill="none" stroke="white" strokeWidth="1" />
        <path d="M20 80h360M80 20v180" stroke="white" strokeWidth="0.6" />
        <circle cx="200" cy="110" r="6" fill="white" />
        <circle cx="140" cy="70" r="4" fill="white" />
        <circle cx="270" cy="150" r="4" fill="white" />
      </svg>
    </div>
  );
}
