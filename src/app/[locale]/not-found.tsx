import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("common");

  return (
    <section className="bg-ice py-24">
      <Container className="max-w-2xl">
        <p className="text-xs tracking-[0.2em] text-blue uppercase">404</p>
        <h1 className="mt-4 font-serif text-4xl text-navy">{t("notFoundTitle")}</h1>
        <p className="mt-5 text-base leading-8 text-muted">{t("notFoundBody")}</p>
        <div className="mt-8">
          <ButtonLink href="/">{t("backHome")}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
