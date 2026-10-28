import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/structured-data";
import { publicPath } from "@/lib/site";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    href: "/gioi-thieu",
  });
}

// Placeholder illustrations in public/about/; swap each file for a real photo.
const photos = {
  team: "/about/team.svg",
  workshop: "/about/activity-workshop.svg",
  event: "/about/activity-event.svg",
  outing: "/about/activity-outing.svg",
};

function Photo({ src, caption, className }: { src: string; caption: string; className?: string }) {
  return (
    <figure className={className}>
      <Image
        src={publicPath(src)}
        alt={caption}
        width={1200}
        height={800}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[3/2] w-full rounded-2xl object-cover"
      />
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

const serviceGroups = ["technology", "media"] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ locale: locale as Locale, href: "/gioi-thieu", name: nav("about"), description: t("lead"), type: "AboutPage" }),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("about"), href: "/gioi-thieu" }]),
        ]}
      />
      <article className="bg-white pb-24 sm:pb-32">
        <header className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 sm:pt-24">
          <p className="text-xs font-bold tracking-[0.22em] text-blue uppercase">{t("label")}</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.12] tracking-tight text-navy text-balance sm:text-[3.2rem]">
            {t("title")}
          </h1>
          <p className="mt-7 text-lg leading-8 text-muted sm:text-xl sm:leading-9">{t("lead")}</p>
        </header>

        <Container className="mt-12 sm:mt-16">
          <figure>
            <Image
              src={publicPath(photos.team)}
              alt={t("teamAlt")}
              width={1600}
              height={800}
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="aspect-[3/2] w-full rounded-2xl object-cover sm:aspect-[2/1] sm:rounded-3xl"
            />
            <figcaption className="mt-4 text-center text-sm text-muted">{t("teamCaption")}</figcaption>
          </figure>
        </Container>

        <div className="mx-auto mt-14 max-w-3xl px-5 text-[17px] leading-8 text-ink/80 sm:mt-20 sm:px-8 sm:text-lg sm:leading-9">
          <h2 className="font-serif text-3xl text-navy sm:text-[2.1rem]">{t("teamHeading")}</h2>
          <p className="mt-5">{t("team")}</p>

          <h2 className="mt-14 font-serif text-3xl text-navy sm:text-[2.1rem]">{t("servicesHeading")}</h2>
          <p className="mt-5">{t("services")}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {serviceGroups.map((group) => (
              <section key={group} className="rounded-2xl border border-line bg-ice/60 p-6">
                <h3 className="text-xs font-bold tracking-[0.18em] text-blue uppercase">{t(`serviceGroups.${group}.title`)}</h3>
                <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-ink">
                  {t.raw(`serviceGroups.${group}.items`).map((service: string) => (
                    <li key={service} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {service}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <Link
            href="/giai-phap"
            className="group mt-4 inline-flex items-center gap-2 font-semibold text-blue underline decoration-blue/30 underline-offset-[6px] transition-colors hover:decoration-blue"
          >
            {t("servicesLink")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <h2 className="mt-14 font-serif text-3xl text-navy sm:text-[2.1rem]">{t("activitiesHeading")}</h2>
          <p className="mt-5">{t("activities")}</p>
        </div>

        <Container className="mt-10 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <Photo src={photos.workshop} caption={t("photoWorkshop")} />
            <Photo src={photos.event} caption={t("photoEvent")} />
          </div>
          <Photo src={photos.outing} caption={t("photoOuting")} className="mt-6 sm:[&_img]:aspect-[2/1]" />
        </Container>

        <div className="mx-auto mt-14 max-w-3xl px-5 text-[17px] leading-8 text-ink/80 sm:px-8 sm:text-lg sm:leading-9">
          <p className="border-l-[3px] border-blue pl-5 font-serif text-xl leading-snug text-navy sm:pl-6 sm:text-[1.7rem]">
            {t("belief")}
          </p>
          <p className="mt-10">{t("closing")}</p>
          <Link
            href="/lien-he"
            className="group mt-4 inline-flex items-center gap-2 font-semibold text-blue underline decoration-blue/30 underline-offset-[6px] transition-colors hover:decoration-blue"
          >
            {t("contactLink")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </article>
    </>
  );
}
