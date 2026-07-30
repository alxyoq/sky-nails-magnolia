"use client";

import Link from "next/link";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { SERVICES } from "@/lib/site";

export function ServicesPreview() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="sky-wash-dark grain relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="The menu"
            title={
              <>
                Everything we do,
                <br />
                <span className="italic text-aqua">priced up front</span>
              </>
            }
            className="max-w-xl"
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous services"
              className="flex h-12 w-12 items-center justify-center border border-bone/25 text-bone transition-colors hover:border-aqua hover:text-aqua"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next services"
              className="flex h-12 w-12 items-center justify-center border border-bone/25 text-bone transition-colors hover:border-aqua hover:text-aqua"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <Reveal delay={120}>
        <div
          ref={railRef}
          className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8 lg:px-[max(2.5rem,calc((100vw-1220px)/2+2.5rem))]"
        >
          {SERVICES.map((cat) => {
            const count =
              cat.items.length +
              (cat.groups?.reduce((n, g) => n + g.items.length, 0) ?? 0);
            const from =
              cat.items[0]?.price ?? cat.groups?.[0]?.items[0]?.price ?? "";
            return (
              <Link
                key={cat.id}
                href={`/services#${cat.id}`}
                className="group relative aspect-[3/4] w-[74vw] shrink-0 snap-start overflow-hidden sm:w-[46vw] lg:w-[290px]"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5 transition-opacity duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-aqua">
                    {count} services · from {from}
                  </p>
                  <h3 className="mt-2 font-display text-[26px] leading-tight text-bone">
                    {cat.title}
                  </h3>
                  <span className="mt-4 flex h-px w-8 bg-champagne transition-all duration-500 group-hover:w-16" />
                </div>
              </Link>
            );
          })}
        </div>
      </Reveal>

      <div className="container-x mt-12">
        <Reveal delay={160}>
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border-b border-bone/40 pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:border-aqua hover:text-aqua"
          >
            View the full price list
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
