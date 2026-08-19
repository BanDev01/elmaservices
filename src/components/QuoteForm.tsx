"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitQuoteForm } from "@/app/actions/devis";
import { initialFormState } from "@/app/actions/types";
import { services } from "@/content/services";

const inputClass =
  "w-full rounded-xl border border-ink-900/15 bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

export function QuoteForm() {
  const t = useTranslations("quote.form");
  const tServices = useTranslations("services.list");
  const [state, formAction, pending] = useActionState(
    submitQuoteForm,
    initialFormState
  );

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-900">
            {t("name")}
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-semibold text-ink-900"
          >
            {t("company")}
          </label>
          <input id="company" name="company" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
            {t("email")}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-900">
            {t("phone")}
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="serviceType"
            className="mb-1.5 block text-sm font-semibold text-ink-900"
          >
            {t("serviceType")}
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              {t("serviceTypePlaceholder")}
            </option>
            {services.map((service) => (
              <option key={service.id} value={tServices(`${service.id}.title`)}>
                {tServices(`${service.id}.title`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="mb-1.5 block text-sm font-semibold text-ink-900"
          >
            {t("budget")}
          </label>
          <input id="budget" name="budget" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-900">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? t("submitting") : t("submit")}
      </button>

      {state.status === "success" && (
        <p className="rounded-xl bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-700">
          {t("success")}
        </p>
      )}
      {state.status === "error" && (
        <p className="rounded-xl bg-highlight-500/10 px-4 py-3 text-sm font-semibold text-highlight-600">
          {t("error")}
        </p>
      )}
    </form>
  );
}
