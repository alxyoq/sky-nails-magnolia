import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BUSINESS, OFFERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offers & Coupons",
  description:
    "Current specials at Sky Nails in Magnolia, NJ — new guest discount, Tuesday mani-pedi savings, bring-a-friend and a birthday gel add-on.",
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        crumb="Offers"
        eyebrow="Current specials"
        title={
          <>
            A little something
            <br />
            <span className="italic text-teal">off the top.</span>
          </>
        }
        lead="Mention the offer when you check in — no printing, no app, no sign-up required."
      />

      <section className="bg-bone py-16 lg:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 100}>
              <article className="group relative flex h-full overflow-hidden border border-ink/12 bg-white transition-shadow duration-500 hover:shadow-card">
                {/* perforated stub */}
                <div className="relative flex w-24 shrink-0 items-center justify-center bg-ink text-bone sm:w-28">
                  <span className="rotate-180 text-[10px] font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
                    Sky Nails
                  </span>
                  <span className="absolute inset-y-0 right-0 w-px border-r border-dashed border-bone/30" />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-teal">
                    {offer.title}
                  </p>
                  <p className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3rem)] leading-none text-ink">
                    {offer.amount}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">
                    {offer.detail}
                  </p>
                  <p className="mt-auto pt-6 text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    {offer.terms}
                  </p>
                </div>

                {/* notches */}
                <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-bone" />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-14">
          <Reveal>
            <div className="border border-ink/12 bg-white p-8 lg:p-10">
              <h2 className="font-display text-2xl text-ink">Good to know</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink/60 sm:grid-cols-2">
                {[
                  "One offer per guest, per visit. Offers cannot be combined with each other.",
                  "Discounts apply to regular-priced services only and cannot be applied to gift cards.",
                  "Please mention the offer before your service begins — we cannot apply it after checkout.",
                  "Offers may change seasonally. Call ahead if you are planning around one.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={BUSINESS.phoneHref}
                className="mt-8 inline-flex bg-ink px-7 py-4 text-sm font-semibold tracking-[0.06em] text-bone transition-colors hover:bg-teal"
              >
                Questions? Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
