import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { publicPath } from "@/lib/site";

// Dark page header matching the home and solutions heroes: navy backdrop,
// soft glows and a faint grid, text on the left and an optional visual on the right.
export function DarkPageHero({
  label,
  title,
  lead,
  children,
}: {
  label: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blue/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#22d3ee]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,197,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,197,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)] bg-[size:64px_64px]" />
      </div>
      <Container
        className={cn(
          "grid items-center gap-10 py-14 lg:py-20",
          children ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-12" : "",
        )}
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue-bright uppercase">{label}</p>
          <h1 className="mt-4 font-serif text-[2.1rem] leading-[1.12] text-balance sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-lg sm:leading-8">{lead}</p>
        </div>
        {children}
      </Container>
    </section>
  );
}

// Three cover images fanned like a stack of cards, for listing headers.
export function CoverStack({ covers }: { covers: string[] }) {
  const placement = [
    "left-0 top-10 -rotate-6",
    "right-0 top-0 rotate-6",
    "left-1/2 top-16 -translate-x-1/2 rotate-0",
  ];

  return (
    <div className="relative mx-auto hidden h-80 w-full max-w-lg sm:block lg:h-96">
      {covers.slice(0, 3).map((cover, index) => (
        <div
          key={cover}
          className={cn(
            "absolute w-[62%] overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(2,8,23,0.55)] ring-1 ring-white/15",
            placement[index],
          )}
        >
          <Image
            src={publicPath(cover)}
            alt=""
            width={1280}
            height={720}
            priority
            sizes="320px"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
