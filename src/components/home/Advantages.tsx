import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const keys = ["capability", "practice", "integration", "partnership"] as const;

export async function Advantages() {
  const t = await getTranslations("advantages");

  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading label={t("label")} title={t("title")} />
        <div className="mt-7 grid gap-px overflow-hidden rounded-[1.35rem] border border-line bg-line sm:mt-14 sm:grid-cols-2 sm:rounded-[1.8rem]">
          {keys.map((key, index) => (
            <article key={key} className="bg-white p-5 sm:p-8 lg:p-10">
              <p className="text-xs tracking-[0.2em] text-blue uppercase">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-navy">{t(`items.${key}.title`)}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">{t(`items.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
