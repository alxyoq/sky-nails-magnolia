"use client";

import { type FormEvent, useState } from "react";
import { BUSINESS, SERVICES } from "@/lib/site";

const inputClass =
  "w-full border border-ink/15 bg-bone/50 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-teal focus:bg-white";

const labelClass =
  "mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center border border-teal/25 bg-teal/[0.06] p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <title>Sent</title>
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-3xl text-ink">Request received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
          Thank you. We will call you back to confirm a time. If you need
          something sooner, ring the shop at{" "}
          <a
            href={BUSINESS.phoneHref}
            className="font-semibold text-teal underline-offset-4 hover:underline"
          >
            {BUSINESS.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink/12 bg-white p-8 lg:p-10"
    >
      <p className="eyebrow text-teal">Request a time</p>
      <h3 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-tight text-ink">
        Tell us what you need
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/55">
        We confirm every request by phone. For same-day service, calling is
        always the fastest route.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(856) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="service">
            Service
          </label>
          <select id="service" name="service" className={inputClass}>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="when">
            Preferred day &amp; time
          </label>
          <input
            id="when"
            name="when"
            placeholder="Saturday morning"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="notes">
            Anything else
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Shape, length, inspiration photos, how many people…"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-sm font-semibold tracking-[0.06em] text-bone transition-colors hover:bg-teal sm:w-auto"
      >
        Send request
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
      <p className="mt-4 text-xs text-ink/40">
        This form is not a confirmed booking. We will reach out to lock in your
        time.
      </p>
    </form>
  );
}
