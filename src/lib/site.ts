/* -------------------------------------------------------------------------
 * Sky Nails — Magnolia, NJ
 * Single source of truth for every piece of business information on the site.
 * ---------------------------------------------------------------------- */

export const BUSINESS = {
  name: "Sky Nails",
  tagline: "Nail Salon in Magnolia, New Jersey",
  phone: "(856) 783-0001",
  phoneHref: "tel:+18567830001",
  address: {
    street: "208 N White Horse Pike, Suite A",
    city: "Magnolia",
    state: "NJ",
    zip: "08049",
  },
  get addressLine() {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  },
  landmark: "Next to Walgreens on the White Horse Pike",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sky+Nails+208+N+White+Horse+Pike+Magnolia+NJ+08049",
  mapEmbed:
    "https://www.google.com/maps?q=208+N+White+Horse+Pike,+Magnolia,+NJ+08049&output=embed",
  yelpUrl: "https://www.yelp.com/biz/sky-nails-magnolia",
  facebookUrl: "https://www.facebook.com/p/Sky-Nails-100063747572041/",
  rating: 4.1,
  reviewCount: 14,
  established: 2009,
} as const;

export const HOURS = [
  { day: "Monday", open: "9:30 am", close: "7:30 pm" },
  { day: "Tuesday", open: "9:30 am", close: "7:30 pm" },
  { day: "Wednesday", open: "9:30 am", close: "7:30 pm" },
  { day: "Thursday", open: "9:30 am", close: "7:30 pm" },
  { day: "Friday", open: "9:30 am", close: "7:30 pm" },
  { day: "Saturday", open: "9:30 am", close: "6:30 pm" },
  { day: "Sunday", open: "10:00 am", close: "5:00 pm" },
] as const;

/** Condensed version used in the footer / contact card. */
export const HOURS_SUMMARY = [
  { label: "Mon – Fri", value: "9:30 am – 7:30 pm" },
  { label: "Saturday", value: "9:30 am – 6:30 pm" },
  { label: "Sunday", value: "10:00 am – 5:00 pm" },
] as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
] as const;

/* ---------------------------------------------------------------- imagery */

export const IMAGES = {
  hero: "/img/hero.webp",
  heroAlt: "/img/hero-alt.webp",
  pedicure: "/img/pedicure.webp",
  manicure: "/img/manicure.webp",
  waxing: "/img/waxing.webp",
  addons: "/img/addons.webp",
  enhancements: "/img/enhancements.webp",
  featured: "/img/featured.webp",
  manipedi: "/img/manipedi.webp",
  gelx: "/img/gelx.webp",
  kids: "/img/kids.webp",
  brows: "/img/brows.webp",
  studio: "/img/studio.webp",
  detail: "/img/detail.webp",
} as const;

export const GALLERY = [
  { src: "/img/g1.webp", alt: "Light-filled salon interior with pale blue chairs" },
  { src: "/img/g2.webp", alt: "Empty pedicure lounge with blue glass basins" },
  { src: "/img/g3.webp", alt: "Modern salon reception area with greenery" },
  { src: "/img/g4.webp", alt: "Polish bottles organized by color" },
  { src: "/img/g5.webp", alt: "Prepared salon station with a folded blue towel" },
  { src: "/img/g6.webp", alt: "Sanitized salon tools and fresh towels" },
  { src: "/img/g7.webp", alt: "Spa towels with eucalyptus and a candle" },
  { src: "/img/g8.webp", alt: "Quiet beauty treatment room with blue accents" },
  { src: "/img/g9.webp", alt: "Child-friendly salon waiting nook" },
  { src: "/img/g10.webp", alt: "White wash basin with a brass faucet" },
  { src: "/img/g11.webp", alt: "Pale blue salon chair beside an arched mirror" },
  { src: "/img/g12.webp", alt: "Beauty products and gift boxes on pale wood shelves" },
] as const;

/* --------------------------------------------------------------- services */

export type ServiceItem = {
  name: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  blurb?: string;
  image: string;
  items: ServiceItem[];
  groups?: { heading: string; items: ServiceItem[] }[];
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "manicure",
    title: "Manicure",
    blurb: "Clean shaping, careful cuticle work and a finish that lasts.",
    image: IMAGES.manicure,
    items: [
      { name: "Regular manicure", price: "$22" },
      { name: "Spa manicure", price: "$30", note: "Shape and file, cuticle care, regular polish, hand and arm massage." },
      { name: "Gel manicure", price: "$35", note: "Includes gel polish and take-off of your current gel." },
      { name: "Gel polish change (hands)", price: "$27" },
      { name: "Gel polish change over acrylic or builder", price: "$30" },
      { name: "Regular polish change", price: "$14" },
    ],
  },
  {
    id: "pedicure",
    title: "Pedicure",
    blurb: "Massage chairs, hot towels and heel care that actually shows.",
    image: IMAGES.pedicure,
    groups: [
      {
        heading: "Classic",
        items: [
          { name: "Regular pedicure", price: "$35" },
          { name: "Regular gel pedicure", price: "$50" },
          { name: "Express spa pedicure", price: "$43", note: "Includes hot stones." },
          { name: "Mint pedicure", price: "$45", note: "Cooling mint mask and hot stones." },
          { name: "Gel polish change (toes)", price: "$30" },
          { name: "Gel add-on", price: "$15" },
        ],
      },
      {
        heading: "Luxury",
        items: [
          {
            name: "Deep moisture spa pedicure",
            price: "$65",
            note: "Jelly soak, cuticle care, exfoliating scrub, 10-minute massage and a warm paraffin wrap.",
          },
          {
            name: "Deluxe pedicure with gel polish",
            price: "$70",
            note: "Scrub exfoliation, fresh orange scrub, heel care, 10-minute warm candle oil massage, hot stones and gel polish.",
          },
          {
            name: "Collagen pedicure with gel polish",
            price: "$80",
            note: "Hydrating mask, 15-minute warm collagen gel massage, hot stone massage and gel polish.",
          },
          {
            name: "Volcano spa pedicure with paraffin",
            price: "$80",
            note: "Volcano bubble soak, orange scrub, heel care, hydrating mask, collagen massage and a paraffin dip.",
          },
        ],
      },
    ],
    items: [],
  },
  {
    id: "mani-pedi",
    title: "Mani + Pedi",
    blurb: "Book the pair and save — our most requested combination.",
    image: IMAGES.manipedi,
    items: [
      { name: "Regular manicure + regular pedicure", price: "$57" },
      { name: "Gel manicure + regular pedicure", price: "$70" },
      { name: "Gel manicure + gel pedicure", price: "$85" },
    ],
  },
  {
    id: "enhancements",
    title: "Nail Enhancements",
    blurb: "Acrylic, builder gel and dip powder. Extra length priced separately.",
    image: IMAGES.enhancements,
    items: [
      { name: "Acrylic full set", price: "$60", note: "New set including gel color. Removal of an existing set is extra." },
      { name: "Acrylic fill", price: "$50", note: "Refill on an existing acrylic set, includes gel polish." },
      { name: "Color acrylic full set", price: "$68", note: "Colored acrylic powder with a gel top coat." },
      { name: "Color acrylic fill", price: "$55" },
      { name: "Hard gel full set (builder gel)", price: "$68" },
      { name: "Hard gel refill (builder gel)", price: "$55" },
      { name: "Soft gel builder (BIAB)", price: "$55" },
      { name: "Hybrid gel full set", price: "$68" },
      { name: "Hybrid gel refill", price: "$55" },
    ],
  },
  {
    id: "dip-gelx",
    title: "Dip Powder & Gel-X",
    blurb: "Lightweight, long-wearing and kind to your natural nail.",
    image: IMAGES.gelx,
    items: [
      { name: "Dip color", price: "$50", note: "Fresh set of dip powder without tips, includes removal of current dip." },
      { name: "Dip with tips", price: "$60" },
      { name: "Dip clear with gel polish", price: "$55" },
      { name: "Gel-X full set, no take-off", price: "$68" },
      { name: "Gel-X full set + take-off", price: "$73" },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    blurb: "The service our regulars rave about — especially the brows.",
    image: IMAGES.waxing,
    items: [
      { name: "Eyebrows", price: "$10" },
      { name: "Lip", price: "$6" },
      { name: "Chin", price: "$9" },
      { name: "Sideburn", price: "$15" },
      { name: "Under arms", price: "$30" },
      { name: "Half arms", price: "$30" },
      { name: "Full arms", price: "$45" },
      { name: "Half legs", price: "$40" },
      { name: "Full legs", price: "$60" },
    ],
  },
  {
    id: "brows-lashes",
    title: "Brows & Lashes",
    blurb: "Appointment only — call or text ahead.",
    image: IMAGES.brows,
    items: [
      { name: "Brow henna", price: "$60" },
      { name: "Brow tinting", price: "$45" },
      { name: "Lash lift", price: "$75" },
      { name: "Brow shaping + tint", price: "$50" },
    ],
  },
  {
    id: "add-ons",
    title: "Add-Ons",
    blurb: "The finishing touches. Extra length is priced separately.",
    image: IMAGES.addons,
    items: [
      { name: "French tip", price: "$10" },
      { name: "Chrome / ombré", price: "$15" },
      { name: "Ten finger design", price: "$30" },
      { name: "Gel add-on", price: "$15" },
      { name: "Repair one nail", price: "$7" },
      { name: "Long nails", price: "$5" },
      { name: "Special shape", price: "$5", note: "Price may vary with length." },
      { name: "Take-off with another service", price: "$10" },
      { name: "Take-off only", price: "$15" },
    ],
  },
  {
    id: "kids",
    title: "Kids (10 & under)",
    blurb: "A first manicure they will not stop talking about.",
    image: IMAGES.kids,
    items: [
      { name: "Kid regular manicure", price: "$19" },
      { name: "Kid gel manicure", price: "$28" },
      { name: "Kid regular pedicure", price: "$25" },
      { name: "Kid gel pedicure", price: "$40" },
      { name: "Kid regular polish change", price: "$12" },
      { name: "Kid gel polish change", price: "$20" },
      { name: "Shiny buff", price: "$5" },
    ],
  },
];

/* ------------------------------------------------------------ trust / social */

export const VALUES = [
  {
    number: "01",
    title: "Sanitation you can see",
    body: "Fresh files and buffers for every guest, hospital-grade implement sterilization and pedicure liners changed in front of you.",
  },
  {
    number: "02",
    title: "Brands we trust",
    body: "OPI, DND and Kiara Sky gel and dip systems, plus a wall of colors we restock constantly so your shade is always there.",
  },
  {
    number: "03",
    title: "Technicians who listen",
    body: "Licensed by the State of New Jersey and known for brows. Bring a photo — our team will tell you honestly what will last.",
  },
];

export const REVIEWS = [
  {
    quote:
      "Always do a great job with my eyebrows. I am constantly getting compliments on them, and the prices are pretty good too.",
    author: "Yelp reviewer",
    meta: "Magnolia, NJ",
  },
  {
    quote:
      "They do beautiful nails. I have been coming here for years and they never rush you out the door.",
    author: "Neighborhood regular",
    meta: "Somerdale, NJ",
  },
  {
    quote:
      "Clean shop, friendly staff and my gel manicure lasted three full weeks without a single chip.",
    author: "Local guest",
    meta: "Barrington, NJ",
  },
];

export const OFFERS = [
  {
    title: "First Visit",
    amount: "$5 off",
    detail: "Any service of $40 or more. Mention this page when you check in.",
    terms: "New guests only. One per person.",
  },
  {
    title: "Mani + Pedi Tuesday",
    amount: "$10 off",
    detail: "Regular mani and pedi combo, every Tuesday from open until 3 pm.",
    terms: "Walk-in or appointment. Not combinable.",
  },
  {
    title: "Bring a Friend",
    amount: "$8 off each",
    detail: "Two full sets or two spa pedicures booked at the same time.",
    terms: "Both services must be paid together.",
  },
  {
    title: "Birthday Month",
    amount: "Free gel add-on",
    detail: "Celebrate with us and add gel polish to any pedicure at no charge.",
    terms: "Valid ID required. Once per year.",
  },
];
