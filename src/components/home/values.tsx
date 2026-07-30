import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VALUES } from "@/lib/site";

export function Values() {
  return (
    <section className="relative bg-bone py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Magnolia keeps coming back"
          title={
            <>
              Small salon standards, <span className="italic">kept every day</span>
            </>
          }
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.number}
              delay={i * 110}
              className="group relative flex flex-col bg-bone p-8 transition-colors duration-500 hover:bg-white lg:p-10"
            >
              <span className="font-display text-5xl text-ink/12 transition-colors duration-500 group-hover:text-teal/35">
                {v.number}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                {v.body}
              </p>
              <span className="mt-8 h-px w-10 bg-champagne transition-all duration-500 group-hover:w-20" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
