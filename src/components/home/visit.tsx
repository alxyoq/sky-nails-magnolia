import { Reveal } from "@/components/reveal";
import { BUSINESS, HOURS } from "@/lib/site";

export function Visit() {
  return (
    <section className="relative bg-bone py-20 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="relative min-h-[340px] overflow-hidden border border-ink/10 lg:min-h-[520px]">
          <iframe
            title={`Map to ${BUSINESS.name} in Magnolia, NJ`}
            src={BUSINESS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.35]"
          />
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-teal">Plan your visit</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.8vw,3.4rem)] leading-[1] text-ink">
              208 N White Horse Pike
            </h2>
            <p className="mt-3 text-sm text-ink/55">
              Suite A · {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
              {BUSINESS.address.zip} · {BUSINESS.landmark}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <dl className="mt-9 divide-y divide-ink/10 border-y border-ink/10">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <dt className="font-semibold text-ink/85">{h.day}</dt>
                  <dd className="tabular-nums text-ink/55">
                    {h.open} – {h.close}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="flex-1 bg-ink px-6 py-4 text-center text-sm font-semibold tracking-[0.06em] text-bone transition-colors hover:bg-teal"
              >
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 border border-ink/20 px-6 py-4 text-center text-sm font-semibold tracking-[0.06em] text-ink transition-colors hover:border-teal hover:text-teal"
              >
                Open in Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
