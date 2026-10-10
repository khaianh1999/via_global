import { getLocale, getTranslations } from "next-intl/server";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function FeaturedProjects() {
  const t = await getTranslations("projects");
  const locale = (await getLocale()) as Locale;
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-ice py-12 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:gap-8">
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ButtonLink href="/du-an" variant="secondary" className="w-full shrink-0 sm:w-auto">
            {t("cta")}
          </ButtonLink>
        </div>
        <div className="mt-7 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={{ pathname: "/du-an/[slug]", params: { slug: project.slug } }}
              className="group overflow-hidden rounded-[1.35rem] border border-line bg-white sm:rounded-[1.6rem]"
            >
              <ProjectCover accent={project.accent} className="h-36 sm:h-52" />
              <div className="p-4 sm:p-6">
                <p className="text-[11px] tracking-[0.16em] text-blue uppercase sm:text-xs">{project.field[locale]}</p>
                <h3 className="mt-2 font-serif text-xl text-navy group-hover:text-blue sm:mt-3 sm:text-2xl">
                  {project.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted sm:mt-3 sm:leading-7">{project.excerpt[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
