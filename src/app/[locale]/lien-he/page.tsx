import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return buildPageMetadata({
    locale: locale as Locale,
    title: t("contactTitle"),
    description: t("contactDescription"),
    href: "/lien-he",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

  return (
    <>
      <PageHero label={t("label")} title={t("title")} lead={t("lead")} />
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <aside className="h-fit rounded-[1.6rem] bg-ice p-8">
            <h2 className="font-serif text-2xl text-navy">{t("asideTitle")}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{t("asideBody")}</p>
            <ul className="mt-6 space-y-3 text-sm text-navy">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-blue">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.phone}</li>
              <li>{locale === "vi" ? siteConfig.address.vi : siteConfig.address.en}</li>
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
