import Image from "next/image";
import { CtaContact } from "@/components/home/CtaContact";
import { CoverStack, DarkPageHero } from "@/components/pages/DarkPageHero";
import { Container } from "@/components/ui/Container";
import { projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema, JsonLd, webPageSchema } from "@/lib/structured-data";
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
    title: t("projectsTitle"),
    description: t("projectsDescription"),
    href: "/du-an",
  });
}

function ArrowLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue">
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Locale;
  const t = await getTranslations("projectsPage");
  const [featured, ...others] = projects;
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ locale: locale as Locale, href: "/du-an", name: t("title"), description: t("lead"), type: "CollectionPage" }),
          itemListSchema(locale as Locale, projects.map((item) => ({ name: item.title[locale as Locale], href: { pathname: "/du-an/[slug]", params: { slug: item.slug } } }))),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("projects"), href: "/du-an" }]),
        ]}
      />
      <DarkPageHero label={t("label")} title={t("title")} lead={t("lead")}>
        <CoverStack covers={projects.map((project) => project.cover)} />
      </DarkPageHero>

      {/* Featured project */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("featured")}</p>
          <Link
            href={{ pathname: "/du-an/[slug]", params: { slug: featured.slug } }}
            className="group mt-6 grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <div className="overflow-hidden rounded-[1.6rem] shadow-[0_24px_60px_rgba(12,44,86,0.18)] lg:col-span-7">
              <Image
                src={publicPath(featured.cover)}
                alt={featured.title[lang]}
                width={1280}
                height={720}
                priority
                sizes="(min-width: 1024px) 670px, 100vw"
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue font-serif text-base text-white">
                01
              </span>
              <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-blue uppercase">{featured.field[lang]}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-navy transition-colors group-hover:text-blue sm:text-4xl">
                {featured.title[lang]}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{featured.excerpt[lang]}</p>
              <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
                <span className="font-semibold text-navy">{t("role")}:</span> {featured.role[lang]}
              </p>
              <div className="mt-6">
                <ArrowLink>{t("view")}</ArrowLink>
              </div>
            </div>
          </Link>
          <p className="mt-12 flex max-w-3xl gap-3 text-sm leading-6 text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
            {t("disclaimer")}
          </p>
        </Container>
      </section>

      {/* Other projects */}
      <section className="border-t border-line bg-ice py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">{t("others")}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project, index) => (
              <Link
                key={project.slug}
                href={{ pathname: "/du-an/[slug]", params: { slug: project.slug } }}
                className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-[0_16px_40px_rgba(18,59,114,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(37,99,235,0.18)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={publicPath(project.cover)}
                    alt={project.title[lang]}
                    width={1280}
                    height={720}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-navy-deep/75 px-3 py-1 font-serif text-sm text-white backdrop-blur">
                    0{index + 2}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{project.field[lang]}</p>
                  <h2 className="mt-3 font-serif text-2xl leading-snug text-navy transition-colors group-hover:text-blue">
                    {project.title[lang]}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.excerpt[lang]}</p>
                  <p className="mt-5 border-t border-line pt-4 text-sm text-muted">
                    <span className="font-semibold text-navy">{t("role")}:</span> {project.role[lang]}
                  </p>
                  <div className="mt-4">
                    <ArrowLink>{t("view")}</ArrowLink>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaContact />
    </>
  );
}
