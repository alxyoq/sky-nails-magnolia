import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BUSINESS, GALLERY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Nail art, gel sets, ombré, chrome and classic French from Sky Nails in Magnolia, NJ. Bring in a photo and our technicians will recreate it.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Our work"
        title={
          <>
            Bring a photo.
            <br />
            <span className="italic text-teal">We&apos;ll match it.</span>
          </>
        }
        lead="Hand-painted art, chrome, ombré, encapsulated florals and clean classic French — all done in the chair at 208 N White Horse Pike."
      />

      <section className="bg-bone py-16 lg:py-24">
        <div className="container-x">
          <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {GALLERY.map((shot, i) => (
              <Reveal
                key={shot.src}
                delay={(i % 3) * 90}
                className="group relative block overflow-hidden break-inside-avoid"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-bone">
                    {shot.alt}
                  </span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sky-wash-dark grain relative overflow-hidden bg-ink py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <p className="eyebrow text-aqua">Ready when you are</p>
          <h2 className="max-w-2xl font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-tight text-bone">
            Screenshot it, send it, or just show us at the desk
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-bone/60">
            Text the photo to {BUSINESS.phone} before you come in and we will
            make sure the right colors and shapes are ready.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 bg-aqua px-8 py-4 text-sm font-semibold tracking-[0.06em] text-ink transition-colors hover:bg-champagne"
          >
            Call or text {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
