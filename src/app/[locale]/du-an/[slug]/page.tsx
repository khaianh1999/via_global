import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { Container } from "@/components/ui/Container";
import { getProject, projects } from "@/content/projects";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getProject(slug);
  if (!item) return {};

  return buildPageMetadata({
    locale: locale as Locale,
    title: item.title[locale as Locale],
    description: item.excerpt[locale as Locale],
    href: { pathname: "/du-an/[slug]", params: { slug } },
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getProject(slug);
  if (!item) notFound();

  const currentLocale = locale as Locale;
  const t = await getTranslations("common");

  return (
    <>
      <PageHero
        label={item.field[currentLocale]}
        title={item.title[currentLocale]}
        lead={item.excerpt[currentLocale]}
      />
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <ProjectCover accent={item.accent} className="h-72 rounded-[1.6rem]" />
            <p className="mt-8 text-base leading-8 text-muted">{item.body[currentLocale]}</p>
          </div>
          <aside className="h-fit rounded-[1.6rem] border border-line p-7">
            <p className="text-xs tracking-[0.16em] text-blue uppercase">{t("role")}</p>
            <p className="mt-2 text-sm text-navy">{item.role[currentLocale]}</p>
            <p className="mt-6 text-xs tracking-[0.16em] text-blue uppercase">{t("field")}</p>
            <p className="mt-2 text-sm text-navy">{item.field[currentLocale]}</p>
            <p className="mt-6 text-sm leading-7 text-muted">{item.note[currentLocale]}</p>
          </aside>
        </Container>
      </section>
      <CtaContact />
    </>
  );
}
