import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BUSINESS, SERVICES, type ServiceItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Price List",
  description:
    "Full price list for Sky Nails in Magnolia, NJ — manicures from $22, pedicures from $35, acrylic full sets, dip powder, Gel-X, builder gel, brow waxing and kids services.",
};

function PriceRow({ item }: { item: ServiceItem }) {
  return (
    <li className="py-4">
      <div className="flex items-end">
        <span className="text-[15px] font-semibold leading-snug text-ink">
          {item.name}
        </span>
        <span className="leader" />
        <span className="font-display text-xl leading-none text-teal">
          {item.price}
        </span>
      </div>
      {item.note ? (
        <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-ink/50">
          {item.note}
        </p>
      ) : null}
    </li>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Price list"
        title={
          <>
            No surprises at
            <br />
            <span className="italic text-teal">the register.</span>
          </>
        }
        lead="Every service we offer, with the price next to it. Extra length, special shapes and removal of another salon's work are priced separately — we'll always tell you before we start."
      />

      {/* jump nav */}
      <div className="sticky top-[74px] z-30 border-b border-ink/10 bg-bone/92 backdrop-blur-xl">
        <div className="container-x hide-scrollbar flex gap-6 overflow-x-auto py-4">
          {SERVICES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/50 transition-colors hover:text-teal"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      <section className="bg-bone py-16 lg:py-24">
        <div className="container-x space-y-20 lg:space-y-28">
          {SERVICES.map((cat, i) => (
            <div
              key={cat.id}
              id={cat.id}
              className="scroll-mt-[150px] grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
            >
              <Reveal
                className={
                  i % 2 === 1 ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                }
              >
                <div className="lg:sticky lg:top-[170px]">
                  <div className="relative aspect-[4/3] overflow-hidden shadow-card lg:aspect-square">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-0 top-0 bg-bone px-4 py-2 font-display text-lg text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-[clamp(2rem,4vw,2.8rem)] leading-tight text-ink">
                    {cat.title}
                  </h2>
                  {cat.blurb ? (
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
                      {cat.blurb}
                    </p>
                  ) : null}
                </div>
              </Reveal>

              <Reveal
                delay={100}
                className={i % 2 === 1 ? "lg:order-1" : "lg:order-2"}
              >
                {cat.groups ? (
                  <div className="space-y-10">
                    {cat.groups.map((group) => (
                      <div key={group.heading}>
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
                          {group.heading}
                        </h3>
                        <ul className="mt-3 divide-y divide-ink/10 border-t border-ink/15">
                          {group.items.map((item) => (
                            <PriceRow key={item.name} item={item} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="divide-y divide-ink/10 border-t border-ink/15">
                    {cat.items.map((item) => (
                      <PriceRow key={item.name} item={item} />
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* fine print */}
      <section className="border-t border-ink/10 bg-white py-16">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Payment",
              d: "Cash and all major cards accepted. Card prices are the prices you see here — no surcharge.",
            },
            {
              t: "Timing",
              d: "Full sets and spa pedicures take about an hour. Arriving 5 minutes early keeps everyone on schedule.",
            },
            {
              t: "Removal",
              d: "Take-off is $10 with another service, $15 on its own. Work from another salon may take longer.",
            },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
                {f.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="container-x mt-12 border-t border-ink/10 pt-8">
          <p className="text-sm text-ink/55">
            Prices are subject to change. Call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="font-semibold text-teal underline-offset-4 hover:underline"
            >
              {BUSINESS.phone}
            </a>{" "}
            to confirm before your visit.
          </p>
        </div>
      </section>
    </>
  );
}
