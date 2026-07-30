import Link from "next/link";
import { Logo } from "@/components/logo";
import { BUSINESS, HOURS_SUMMARY, NAV } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="sky-wash-dark grain relative overflow-hidden bg-ink text-bone">
      {/* Appointment band */}
      <div className="relative border-b border-bone/10">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow text-aqua">Appointment or walk-in</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.95]">
              We keep a chair
              <br />
              <span className="italic text-aqua">open for you.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/65">
              Walk in whenever you have a free hour, or call ahead and we will
              have your technician ready. Groups of four or more, please give us
              a day&apos;s notice.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={BUSINESS.phoneHref}
              className="group flex flex-1 items-center justify-between gap-6 bg-aqua px-6 py-6 text-ink transition-colors hover:bg-champagne sm:max-w-xs"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] opacity-60">
                  Call the salon
                </span>
                <span className="mt-1 block text-xl font-bold">
                  {BUSINESS.phone}
                </span>
              </span>
              <ArrowIcon className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-1 items-center justify-between gap-6 border border-bone/25 px-6 py-6 transition-colors hover:border-aqua hover:text-aqua sm:max-w-xs"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/50">
                  Get directions
                </span>
                <span className="mt-1 block text-xl font-bold">
                  White Horse Pike
                </span>
              </span>
              <ArrowIcon className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/60">
            A neighborhood nail salon on the White Horse Pike, caring for
            Magnolia, Somerdale, Barrington and Laurel Springs.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-bone/70">
            <Stars value={BUSINESS.rating} />
            <span>
              {BUSINESS.rating} · {BUSINESS.reviewCount} Yelp reviews
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-aqua">
            Visit us
          </h3>
          <div className="mt-6 space-y-4 text-sm text-bone/70">
            <p className="leading-relaxed">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
              {BUSINESS.address.zip}
            </p>
            <p className="text-xs text-bone/45">{BUSINESS.landmark}</p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-block font-semibold text-bone transition-colors hover:text-aqua"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-aqua">
            Hours
          </h3>
          <dl className="mt-6 space-y-3 text-sm">
            {HOURS_SUMMARY.map((h) => (
              <div key={h.label} className="flex items-baseline gap-3">
                <dt className="w-20 shrink-0 font-semibold text-bone/85">
                  {h.label}
                </dt>
                <dd className="text-bone/60">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-aqua">
            Explore
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-bone/60 transition-colors hover:text-aqua"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={BUSINESS.yelpUrl}
                target="_blank"
                rel="noreferrer"
                className="text-bone/60 transition-colors hover:text-aqua"
              >
                Yelp
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-bone/60 transition-colors hover:text-aqua"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Nail salon in Magnolia, NJ 08049</p>
        </div>
      </div>
    </footer>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5"
          fill={i <= Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10 2.2l2.2 4.9 5.3.5-4 3.6 1.2 5.2L10 13.7l-4.7 2.7 1.2-5.2-4-3.6 5.3-.5L10 2.2z" />
        </svg>
      ))}
    </span>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
