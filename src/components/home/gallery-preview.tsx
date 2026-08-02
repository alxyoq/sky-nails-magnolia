import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GALLERY } from "@/lib/site";

const SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export function GalleryPreview() {
  const shots = GALLERY.slice(0, 7);

  return (
    <section className="relative bg-bone py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Salon mood"
          title={
            <>
              Bright, clean, <span className="italic">easygoing</span>
            </>
          }
          lead="A mood board for the calm, cared-for experience we want every guest to feel from the moment they walk in."
        />

        <div className="mt-14 grid auto-rows-[110px] grid-cols-3 gap-3 sm:auto-rows-[150px] lg:auto-rows-[180px] lg:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={i * 60}
              className={`group relative overflow-hidden ${SPANS[i % SPANS.length]}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-[1.07]"
              />
              <span className="pointer-events-none absolute inset-0 bg-teal/0 transition-colors duration-500 group-hover:bg-teal/15" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border border-ink/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:bg-teal hover:text-white"
          >
            Explore the gallery
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
