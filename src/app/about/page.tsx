import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS, IMAGES, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sky Nails has been caring for Magnolia, Somerdale and Barrington from 208 N White Horse Pike. Licensed NJ technicians, strict sanitation and honest pricing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title={
          <>
            A small shop on
            <br />
            <span className="italic text-teal">the White Horse Pike.</span>
          </>
        }
        lead="No chain, no franchise, no membership. Just a licensed team that has been shaping nails and brows for this corner of Camden County for years."
      />

      {/* story */}
      <section className="bg-bone py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-teal">Since {BUSINESS.established}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1] text-ink">
                We learned this trade one guest at a time
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/65">
                <p>
                  {BUSINESS.name} opened in a small suite at{" "}
                  {BUSINESS.address.street}, with two chairs and a hand-written
                  price list taped to the window. The pike was busy, Walgreens was
                  next door, and people started stopping in on their way home.
                </p>
                <p>
                  A lot has changed since — more chairs, a wall of gel and dip
                  colors, builder gel and Gel-X — but the way we work has not.
                  We still take the extra minute on cuticles. We still tell you
                  when a design will not last on short nails. And we still know
                  most of our guests by name and by shape.
                </p>
                <p>
                  Ask around Magnolia and you will hear the same thing twice:
                  the brows. Our waxing regulars have been coming in every three
                  weeks for years, and it is the compliment we are proudest of.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 border-l-2 border-champagne pl-6">
                <p className="font-display text-2xl italic leading-snug text-ink">
                  &ldquo;Always do a great job with my eyebrows. I am constantly
                  getting compliments on them, and the prices are pretty good
                  too.&rdquo;
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ink/45">
                  Yelp review · Magnolia, NJ
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/10] overflow-hidden shadow-card">
                <img
                  src={IMAGES.studio}
                  alt="The Sky Nails salon floor"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden shadow-card">
                <img
                  src={IMAGES.manicure}
                  alt="A gel manicure in progress"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden shadow-card">
                <img
                  src={IMAGES.waxing}
                  alt="Eyebrow waxing service"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 bg-ink p-8 text-bone">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-aqua">
                Serving
              </p>
              <p className="mt-3 font-display text-2xl leading-snug">
                Magnolia · Somerdale · Barrington · Laurel Springs ·
                Stratford · Lawnside
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* standards */}
      <section className="sky-wash-dark grain relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            tone="light"
            eyebrow="How we work"
            title={
              <>
                Three things we <span className="italic text-aqua">never skip</span>
              </>
            }
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.number} delay={i * 110}>
                <span className="font-display text-5xl text-aqua/30">
                  {v.number}
                </span>
                <h3 className="mt-5 font-display text-2xl text-bone">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone/60">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="bg-white py-16">
        <div className="container-x grid gap-8 border-y border-ink/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: `${BUSINESS.rating} ★`, v: `${BUSINESS.reviewCount} Yelp reviews` },
            { k: "60+", v: "Services on the menu" },
            { k: "7 days", v: "Open every week" },
            { k: "$22", v: "Manicures start at" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 90}>
              <p className="font-display text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-ink">
                {s.k}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink/45">
                {s.v}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-14 flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-tight text-ink">
            Come see the shop for yourself
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="bg-ink px-8 py-4 text-sm font-semibold tracking-[0.06em] text-bone transition-colors hover:bg-teal"
            >
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/services"
              className="border border-ink/20 px-8 py-4 text-sm font-semibold tracking-[0.06em] text-ink transition-colors hover:border-teal hover:text-teal"
            >
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
