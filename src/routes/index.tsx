import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/bali-hero.jpg";
import atvImg from "@/assets/bali-atv-gallery-river-canyon.webp.asset.json";
import { experiences, categories } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

const title = "BaliBonza | Bali ATV, Zoo, Safari, Buggy & Swing Experiences";
const description =
  "Book Bali activities with a local team: Bali ATV adventure, Bali Zoo, Bali Safari & Marine Park, buggy adventures, Bali Swing, private tours and Nusa Penida trips.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
     { property: "og:url", content: "https://balibonza.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
   links: [{ rel: "canonical", href: "https://balibonza.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: siteConfig.name,
          description,
          areaServed: "Bali, Indonesia",
          url: "https://balibonza.com/",
        }),
      },
    ],
  }),
  component: Index,
});

const reasons = [
  ["Local Bali Knowledge", "Discover Bali with local expertise."],
  ["Easy Booking", "Book directly through WhatsApp."],
  ["Flexible Experiences", "Choose activities that match your interests."],
  ["Personalized Service", "Get assistance before and during your experience."],
  [
    "Multiple Bali Experiences",
    "Adventure, wildlife, family activities, scenic experiences and private tours in one place.",
  ],
];

function Index() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Aerial view of Bali's tropical coastline and jungle cliffs at golden hour"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="container-page flex min-h-[85vh] flex-col justify-end py-16 text-surface-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
            Bali Activities, Adventures & Experiences
          </h1>
          <p className="mt-5 max-w-xl text-base text-surface-foreground/85 sm:text-lg">
            Adventure, wildlife, family experiences and private tours — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/experiences"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Explore Bali Experiences
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="container-page py-16" id="featured">
        <p className="eyebrow">Featured</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Bali's Most Popular Experiences
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Five signature experiences we arrange every week — from jungle quad tracks to wildlife
          parks and valley swings.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.slug} exp={exp} priority={i === 0} />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-page">
          <p className="eyebrow">Categories</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Explore Bali Experiences
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-4 text-xs text-muted-foreground">{c.items.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
        <img
          src={atvImg.url}
          alt="Riders on red quad bikes following a river canyon track during a Bali ATV adventure"
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
        <div>
          <p className="eyebrow">Why us</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Why Book With BaliBonza?
          </h2>
          <dl className="mt-6 space-y-5">
            {reasons.map(([t, d]) => (
              <div key={t}>
                <dt className="font-semibold">{t}</dt>
                <dd className="text-sm text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-muted"
            >
              Request an Itinerary
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-surface p-8 text-surface-foreground">
            <h2 className="font-display text-2xl font-semibold">Private Bali Tours</h2>
            <p className="mt-3 text-sm text-surface-foreground/80">
              Ubud, temples, waterfalls, rice terraces, cultural days and fully custom itineraries
              with your own driver.
            </p>
            <Link
              to="/bali-private-tours"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              See private tours
            </Link>
          </div>
          <div className="rounded-3xl border border-border p-8">
            <h2 className="font-display text-2xl font-semibold">Nusa Penida Tours</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              West, east and combination island days with snorkeling options and fast boat
              transfers.
            </p>
            <Link
              to="/nusa-penida-tours"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              See Nusa Penida tours
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <h2 className="font-display text-3xl font-semibold">Guest reviews</h2>
        <p className="mt-3 max-w-2xl rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
          Reviews will be shown here once our Google and Tripadvisor listings are connected. We only
          publish genuine, verifiable guest feedback — never invented testimonials or ratings.
        </p>
      </section>
    </>
  );
}
