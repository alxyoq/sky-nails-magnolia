const CHECKOUT_URL = "https://buy.stripe.com/3cI3cwe3J94k3Y8aMGdwc00?client_reference_id=sky_nails_magnolia";

export function PurchaseWebsiteButton() {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Buy this website securely through Stripe"
      className="fixed right-4 bottom-20 z-[70] inline-flex min-h-12 items-center justify-center rounded-full border border-[#241f20] bg-[#f1d9dc] px-5 py-3 font-[var(--font-manrope)] text-sm font-bold tracking-wide text-[#241f20] shadow-[0_12px_32px_rgba(36,31,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e7c8cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b47f88] lg:right-6 lg:bottom-6"
    >
      Buy This Website
    </a>
  );
}
