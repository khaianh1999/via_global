import { getLocale, getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export async function AboutPreview() {
  const t = await getTranslations("aboutPreview");
  const locale = await getLocale();

  return (
    <section id="gioi-thieu" className={cn(homeSectionFrame, "bg-white py-10 sm:py-14 lg:py-16")}>
      <Container className="grid items-center gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-4">
            {[t("point1"), t("point2")].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-ink/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-10">
            <ButtonLink href="/gioi-thieu" variant="ghost">
              {t("cta")} →
            </ButtonLink>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] bg-navy p-4 text-white shadow-[0_24px_60px_rgba(12,44,86,0.28)] sm:rounded-[2rem] sm:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue/50" />
          <div className="relative">
            <span className="mb-2 block h-1.5 w-14 rounded-full bg-blue-bright sm:mb-4" />
            <p className="font-serif text-xl leading-snug text-white sm:text-3xl">
              {locale === "vi"
                ? "Một môi trường làm việc lấy sự chính xác và trách nhiệm làm chuẩn mực."
                : "A working environment that treats precision and responsibility as the standard."}
            </p>
            <div className="mt-4 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-2xl bg-white p-3 text-navy shadow-sm sm:p-5">
                <p className="text-xs tracking-[0.16em] text-blue uppercase">
                  {locale === "vi" ? "Tập trung" : "Focus"}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink">
                  {locale === "vi"
                    ? "Công nghệ, hạ tầng và truyền thông số."
                    : "Technology, infrastructure and digital communication."}
                </p>
              </div>
              <div className="rounded-2xl bg-blue p-3 text-white shadow-sm sm:p-5">
                <p className="text-xs tracking-[0.16em] text-white/80 uppercase">
                  {locale === "vi" ? "Cách làm" : "Method"}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {locale === "vi"
                    ? "Rõ bài toán. Rõ phạm vi. Rõ bàn giao."
                    : "Clear problem. Clear scope. Clear handover."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
