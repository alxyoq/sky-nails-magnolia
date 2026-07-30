import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS, REVIEWS } from "@/lib/site";

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={`${BUSINESS.rating} stars · ${BUSINESS.reviewCount} reviews`}
          title={
            <>
              What the neighborhood <span className="italic">says</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.quote}
              delay={i * 110}
              className="relative flex flex-col border border-ink/10 bg-bone/60 p-8 transition-shadow duration-500 hover:shadow-card"
            >
              <span
                className="font-display text-6xl leading-none text-champagne"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="-mt-4 text-[15px] leading-relaxed text-ink/75">
                {r.quote}
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/12 font-display text-sm text-teal">
                  {r.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{r.author}</p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                    {r.meta}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 text-center">
          <a
            href={BUSINESS.yelpUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-teal underline-offset-8 hover:underline"
          >
            Read all reviews on Yelp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
