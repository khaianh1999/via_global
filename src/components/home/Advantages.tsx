import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { publicPath } from "@/lib/site";

const keys = ["capability", "practice", "integration", "partnership"] as const;

export async function Advantages() {
  const t = await getTranslations("advantages");

  return (
    <section id="nang-luc" className={cn(homeSectionFrame, "bg-white py-10 sm:py-14 lg:py-12")}>
      <Container className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <SectionHeading label={t("label")} title={t("title")} />
          <div className="relative mt-6 lg:mt-8">
            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-blue/10 blur-2xl" />
            <Image
              src={publicPath("/home/advantages.svg")}
              alt=""
              width={800}
              height={600}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="relative w-full rounded-[1.6rem] shadow-[0_28px_70px_rgba(12,44,86,0.28)] ring-1 ring-navy/10 sm:rounded-[2rem]"
            />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {keys.map((key, index) => {
            const lead = index === 0 || index === 3;
            return (
              <article
                key={key}
                className={cn(
                  "flex gap-4 rounded-[1.35rem] p-4 transition duration-200 hover:-translate-y-1 sm:block sm:rounded-[1.6rem] sm:p-6",
                  lead
                    ? "bg-navy text-white shadow-[0_18px_40px_rgba(12,44,86,0.22)]"
                    : "border border-blue/15 bg-ice shadow-[0_14px_34px_rgba(37,99,235,0.08)]",
                )}
              >
                <p
                  className={cn(
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl font-serif text-base text-white",
                    lead ? "bg-blue" : "bg-navy",
                  )}
                >
                  0{index + 1}
                </p>
                <div className="min-w-0">
                  <h3 className={cn("font-serif text-xl sm:mt-4 lg:text-[1.35rem]", lead ? "text-white" : "text-navy")}>
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className={cn("mt-1.5 text-sm leading-6 sm:mt-2.5", lead ? "text-white/75" : "text-ink")}>
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
