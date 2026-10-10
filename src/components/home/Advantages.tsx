import { getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const keys = ["capability", "practice", "integration", "partnership"] as const;

export async function Advantages() {
  const t = await getTranslations("advantages");

  return (
    <section id="nang-luc" className={cn(homeSectionFrame, "bg-white py-10 sm:py-14 lg:py-16")}>
      <Container>
        <SectionHeading label={t("label")} title={t("title")} />
        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-12">
          {keys.map((key, index) => {
            const lead = index % 2 === 0;
            return (
              <article
                key={key}
                className={cn(
                  "flex gap-4 rounded-[1.35rem] p-4 sm:rounded-[1.6rem] lg:block lg:p-8",
                  lead
                    ? "bg-navy text-white shadow-[0_18px_40px_rgba(12,44,86,0.22)]"
                    : "border border-blue/20 border-l-4 border-l-blue bg-white shadow-[0_14px_34px_rgba(37,99,235,0.1)]",
                )}
              >
                <p
                  className={
                    lead
                      ? "inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-blue px-2 text-xs font-semibold tracking-wide text-white"
                      : "inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-navy px-2 text-xs font-semibold tracking-wide text-white"
                  }
                >
                  0{index + 1}
                </p>
                <div className="min-w-0">
                <h3 className={lead ? "font-serif text-xl text-white lg:mt-4 lg:text-2xl" : "font-serif text-xl text-navy lg:mt-4 lg:text-2xl"}>
                  {t(`items.${key}.title`)}
                </h3>
                <p className={lead ? "mt-1.5 text-sm leading-6 text-white/75 lg:mt-3 lg:leading-7" : "mt-1.5 text-sm leading-6 text-ink lg:mt-3 lg:leading-7"}>
                  {t(`items.${key}.body`)}
                </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
