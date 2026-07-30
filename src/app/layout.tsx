import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { BUSINESS } from "@/lib/site";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skynailsmagnolia.com"),
  title: {
    default: "Sky Nails | Nail Salon in Magnolia, NJ 08049",
    template: "%s | Sky Nails Magnolia, NJ",
  },
  description:
    "Sky Nails is a neighborhood nail salon at 208 N White Horse Pike in Magnolia, NJ 08049. Manicures, pedicures, gel, acrylic, dip powder, eyebrow waxing. Walk-ins welcome — call (856) 783-0001.",
  keywords: [
    "Sky Nails",
    "nail salon Magnolia NJ",
    "manicure Magnolia NJ",
    "pedicure 08049",
    "eyebrow waxing Magnolia New Jersey",
    "gel nails White Horse Pike",
  ],
  openGraph: {
    title: "Sky Nails | Nail Salon in Magnolia, NJ 08049",
    description:
      "Manicures, pedicures, gel, acrylic, dip powder and brow waxing on the White Horse Pike. Walk-ins welcome.",
    url: "https://skynailsmagnolia.com",
    siteName: "Sky Nails",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.856772,
    longitude: -75.029238,
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    reviewCount: "14",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SiteHeader />
        <main className="pb-16 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
