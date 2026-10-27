import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaContact } from "@/components/home/CtaContact";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { getProject, projects } from "@/content/projects";
import { routing, type Locale } from "@/i18n/routing";
import { buildPageMetadata, socialImage } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, projectSchema } from "@/lib/structured-data";
import { publicPath } from "@/lib/site";
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
    image: socialImage(item.cover),
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
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          projectSchema({
            locale: locale as Locale,
            href: { pathname: "/du-an/[slug]", params: { slug: item.slug } },
            name: item.title[locale as Locale],
            description: item.excerpt[locale as Locale],
            image: item.cover,
            about: item.field[locale as Locale],
          }),
          breadcrumbSchema(locale as Locale, [{ name: nav("home"), href: "/" }, { name: nav("projects"), href: "/du-an" }, { name: item.title[locale as Locale], href: { pathname: "/du-an/[slug]", params: { slug: item.slug } } }]),
        ]}
      />
      <PageHero
        label={item.field[currentLocale]}
        title={item.title[currentLocale]}
        lead={item.excerpt[currentLocale]}
      />
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Image
              src={publicPath(item.cover)}
              alt={item.title[currentLocale]}
              width={1280}
              height={720}
              priority
              sizes="(min-width: 1024px) 680px, 100vw"
              className="aspect-[16/9] w-full rounded-[1.6rem] object-cover"
            />
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
