"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESS, IMAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const SLIDES = [
  { src: IMAGES.hero, alt: "Freshly finished almond gel manicure" },
  { src: IMAGES.heroAlt, alt: "Hands resting after a gel manicure" },
  { src: IMAGES.pedicure, alt: "Pedicure with soft neutral polish" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="sky-wash grain relative overflow-hidden">
      {/* faint contour lines for atmosphere */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 700"
      >
        <title>decorative contour</title>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path
            key={i}
            d={`M-50 ${120 + i * 78} C 220 ${40 + i * 78}, 430 ${230 + i * 78}, 700 ${140 + i * 78} S 1150 ${60 + i * 78}, 1260 ${170 + i * 78}`}
            fill="none"
            stroke="hsl(var(--ink))"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="container-x relative grid items-center gap-12 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-20">
        {/* ---------------------------------------------------- copy */}
        <div className="relative z-10">
          <p
            className="animate-rise text-[11px] font-semibold uppercase tracking-[0.32em] text-teal"
            style={{ animationDelay: "80ms" }}
          >
            Magnolia · New Jersey
          </p>

          <h1
            className="animate-rise mt-6 font-display text-[clamp(3.1rem,9.5vw,6.4rem)] leading-[0.88] tracking-[-0.02em] text-ink"
            style={{ animationDelay: "180ms" }}
          >
            Fresh nails.
            <br />
            <span className="relative inline-block italic text-teal">
              Clear skies.
              <svg
                viewBox="0 0 320 20"
                className="absolute -bottom-2 left-0 w-full text-champagne"
                aria-hidden="true"
              >
                <title>underline</title>
                <path
                  d="M4 13C70 5 158 4 316 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="animate-rise mt-9 max-w-lg text-[15px] leading-relaxed text-ink/65"
            style={{ animationDelay: "300ms" }}
          >
            {BUSINESS.name} is the neighborhood salon on the White Horse Pike —
            manicures, spa pedicures, gel, acrylic and dip powder, plus the brow
            waxing our regulars keep coming back for. Walk in when you have an
            hour, or call ahead and we&apos;ll hold a seat.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={BUSINESS.phoneHref}
              className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-sm font-semibold tracking-[0.06em] text-bone transition-colors hover:bg-teal"
            >
              Call {BUSINESS.phone}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 border border-ink/20 px-8 py-4 text-sm font-semibold tracking-[0.06em] text-ink transition-colors hover:border-teal hover:text-teal"
            >
              See the price list
            </Link>
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/12 pt-7"
            style={{ animationDelay: "500ms" }}
          >
            {[
              { k: `${BUSINESS.rating} ★`, v: `${BUSINESS.reviewCount} Yelp reviews` },
              { k: "7 days", v: "Open every week" },
              { k: "Walk-ins", v: "Always welcome" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl text-ink">{s.k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* --------------------------------------------------- visual */}
        <div
          className="animate-fade relative mx-auto w-full max-w-[520px] lg:max-w-none"
          style={{ animationDelay: "260ms" }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5 shadow-lift">
            {SLIDES.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1400 ease-out",
                  i === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                )}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

            {/* slide dots */}
            <div className="absolute bottom-5 left-5 flex gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === index ? "w-9 bg-bone" : "w-4 bg-bone/45",
                  )}
                />
              ))}
            </div>
          </div>

          {/* floating hours badge */}
          <div className="animate-drift absolute -left-4 top-8 hidden bg-bone px-5 py-4 shadow-card sm:block lg:-left-10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-teal">
              Open today
            </p>
            <p className="mt-1 font-display text-xl text-ink">9:30 – 7:30</p>
          </div>

          {/* floating address chip */}
          <div className="absolute -bottom-6 right-0 max-w-[240px] bg-ink px-6 py-5 text-bone shadow-lift lg:-right-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-aqua">
              Find us
            </p>
            <p className="mt-2 text-[13px] leading-snug">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
              {BUSINESS.address.zip}
            </p>
          </div>
        </div>
      </div>

      {/* keyword marquee */}
      <div className="relative border-y border-ink/10 bg-ink/[0.03] py-4">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static duplicate for seamless loop
              key={dup}
              className="flex items-center gap-10"
              aria-hidden={dup === 1}
            >
              {[
                "Gel Manicure",
                "Spa Pedicure",
                "Dip Powder",
                "Acrylic Full Set",
                "Builder Gel",
                "Gel-X",
                "Brow Waxing",
                "Lash Lift",
                "Kids Welcome",
              ].map((word) => (
                <span
                  key={`${dup}-${word}`}
                  className="flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.26em] text-ink/45"
                >
                  {word}
                  <span className="text-champagne">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
