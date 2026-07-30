import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumb,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumb: string;
}) {
  return (
    <section className="sky-wash grain relative overflow-hidden border-b border-ink/10">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
      >
        <title>decorative contour</title>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M-50 ${70 + i * 74} C 250 ${10 + i * 74}, 470 ${180 + i * 74}, 720 ${96 + i * 74} S 1140 ${24 + i * 74}, 1260 ${124 + i * 74}`}
            fill="none"
            stroke="hsl(var(--ink))"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="container-x relative py-16 lg:py-24">
        <nav className="animate-fade flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink/40">
          <Link href="/" className="transition-colors hover:text-teal">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink/70">{crumb}</span>
        </nav>

        <p
          className="animate-rise mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-teal"
          style={{ animationDelay: "60ms" }}
        >
          {eyebrow}
        </p>
        <h1
          className="animate-rise mt-5 max-w-4xl font-display text-[clamp(2.7rem,7.5vw,5.2rem)] leading-[0.92] tracking-[-0.02em] text-ink"
          style={{ animationDelay: "140ms" }}
        >
          {title}
        </h1>
        {lead ? (
          <p
            className="animate-rise mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/60"
            style={{ animationDelay: "230ms" }}
          >
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
