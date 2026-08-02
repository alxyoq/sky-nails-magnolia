import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { BUSINESS, IMAGES } from "@/lib/site";

export function Welcome() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        {/* stacked imagery */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-[78%] overflow-hidden shadow-lift">
            <img
              src={IMAGES.studio}
              alt="Light-filled salon reception area"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[-6%] right-0 aspect-square w-[52%] overflow-hidden border-[10px] border-white shadow-lift">
            <img
              src={IMAGES.detail}
              alt="Folded spa towels with eucalyptus and a candle"
              className="h-full w-full object-cover"
            />
          </div>
          {/* decorative arc */}
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 text-champagne/60"
            aria-hidden="true"
          >
            <title>decorative arc</title>
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 12"
            />
          </svg>
        </Reveal>

        {/* copy */}
        <div>
          <Reveal>
            <p className="eyebrow text-teal">Welcome to</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[0.98] text-ink">
              Sky Nails,
              <br />
              <span className="italic">on the Pike since {BUSINESS.established}</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/65">
              <p>
                We are a small, family-run nail salon at {BUSINESS.address.street}{" "}
                in {BUSINESS.address.city} — a few doors down from Walgreens, with
                parking right out front. No membership, no upselling, no rush.
                Just careful work at a fair price.
              </p>
              <p>
                Our technicians are licensed by the State of New Jersey and have
                been shaping brows and building nails here for years. Bring in a
                photo and we will tell you honestly whether it will hold up on
                your nail bed — and how to keep it looking new between visits.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Licensed NJ technicians",
                "Fresh files for every guest",
                "Free parking out front",
                "Cash & all major cards",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-ink/75"
                >
                  <span className="text-champagne">✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={290}>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
            >
              More about us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
