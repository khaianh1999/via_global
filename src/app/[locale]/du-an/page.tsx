import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { Container } from "@/components/ui/Container";
import { projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const currentLocale = locale as Locale;
  const t = await getTranslations("projectsPage");

  return (
    <>
      <PageHero label={t("label")} title={t("title")} lead={t("lead")} />
      <section className="bg-white py-20">
        <Container>
          <p className="mb-10 max-w-3xl text-sm leading-7 text-muted">{t("disclaimer")}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={{ pathname: "/du-an/[slug]", params: { slug: project.slug } }}
                className="group overflow-hidden rounded-[1.6rem] border border-line"
              >
                <ProjectCover accent={project.accent} className="h-52" />
                <div className="p-7">
                  <p className="text-xs tracking-[0.16em] text-blue uppercase">
                    {project.field[currentLocale]}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-navy group-hover:text-blue">
                    {project.title[currentLocale]}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.excerpt[currentLocale]}</p>
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
