"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const t = useTranslations("contactPage");
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-[1.6rem] border border-line bg-ice p-8">
        <h2 className="font-serif text-3xl text-navy">{t("successTitle")}</h2>
        <p className="mt-4 text-base leading-8 text-muted">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("name")} name="name" required />
        <Field label={t("company")} name="company" />
        <Field label={t("email")} name="email" type="email" required />
        <Field label={t("phone")} name="phone" />
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-navy">{t("topic")}</span>
        <select
          name="topic"
          className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue"
          defaultValue="software"
        >
          <option value="software">{t("topicOptions.software")}</option>
          <option value="cloud">{t("topicOptions.cloud")}</option>
          <option value="media">{t("topicOptions.media")}</option>
          <option value="other">{t("topicOptions.other")}</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-navy">{t("message")}</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue"
        />
      </label>
      {state.status === "error" ? (
        <p className="text-sm text-red-700">{t("error")}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep disabled:opacity-70"
      >
        {pending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue"
      />
    </label>
  );
}
