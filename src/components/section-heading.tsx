import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <Reveal>
        <p
          className={cn(
            "eyebrow",
            tone === "light" ? "text-aqua" : "text-teal",
          )}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-5 font-display text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] tracking-[-0.01em]",
            align === "center" && "text-balance",
            tone === "light" ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[15px] leading-relaxed",
              tone === "light" ? "text-bone/65" : "text-ink/60",
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
