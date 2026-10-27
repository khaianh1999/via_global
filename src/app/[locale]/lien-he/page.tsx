import { ContactForm } from "@/components/contact/ContactForm";
import { DarkPageHero } from "@/components/pages/DarkPageHero";
import { Container } from "@/components/ui/Container";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/structured-data";
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

const icons = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
  ),
  zalo: (
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5Z" />
  ),
  address: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const footer = await getTranslations("footer");

  const channels = [
    { key: "email" as const, label: footer("email"), value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { key: "phone" as const, label: footer("phone"), value: siteConfig.phone, href: `tel:${siteConfig.phoneE164}` },
    ...(siteConfig.zalo.href
      ? [{ key: "zalo" as const, label: "Zalo", value: siteConfig.zalo.phone, href: siteConfig.zalo.href }]
      : []),
    { key: "address" as const, label: footer("address"), value: siteConfig.address[locale as Locale], href: undefined },
  ];
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ locale: locale as Locale, href: "/lien-he", name: t("title"), description: t("lead"), type: "ContactPage" }),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("contact"), href: "/lien-he" }]),
        ]}
      />
      <DarkPageHero label={t("label")} title={t("title")} lead={t("lead")}>
        <aside className="rounded-[1.6rem] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9">
          <h2 className="font-serif text-2xl">{t("asideTitle")}</h2>
          <p className="mt-3 text-[15px] leading-7 text-white/65">{t("asideBody")}</p>
          <ul className="mt-8 space-y-5">
            {channels.map((channel) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-sky-300 ring-1 ring-white/10 transition-colors group-hover:bg-sky-400 group-hover:text-navy-deep">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      {icons[channel.key]}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-[0.14em] text-white/45 uppercase">{channel.label}</span>
                    <span className="mt-1 block text-lg break-words text-white">{channel.value}</span>
                  </span>
                </>
              );

              return (
                <li key={channel.key}>
                  {channel.href ? (
                    <a href={channel.href} className="group flex items-center gap-4">
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>
      </DarkPageHero>

      <section className="bg-ice py-14 sm:py-20">
        <Container className="max-w-4xl">
          <div className="rounded-[1.6rem] border border-line bg-white p-6 shadow-[0_24px_60px_rgba(18,59,114,0.08)] sm:p-10">
            <h2 className="font-serif text-3xl text-navy">{t("formTitle")}</h2>
            <p className="mt-3 mb-8 text-[15px] leading-7 text-muted">{t("formLead")}</p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
