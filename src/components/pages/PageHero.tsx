import { Container } from "@/components/ui/Container";

export function PageHero({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ice">
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue/10 blur-3xl" />
      <Container className="max-w-4xl py-16 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{label}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-navy text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{lead}</p>
      </Container>
    </section>
  );
}
