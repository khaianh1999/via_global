import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/brand/Logo";
import { primaryNav } from "@/components/layout/nav";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const year = 2026;

  return (
    <footer className="snap-end border-t border-line bg-ice">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">{t("tagline")}</p>
          <p className="mt-4 max-w-md text-xs leading-6 text-muted/80">{t("placeholderNote")}</p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">{t("explore")}</p>
          <ul className="mt-5 space-y-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-navy">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">{t("contact")}</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-navy">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.address.vi}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <p>VI / EN</p>
        </div>
      </div>
    </footer>
  );
}
