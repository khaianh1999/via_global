import { getLocale, getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function AboutPreview() {
  const t = await getTranslations("aboutPreview");
  const locale = await getLocale();

  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28">
      <Container className="grid items-center gap-7 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
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

        <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-ice p-5 sm:rounded-[2rem] sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mist" />
          <div className="relative">
            <p className="font-serif text-[1.45rem] leading-snug text-navy sm:text-3xl">
              {locale === "vi"
                ? "Một môi trường làm việc lấy sự chính xác và trách nhiệm làm chuẩn mực."
                : "A working environment that treats precision and responsibility as the standard."}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs tracking-[0.16em] text-blue uppercase">
                  {locale === "vi" ? "Tập trung" : "Focus"}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {locale === "vi"
                    ? "Công nghệ, hạ tầng và truyền thông số."
                    : "Technology, infrastructure and digital communication."}
                </p>
              </div>
              <div className="rounded-2xl bg-navy p-4 text-white shadow-sm sm:p-5">
                <p className="text-xs tracking-[0.16em] text-white/60 uppercase">
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
