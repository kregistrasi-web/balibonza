import { createFileRoute, Link } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { experienceHead } from "@/lib/seo";
import { baliSafariSchedule } from "@/data/bali-safari";

const exp = getExperience("bali-safari-marine-park");

const safariExperiences = [
  getExperience("bali-safari-jungle-hopper"),
  getExperience("bali-safari-night-safari"),
  getExperience("bali-safari-jungle-hopper-legend"),
];

const wildlifePremiumExperiences = [
  getExperience("bali-safari-rhino-package"),
  getExperience("bali-safari-lion-package"),
  getExperience("bali-safari-breakfast-with-lion"),
  getExperience("bali-safari-dragon-package"),
];

const varunaExperiences = [
  getExperience("varuna-regular-bali"),
  getExperience("varuna-deluxe-bali"),
  getExperience("varuna-premium-bali"),
];

function BaliSafariMarineParkPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative isolate">
        <img
          src={exp.image}
          alt={exp.alt}
          width={1600}
          height={1000}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="container-page flex min-h-[52vh] sm:min-h-[58vh] flex-col justify-end py-12 sm:py-16 text-surface-foreground">
          <Breadcrumbs
            items={[
              { label: "Experiences", to: "/experiences" },
              { label: "Bali Safari & Marine Park" },
            ]}
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Official Ticket Packages & Experiences
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            {exp.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-surface-foreground/85 leading-relaxed">
            Bali Safari & Marine Park features 10 distinct wildlife and dining experiences. Choose
            from classic daytime safari tram rides and after-dark night safaris, to lion-side dining
            at Tsavo and Indonesia's first underwater theatrical show at Varuna.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <WhatsAppButton experience={exp.title} message={exp.whatsappText} />
            <a
              href="#safari-packages"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-surface-foreground transition-colors hover:bg-white/10"
            >
              Browse All 10 Packages ↓
            </a>
          </div>
        </div>
      </section>

      {/* Hub Navigation & Highlights Bar */}
      <section id="safari-packages" className="border-b border-border bg-muted/40 py-4">
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1 text-sm scrollbar-none">
            <span className="mr-1 hidden text-xs font-medium text-muted-foreground sm:inline">
              Jump to:
            </span>
            <a
              href="#safari-experiences"
              className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              1. Safari Experiences (3)
            </a>
            <a
              href="#wildlife-premium"
              className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              2. Wildlife & Premium (4)
            </a>
            <a
              href="#varuna-show"
              className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              3. Varuna Underwater Show (3)
            </a>
            <a
              href="#park-schedule"
              className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              4. Daily Schedules & Hours
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              10 Bookable Experiences
            </span>
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Official Entry Vouchers
            </span>
          </div>
        </div>
      </section>

      <div className="space-y-16 py-12">
        {/* Section 1: Safari Experiences */}
        <section className="container-page">
          <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-5 sm:p-6 dark:bg-emerald-950/20">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                3 Core Safari Options
              </span>
              <span className="text-xs text-muted-foreground">Day & Night Adventures</span>
            </div>
            <h2
              id="safari-experiences"
              className="mt-3 font-display text-2xl font-semibold sm:text-3xl text-foreground"
            >
              Safari Experiences
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore wildlife up close with open-range safari tram journeys through African and
              Asian habitats, educational animal presentations, fresh water park access, or the
              thrill of the after-dark Night Safari.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safariExperiences.map((item) => (
              <ExperienceCard key={item.slug} exp={item} />
            ))}
          </div>
        </section>

        {/* Section 2: Wildlife & Premium Experiences */}
        <section className="container-page">
          <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-50/50 p-5 sm:p-6 dark:bg-amber-950/20">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                4 Upgraded & Dining Tiers
              </span>
              <span className="text-xs text-muted-foreground">VIP Access & Lion Dining</span>
            </div>
            <h2
              id="wildlife-premium"
              className="mt-3 font-display text-2xl font-semibold sm:text-3xl text-foreground"
            >
              Wildlife & Premium Experiences
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Elevate your safari day with VIP express queues, elephant rides, breakfast surrounded
              by lions, or multi-course dining with panoramic enclosure views at Tsavo Lion
              Restaurant.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {wildlifePremiumExperiences.map((item) => (
              <ExperienceCard key={item.slug} exp={item} />
            ))}
          </div>
        </section>

        {/* Section 3: Varuna — Underwater Dining & Theatrical Show */}
        <section className="container-page">
          <div className="mb-6 rounded-2xl border border-sky-500/20 bg-sky-50/50 p-5 sm:p-6 dark:bg-sky-950/20">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900/60 dark:text-sky-300">
                3 Tiered Dining Experiences
              </span>
              <span className="text-xs text-muted-foreground">
                Underwater Theatre & Fine Gastronomy
              </span>
            </div>
            <h2
              id="varuna-show"
              className="mt-3 font-display text-2xl font-semibold sm:text-3xl text-foreground"
            >
              Varuna — Underwater Dining & Theatrical Show
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Indonesia's first underwater theatrical dining journey, uniting ancient Balinese
              storytelling, aerial acrobatics, and gourmet multi-course cuisine against a panoramic
              living aquarium stage.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {varunaExperiences.map((item) => (
              <ExperienceCard key={item.slug} exp={item} />
            ))}
          </div>
        </section>

        {/* Section 4: Official Daily Schedules & Hours */}
        <section id="park-schedule" className="container-page">
          <div className="mb-6 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Official Park Timetable
              </span>
              <span className="text-xs text-muted-foreground">WITA (Bali Local Time)</span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl text-foreground">
              Bali Safari Daily Schedules & Presentation Times
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              General opening hours are{" "}
              <strong className="text-foreground">{baliSafariSchedule.general.openingHours}</strong>
              . Activities may change, be postponed, or be cancelled due to weather conditions and
              animal conditions/welfare.
            </p>

            <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-xl border border-border/80 bg-muted/40 px-3.5 py-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Age Policy:</span>
              <span>Infant: &lt;3 yrs (free)</span>
              <span>•</span>
              <span>Child: 3–12 yrs</span>
              <span>•</span>
              <span>Adult: &gt;12 yrs</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Safari Journey & Educational Presentations */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Safari Journey & Presentations
                  </h3>
                  <span className="text-xs font-medium text-accent">Everyday</span>
                </div>

                <div className="mt-4 space-y-4 text-sm">
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">Safari Journey</p>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        {baliSafariSchedule.safariJourney.operatingHours}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {baliSafariSchedule.safariJourney.location} • Last tram:{" "}
                      {baliSafariSchedule.safariJourney.lastTram} • Duration:{" "}
                      {baliSafariSchedule.safariJourney.duration}
                    </p>
                  </div>

                  {baliSafariSchedule.presentations.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col justify-between gap-1 border-b border-border/60 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.location} • {item.days}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-1">
                        {item.times.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-mono font-medium text-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Schedule Notice */}
              <div className="rounded-2xl border border-border bg-muted/40 p-5 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground text-sm">Product-Specific Hours:</p>
                <p>
                  • <strong className="text-foreground">Breakfast with Lion:</strong> Starts at
                  07:30 WITA (last check-in: 09:30 WITA). Does not follow standard 09:00 park
                  opening.
                </p>
                <p>
                  • <strong className="text-foreground">Night Safari:</strong> Starts at 18:00 WITA
                  (last Walking Night Safari: 19:15 WITA). Operates strictly on an evening schedule.
                </p>
                <p>
                  • <strong className="text-foreground">Safari Legend / Bali Agung:</strong>{" "}
                  Tuesday–Sunday (closed Mondays). Bali Agung performance takes place 15:00–16:00
                  WITA.
                </p>
              </div>
            </div>

            {/* Encounters, Feeding & Recreation */}
            <div className="space-y-6">
              {/* Encounters & Keeper Talks */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Animal Encounters & Keeper Talks
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">Daily Schedule</span>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs">
                  {baliSafariSchedule.animalEncounters.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 p-2.5"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="font-mono text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animal Feeding */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Animal Feeding Times
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    Visitor Activities
                  </span>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs">
                  {baliSafariSchedule.animalFeeding.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 p-2.5"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        {item.days !== "Everyday" && (
                          <p className="text-[10px] text-accent">{item.days}</p>
                        )}
                      </div>
                      <span className="font-mono text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recreation */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Recreation Zones
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">11:00–17:00</span>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs">
                  {baliSafariSchedule.recreation.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/20 p-2.5"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="font-mono text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hub Guidance & Support Card */}
        <section className="container-page pb-4">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Booking Assistance & Advice
                </span>
                <h3 className="font-display text-xl font-semibold sm:text-2xl text-foreground">
                  Need Help Choosing the Right Bali Safari Experience?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you are visiting with young children, looking for Tsavo Lion Restaurant
                  table reservations, or booking tickets for Varuna, our local Bali team is
                  available on WhatsApp for date availability, group rates, and optional private
                  hotel transfers.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <WhatsAppButton
                  experience="Bali Safari & Marine Park"
                  message={exp.whatsappText}
                  label="Chat on WhatsApp"
                  className="w-full sm:w-auto"
                />
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted w-full sm:w-auto"
                >
                  Request an Itinerary
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/bali-safari-marine-park")({
  head: () => experienceHead(exp),
  component: BaliSafariMarineParkPage,
});
