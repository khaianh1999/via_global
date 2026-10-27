import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { homeSectionFrame } from "@/components/home/homeSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { publicPath } from "@/lib/site";

export async function AboutPreview() {
  const t = await getTranslations("aboutPreview");
  const locale = await getLocale();

  return (
    <section id="gioi-thieu" className={cn(homeSectionFrame, "bg-white py-10 sm:py-14 lg:py-12")}>
      <Container className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <SectionHeading label={t("label")} title={t("title")} body={t("body")} />
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            {[t("point1"), t("point2")].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-ink/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7">
            <div className="rounded-2xl border border-line bg-ice p-3 sm:p-4">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-blue uppercase">
                {locale === "vi" ? "Tập trung" : "Focus"}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-ink">
                {locale === "vi"
                  ? "Công nghệ, hạ tầng và truyền thông số."
                  : "Technology, infrastructure and digital communication."}
              </p>
            </div>
            <div className="rounded-2xl bg-blue p-3 text-white sm:p-4">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-white/80 uppercase">
                {locale === "vi" ? "Cách làm" : "Method"}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-white/90">
                {locale === "vi"
                  ? "Rõ bài toán. Rõ phạm vi. Rõ bàn giao."
                  : "Clear problem. Clear scope. Clear handover."}
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-8">
            <ButtonLink href="/gioi-thieu" variant="ghost">
              {t("cta")} →
            </ButtonLink>
          </div>
        </div>

        <div className="relative pb-16 sm:pb-20">
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-blue/10 blur-2xl" />
          <Image
            src={publicPath("/home/about.svg")}
            alt=""
            width={800}
            height={600}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="relative w-full rounded-[1.6rem] shadow-[0_28px_70px_rgba(12,44,86,0.3)] ring-1 ring-navy/10 sm:rounded-[2rem]"
          />
          <div className="absolute right-4 bottom-0 left-4 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(12,44,86,0.22)] sm:right-auto sm:left-8 sm:max-w-sm sm:p-5">
            <span className="mb-2.5 block h-1.5 w-12 rounded-full bg-blue" />
            <p className="font-serif text-lg leading-snug text-navy sm:text-xl">
              {locale === "vi"
                ? "Một môi trường làm việc lấy sự chính xác và trách nhiệm làm chuẩn mực."
                : "A working environment that treats precision and responsibility as the standard."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
