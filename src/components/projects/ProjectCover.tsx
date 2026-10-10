import { cn } from "@/lib/cn";

const accents = {
  navy: "from-navy to-[#1d4e8f]",
  blue: "from-blue to-navy",
  ice: "from-[#93b4e0] to-navy",
  slate: "from-[#3e5c86] to-navy-deep",
};

export function ProjectCover({
  accent,
  className,
}: {
  accent: keyof typeof accents;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-linear-to-br", accents[accent], className)}>
      <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15" />
      <div className="absolute bottom-6 left-6 h-px w-24 bg-white/50" />
    </div>
  );
}
