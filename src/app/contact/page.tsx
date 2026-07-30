import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { BUSINESS, HOURS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Sky Nails, 208 N White Horse Pike Suite A, Magnolia, NJ 08049. Call (856) 783-0001. Open seven days a week, walk-ins welcome, free parking out front.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Find us"
        title={
          <>
            208 N White Horse Pike,
            <br />
            <span className="italic text-teal">Magnolia, NJ 08049</span>
          </>
        }
        lead="Suite A, next to Walgreens. Free parking in the lot out front, and we are open seven days a week."
      />

      <section className="bg-bone py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          {[
            {
              label: "Call the salon",
              value: BUSINESS.phone,
              href: BUSINESS.phoneHref,
              note: "Call or text for availability. We answer during business hours.",
              icon: (
                <path
                  d="M6.6 3h3l1.5 4.2-2 1.4a12.4 12.4 0 0 0 5.3 5.3l1.4-2 4.2 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              ),
            },
            {
              label: "Visit the shop",
              value: "208 N White Horse Pike, Suite A",
              href: BUSINESS.mapsUrl,
              note: `${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip} · ${BUSINESS.landmark}`,
              icon: (
                <>
                  <path
                    d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5" />
                </>
              ),
            },
            {
              label: "Walk-ins",
              value: "Always welcome",
              href: undefined,
              note: "Groups of four or more, please give us a day's notice so we can staff the chairs.",
              icon: (
                <>
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ),
            },
          ].map((card, i) => (
            <Reveal
              key={card.label}
              delay={i * 100}
              className="group border border-ink/12 bg-white p-8 transition-shadow duration-500 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-teal/30 text-teal">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <title>{card.label}</title>
                  {card.icon}
                </svg>
              </span>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-ink/40">
                {card.label}
              </p>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-2 block font-display text-2xl leading-tight text-ink transition-colors hover:text-teal"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 font-display text-2xl leading-tight text-ink">
                  {card.value}
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-ink/55">
                {card.note}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-teal">Hours</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] leading-tight text-ink">
                Open seven days
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/12">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-3.5 text-sm"
                  >
                    <dt className="font-semibold text-ink/85">{h.day}</dt>
                    <dd className="tabular-nums text-ink/55">
                      {h.open} – {h.close}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 bg-bone p-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-teal">
                  Getting here
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink/60">
                  <li>
                    On the northbound side of the White Horse Pike between Evesham
                    Ave and Warwick Rd.
                  </li>
                  <li>Free lot parking directly in front of Suite A.</li>
                  <li>
                    NJ Transit 400 and 402 bus routes stop within a short walk.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="relative h-[400px] w-full border-t border-ink/10 lg:h-[520px]">
        <iframe
          title={`Map to ${BUSINESS.name} in Magnolia, NJ`}
          src={BUSINESS.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[0.3]"
        />
      </section>
    </>
  );
}
