import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <title>Sky Nails mark</title>
      {/* outer ring */}
      <circle
        cx="22"
        cy="22"
        r="20.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      {/* crescent — a nail tip silhouette doubling as a moon */}
      <path
        d="M28.6 9.4a14 14 0 1 0 5.2 17.4 11.2 11.2 0 0 1-14.6-14.7 14 14 0 0 1 9.4-2.7Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* four-point sparkle */}
      <path
        d="M30.4 14.2c.34 2.5 1.06 3.22 3.56 3.56-2.5.34-3.22 1.06-3.56 3.56-.34-2.5-1.06-3.22-3.56-3.56 2.5-.34 3.22-1.06 3.56-3.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label="Sky Nails — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "h-10 w-10 shrink-0 transition-transform duration-500 group-hover:rotate-[18deg]",
          tone === "light" ? "text-aqua" : "text-teal",
        )}
      >
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[26px] tracking-[0.01em]",
            tone === "light" ? "text-bone" : "text-ink",
          )}
        >
          Sky Nails
        </span>
        <span
          className={cn(
            "mt-[3px] text-[9px] font-semibold uppercase tracking-[0.33em]",
            tone === "light" ? "text-aqua/80" : "text-teal/80",
          )}
        >
          Magnolia · NJ
        </span>
      </span>
    </Link>
  );
}
