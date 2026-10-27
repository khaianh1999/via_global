"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type ContactStatus = "idle" | "success" | "error";

const topics = ["software", "ai", "media", "cloud", "other"] as const;

const inputClass =
  "w-full rounded-xl border border-line bg-ice/40 px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-muted/60 focus:border-blue focus:bg-white focus:ring-4 focus:ring-blue/10";

export function ContactForm() {
  const t = useTranslations("contactPage");
  const [status, setStatus] = useState<ContactStatus>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start py-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-6 font-serif text-3xl text-navy">{t("successTitle")}</h2>
        <p className="mt-4 max-w-lg text-base leading-8 text-muted">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-navy">{t("topic")}</legend>
        <div className="flex flex-wrap gap-2.5">
          {topics.map((topic) => (
            <label
              key={topic}
              className="cursor-pointer rounded-full border border-line bg-white px-4 py-2 text-sm text-ink/80 transition hover:border-blue/50 has-checked:border-navy has-checked:bg-navy has-checked:text-white has-focus-visible:ring-4 has-focus-visible:ring-blue/20"
            >
              <input type="radio" name="topic" value={topic} defaultChecked={topic === "software"} className="sr-only" />
              {t(`topicOptions.${topic}`)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("name")} name="name" required autoComplete="name" />
        <Field label={t("company")} name="company" optional={t("optional")} autoComplete="organization" />
        <Field label={t("email")} name="email" type="email" required autoComplete="email" />
        <Field label={t("phone")} name="phone" type="tel" optional={t("optional")} autoComplete="tel" />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-navy">{t("message")}</span>
        <textarea name="message" required rows={6} placeholder={t("messagePlaceholder")} className={`${inputClass} resize-y`} />
      </label>

      {status === "error" ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{t("error")}</p>
      ) : null}

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-blue sm:w-fit"
      >
        {t("submit")}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-muted">{optional}</span> : null}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={inputClass} />
    </label>
  );
}
