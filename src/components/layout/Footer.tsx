import { getLocale, getTranslations } from "next-intl/server";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { primaryNav } from "@/components/layout/nav";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const contactIcons = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
  ),
  address: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
};

function ContactIcon({ name }: { name: keyof typeof contactIcons }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-sky-300 ring-1 ring-white/10">
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
        {contactIcons[name]}
      </svg>
    </span>
  );
}

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const year = 2026;

  const contacts = [
    { key: "email" as const, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { key: "phone" as const, value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { key: "address" as const, value: siteConfig.address[locale], href: undefined },
  ];

  return (
    <footer className="relative snap-end overflow-hidden border-t border-white/10 bg-[#051730] text-white">
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-3">
          <Logo onLight={false} />
          <p className="mt-6 max-w-sm font-serif text-xl leading-snug text-white/90">{t("tagline")}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">{t("placeholderNote")}</p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[13px] font-bold tracking-[0.18em] text-sky-300 uppercase">{t("explore")}</p>
          <ul className="mt-5 space-y-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] text-white/75 transition-colors hover:text-white">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[13px] font-bold tracking-[0.18em] text-sky-300 uppercase">{t("services")}</p>
          <ul className="mt-5 space-y-3">
            {solutions.map((item) => (
              <li key={item.slug}>
                <Link
                  href={{ pathname: "/giai-phap/[slug]", params: { slug: item.slug } }}
                  className="group flex items-start gap-2.5 text-[15px] leading-6 text-white/75 transition-colors hover:text-white"
                >
                  <ServiceIcon name={item.icon} className="mt-0.5 h-5 w-5 shrink-0 text-white/35 transition-colors group-hover:text-sky-300" />
                  {item.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <p className="text-[13px] font-bold tracking-[0.18em] text-sky-300 uppercase">{t("contact")}</p>
          <ul className="mt-5 space-y-4">
            {contacts.map((contact) => (
              <li key={contact.key} className="flex items-center gap-3">
                <ContactIcon name={contact.key} />
                <div className="min-w-0">
                  <p className="text-xs text-white/45">{t(contact.key)}</p>
                  {contact.href ? (
                    <a href={contact.href} className="text-[15px] break-words text-white/90 hover:text-sky-300">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-[15px] text-white/90">{contact.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/lien-he"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-sky-100"
          >
            {nav("partnerCta")} →
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher onLight={false} />
            <a href="#main" className="inline-flex items-center gap-1.5 font-semibold text-white/75 hover:text-white">
              {t("backToTop")} ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
