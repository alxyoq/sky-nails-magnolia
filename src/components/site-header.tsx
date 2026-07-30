"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { BUSINESS, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Thin marquee strip — address + walk-in note */}
      <div className="relative z-50 overflow-hidden bg-ink text-bone">
        <div className="container-x flex h-9 items-center justify-between gap-6 text-[11px] tracking-[0.14em]">
          <p className="truncate uppercase text-bone/70">
            {BUSINESS.address.street} · {BUSINESS.address.city},{" "}
            {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
          <p className="hidden shrink-0 uppercase text-aqua sm:block">
            Walk-ins welcome
          </p>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-ink/10 bg-bone/90 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-[74px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative py-1 text-[13px] font-medium uppercase tracking-[0.16em] transition-colors",
                    active ? "text-teal" : "text-ink/70 hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-teal transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="group hidden items-center gap-2.5 bg-ink px-5 py-3 text-[13px] font-semibold tracking-[0.06em] text-bone transition-colors hover:bg-teal sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              {BUSINESS.phone}
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-11 w-11 items-center justify-center border border-ink/15 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-5 flex-col gap-[5px]">
                <span
                  className={cn(
                    "h-px w-full bg-ink transition-transform duration-300",
                    open && "translate-y-[6px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-ink transition-opacity duration-200",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-ink transition-transform duration-300",
                    open && "-translate-y-[6px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "sky-wash-dark absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-ink px-7 pb-10 pt-24 transition-transform duration-500 ease-editorial",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <nav className="flex flex-col">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                className={cn(
                  "flex items-baseline gap-4 border-b border-bone/10 py-4 font-display text-3xl text-bone transition-all duration-500",
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0",
                )}
              >
                <span className="font-sans text-[10px] tracking-[0.2em] text-aqua">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-10">
            <a
              href={BUSINESS.phoneHref}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 bg-aqua px-5 py-4 text-sm font-semibold tracking-[0.08em] text-ink"
            >
              <PhoneIcon className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <p className="text-center text-xs leading-relaxed text-bone/55">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
              {BUSINESS.address.zip}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.6 3h3l1.5 4.2-2 1.4a12.4 12.4 0 0 0 5.3 5.3l1.4-2 4.2 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
