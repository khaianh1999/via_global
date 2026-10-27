import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSectionFrame } from "@/components/home/homeSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { publicPath } from "@/lib/site";
import type { Locale } from "@/i18n/routing";

export async function FeaturedProjects() {
  const t = await getTranslations("projects");
  const locale = (await getLocale()) as Locale;
  const featured = projects.slice(0, 3);

  return (
    <section id="du-an" className={cn(homeSectionFrame, "bg-ice py-10 sm:py-14 lg:py-10")}>
      <Container>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end lg:gap-8">
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ButtonLink href="/du-an" variant="secondary" className="w-full shrink-0 sm:w-auto">
            {t("cta")}
          </ButtonLink>
        </div>
        <div className="mt-6 grid gap-3 sm:mt-8 lg:grid-cols-3 lg:gap-6">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={{ pathname: "/du-an/[slug]", params: { slug: project.slug } }}
              className="group flex flex-col overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-[0_10px_30px_rgba(18,59,114,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,59,114,0.1)] sm:rounded-[1.6rem]"
            >
              <Image
                src={publicPath(project.cover)}
                alt={project.title[locale]}
                width={1280}
                height={720}
                sizes="(min-width: 1024px) 360px, 100vw"
                className="h-40 w-full object-cover object-center sm:h-48 lg:h-44"
              />
              <div className="p-3.5 sm:p-6">
                <p className="text-[11px] tracking-[0.16em] text-blue uppercase sm:text-xs">{project.field[locale]}</p>
                <h3 className="mt-1.5 font-serif text-lg leading-snug text-navy group-hover:text-blue sm:mt-3 sm:text-2xl">
                  {project.title[locale]}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted sm:mt-3">{project.excerpt[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
