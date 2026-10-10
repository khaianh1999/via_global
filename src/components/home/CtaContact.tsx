import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export async function CtaContact() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-navy">
      <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:gap-8 sm:py-16 lg:flex-row lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[1.7rem] leading-[1.18] text-white text-balance sm:text-4xl sm:leading-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">{t("body")}</p>
        </div>
        <ButtonLink href="/lien-he" variant="light">
          {t("button")}
        </ButtonLink>
      </Container>
    </section>
  );
}
