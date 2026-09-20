import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/bali-hero.jpg";
import logoImg from "@/assets/Vertical_Logo.svg";
import atvImg from "@/assets/bali-atv-gallery-river-canyon.jpg";
import { experiences, categories, getExperience } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { siteConfig } from "@/config/site";

const featuredPopularSlugs = [
  "bali-atv-adventure",
  "bali-buggy-adventure",
  "bali-jeep-sunrise",
  "lazy-river-tubing",
  "ayung-river-rafting",
  "telaga-waja-river-rafting",
  "tanjung-benoa-jet-ski",
  "tanjung-benoa-parasailing",
  "tanjung-benoa-banana-boat",
] as const;

const featuredExperiences = featuredPopularSlugs
  .map((slug) => experiences.find((exp) => exp.slug === slug))
  .filter((exp): exp is (typeof experiences)[number] => Boolean(exp));

const daySafariExperiences = [
  getExperience("bali-safari-jungle-hopper"),
  getExperience("bali-safari-jungle-hopper-legend"),
  getExperience("bali-safari-night-safari"),
];
const lionDiningExperiences = [
  getExperience("bali-safari-rhino-package"),
  getExperience("bali-safari-lion-package"),
  getExperience("bali-safari-breakfast-with-lion"),
  getExperience("bali-safari-dragon-package"),
];
const nightSafariExperiences = [];
const varunaExperiences = [
  getExperience("varuna-regular-bali"),
  getExperience("varuna-deluxe-bali"),
  getExperience("varuna-premium-bali"),
];

const title = "BaliBonza | Bali Activities, Adventures & Experiences";

const description =
  "Book Bali activities with a local team, from ATV and buggy adventures to wildlife parks, jungle swings and more. Easy booking for your Bali experience.";

const homepageFaqs = [
  {
    question: "How do I book Bali activities and adventures through BaliBonza?",
    answer:
      "Booking is fast and easy directly through WhatsApp with our local team. Simply let us know your preferred activity, target date, and number of guests. We verify live availability with our trusted operators, confirm package inclusions, and arrange your schedule and pickupâ€”with no hidden fees.",
  },
  {
    question: "Can I combine multiple activities or adventures on the same day?",
    answer:
      "Yes! Combining popular experiences is one of our most requested options. For example, guests often pair a morning Bali ATV quad ride or Bali Zoo visit with an afternoon jungle swing, waterfall visit, or buggy adventure. We coordinate timing and can provide seamless private transfers between locations.",
  },
  {
    question: "Is hotel pickup and drop-off included with activity bookings?",
    answer:
      "Most of our activity and adventure packages include convenient door-to-door hotel transfers covering popular areas like Ubud, Seminyak, Canggu, Kuta, Legian, Sanur, and Nusa Dua. We confirm your exact pickup time and driver details when confirming your booking on WhatsApp.",
  },
  {
    question: "What should I wear and bring for adventure activities like ATV and Buggy rides?",
    answer:
      "Wear comfortable, lightweight clothes you don't mind getting dusty or muddy, along with sturdy sneakers or secure sandals. We recommend bringing sunscreen, insect repellent, a change of dry clothes, and a towel. Clean showers, changing rooms, and secure lockers are available on-site.",
  },
  {
    question: "Are activities suitable for children, beginners, and families?",
    answer:
      "Yes! Wildlife attractions like Bali Zoo and Bali Safari & Marine Park are popular for all ages. For ATV and buggy tours, tandem (double) vehicles allow non-drivers or children to ride safely alongside an adult or experienced guide. Professional instructors provide thorough safety briefings and helmets before every ride.",
  },
  {
    question: "What happens if it rains or my travel plans change?",
    answer:
      "Outdoor activities continue in light or passing tropical rainâ€”in fact, quad biking through muddy jungle tracks and water splashes is a guest favorite! If extreme weather causes safety concerns, we will reschedule your activity to another day at no extra charge. Let us know as early as possible if you need to adjust your dates.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://balibonza.com/",
      },
      {
        property: "og:image",
        content: "https://balibonza.com/src/assets/bali-hero.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://balibonza.com/src/assets/bali-hero.jpg",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://balibonza.com/",
      },
    ],

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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homepageFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
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

        {/* Master BaliBonza Vertical_Logo.svg (transparent background) in upper-left area */}
        <div className="container-page pt-6 sm:pt-8 md:pt-10">
          <img
            src={logoImg}
            alt="BaliBonza"
            width={120}
            height={179}
            className="h-20 w-auto object-contain sm:h-24 md:h-28"
          />
        </div>

        <div className="container-page flex min-h-[75vh] flex-col justify-end pb-16 pt-8 text-surface-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {siteConfig.tagline}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
            Bali Activities, Adventures & Experiences
          </h1>

          <p className="mt-5 max-w-xl text-base text-surface-foreground/85 sm:text-lg">
            Discover Bali's best activities, adventures and wildlife experiences with easy local
            booking.
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
          Nine signature experiences to explore across Bali - from jungle quad tracks to wildlife parks and valley swings.

        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((exp, i) => (
            <ExperienceCard key={exp.slug} exp={exp} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* Dedicated Bali Safari & Marine Park Section */}
      <section className="container-page pb-16" id="bali-safari">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Official Ticket Packages</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Bali Safari & Marine Park
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Explore open-range wildlife safari journeys, premium lion dining, and Indonesia&apos;s
              first underwater theatrical show with instant WhatsApp booking confirmation.
            </p>
          </div>
          <Link
            to="/bali-safari-marine-park"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:bg-muted"
          >
            View Safari Hub â†’
          </Link>
        </div>

        <div className="mt-12 space-y-12">
          {/* Day Safari & Cultural Packages */}
          <div>
            <div className="border-b border-border pb-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Day Safari & Cultural Packages
                </h3>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  3 Packages
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Classic daytime tram journeys, educational animal presentations, cultural
                performances, and family buffet options.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {daySafariExperiences.map((exp) => (
                <ExperienceCard key={exp.slug} exp={exp} />
              ))}
            </div>
          </div>

          {/* Tsavo Lion Dining & VIP Packages */}
          <div>
            <div className="border-b border-border pb-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Tsavo Lion Dining & VIP Packages
                </h3>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  3 Packages
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Dine alongside roaming lions at Tsavo Lion Restaurant, enjoy morning lion
                breakfasts, or upgrade to all-inclusive VIP with elephant rides.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lionDiningExperiences.map((exp) => (
                <ExperienceCard key={exp.slug} exp={exp} />
              ))}
            </div>
          </div>

          {/* Night Safari & Nocturnal Adventure */}
          <div>
            <div className="border-b border-border pb-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Night Safari & Nocturnal Adventure
                </h3>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  Evening Experience
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                After-dark caged tram predator expedition, live Afrika! Rhythm of Fire dance show,
                and BBQ dinner.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nightSafariExperiences.map((exp) => (
                <ExperienceCard key={exp.slug} exp={exp} />
              ))}
            </div>
          </div>

          {/* Varuna â€” Underwater Theatre */}
          <div>
            <div className="border-b border-border pb-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Varuna â€” Underwater Theatre
                </h3>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  3 Tiers
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                World-class underwater dining and theatrical performances in regular, deluxe, and
                premium tiers.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {varunaExperiences.map((exp) => (
                <ExperienceCard key={exp.slug} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-page">
          <p className="eyebrow">Categories</p>

          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Browse Experiences by Category
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

                <p className="mt-4 text-xs text-muted-foreground">{c.items.join(" Â· ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
        <img
          src={atvImg}
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
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          More Ways to Experience Bali
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-surface p-8 text-surface-foreground">
            <h3 className="font-display text-2xl font-semibold">Private Bali Tours</h3>

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
            <h3 className="font-display text-2xl font-semibold">Nusa Penida Experiences</h3>

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

      <section className="container-page pb-16" id="faq">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Frequently Asked Questions</p>

          <h2 className="mt-2 text-center font-display text-3xl font-semibold sm:text-4xl">
            Bali Activity & Booking FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
            Common questions about booking Bali activities, combining adventures, hotel pickups, and
            what to expect on your trip.
          </p>

          <div className="mt-8">
            <FaqAccordion items={homepageFaqs} defaultValue="faq-0" />
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-semibold text-foreground">
                Have a specific question or custom plan?
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Chat directly with our local team on WhatsApp for quick advice, real-time
                availability, and custom combos.
              </p>
            </div>
            <WhatsAppButton className="shrink-0" />
          </div>
        </div>
      </section>
    </>
  );
}







