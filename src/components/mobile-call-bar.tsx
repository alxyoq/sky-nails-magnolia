import { BUSINESS } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-bone/95 backdrop-blur-lg lg:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-[13px] font-semibold tracking-[0.08em] text-ink"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
          <path
            d="M6.6 3h3l1.5 4.2-2 1.4a12.4 12.4 0 0 0 5.3 5.3l1.4-2 4.2 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        Call
      </a>
      <a
        href={BUSINESS.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-teal py-4 text-[13px] font-semibold tracking-[0.08em] text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
          <path
            d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        Directions
      </a>
    </div>
  );
}
