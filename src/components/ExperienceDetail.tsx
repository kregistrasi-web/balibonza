import { Link } from "@tanstack/react-router";
import type { Experience } from "@/data/experiences";
import { experiences } from "@/data/experiences";
import { WhatsAppButton } from "./WhatsAppButton";
import { Breadcrumbs } from "./Breadcrumbs";
import { ExperienceCard } from "./ExperienceCard";
import { FaqAccordion } from "./FaqAccordion";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getRelatedZooExperiences(current: Experience, allZoo: Experience[]): Experience[] {
  const candidates = allZoo.filter((e) => e.slug !== current.slug && e.slug !== "bali-zoo");

  if (current.slug === "bali-zoo-tickets") {
    const signatureSlugs = ["breakfast-with-orangutan", "elephant-mud-fun", "capybara-connection"];
    const signatureMap = new Map(candidates.map((c) => [c.slug, c]));
    return signatureSlugs
      .map((slug) => signatureMap.get(slug))
      .filter((e): e is Experience => Boolean(e));
  }

  const keywords = [
    "capybara",
    "orangutan",
    "elephant",
    "behind-closed-doors",
    "breakfast",
    "brunch",
    "mud-fun",
  ].filter((kw) => current.slug.includes(kw));

  const scored = candidates.map((cand, index) => {
    let score = 0;
    for (const kw of keywords) {
      if (cand.slug.includes(kw)) score += 3;
    }
    if (current.slug.includes(cand.slug)) score += 5;
    if (cand.slug.includes(current.slug)) score += 4;
    return { cand, score, index };
  });

  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  return scored.slice(0, 3).map((s) => s.cand);
}

const categoryLinks = {
  "adventure-off-road": { slug: "adventure-off-road", label: "Adventure & Off-Road" },
  "rafting-river-adventures": {
    slug: "rafting-river-adventures",
    label: "Rafting & River Adventures",
  },
  "tanjung-benoa-water-sports": { slug: "water-sports", label: "Water Sports" },
  "wildlife-animal": { slug: "wildlife", label: "Wildlife & Animal Experiences" },
  "island-cultural": { slug: "island-cultural", label: "Island & Cultural Experiences" },
  "scenic-sunrise": { slug: "scenic-sunrise", label: "Scenic & Sunrise Tours" },
} as const;

const intentLinkSlugs: Record<string, string[]> = {
  "bali-zoo-tickets": ["breakfast-with-orangutan", "elephant-mud-fun"],
  "capybara-connection": ["breakfast-with-orangutan-brunch-with-capybara"],
  "elephant-mud-fun": ["breakfast-with-orangutan-elephant-mud-fun"],
  "bali-safari-jungle-hopper": ["bali-safari-night-safari", "varuna-regular-bali"],
  "bali-safari-jungle-hopper-legend": ["bali-safari-night-safari", "varuna-regular-bali"],
  "bali-safari-marine-park": ["bali-safari-night-safari", "varuna-regular-bali"],
};

const intentLinkPaths: Record<string, string> = {
  "breakfast-with-orangutan": "/experiences/bali-zoo-breakfast-with-orangutan",
  "elephant-mud-fun": "/experiences/bali-zoo-elephant-mud-fun",
  "breakfast-with-orangutan-brunch-with-capybara":
    "/experiences/bali-zoo-breakfast-with-orangutan-and-brunch-with-capybara",
  "breakfast-with-orangutan-elephant-mud-fun":
    "/experiences/bali-zoo-breakfast-with-orangutan-and-elephant-mud-fun",
};

export function ExperienceDetail({
  exp,
  children,
}: {
  exp: Experience;
  children?: React.ReactNode;
}) {
  const isSafari = exp.path.startsWith("/bali-safari") || exp.path.startsWith("/varuna");
  const isZoo = exp.path.startsWith("/bali-zoo") || exp.slug === "bali-zoo-park-experience";

  const isLandingPage = exp.slug === "bali-safari-marine-park" || exp.slug === "bali-zoo";

  const zooExperiences = isZoo
    ? experiences.filter(
        (e) => e.path.startsWith("/bali-zoo") && e.slug !== exp.slug && e.slug !== "bali-zoo",
      )
    : [];

  const related = isSafari
    ? experiences
        .filter(
          (e) =>
            (e.path.startsWith("/bali-safari") || e.path.startsWith("/varuna")) &&
            e.slug !== exp.slug &&
            e.slug !== "bali-safari-marine-park",
        )
        .slice(0, isLandingPage ? 11 : 3)
    : isZoo
      ? isLandingPage
        ? zooExperiences.slice(0, 11)
        : getRelatedZooExperiences(
            exp,
            experiences.filter((e) => e.path.startsWith("/bali-zoo")),
          )
      : experiences
          .filter(
            (e) =>
              e.slug !== exp.slug &&
              (!exp.categoryId || e.categoryId === exp.categoryId),
          )
          .slice(0, 3);

  const category = exp.categoryId ? categoryLinks[exp.categoryId] : undefined;
  const categoryBreadcrumb = category
    ? [{ label: category.label, to: `/category/${category.slug}` }]
    : [{ label: "Experiences", to: "/experiences" }];

  const breadcrumbs = [
    ...categoryBreadcrumb,
    ...(isZoo ? [{ label: "Bali Zoo", to: "/bali-zoo" }] : []),
    { label: exp.title },
  ];
  const relatedIntent = (intentLinkSlugs[exp.slug] ?? [related[0]?.slug])
    .map((slug) => experiences.find((experience) => experience.slug === slug))
    .filter((experience): experience is Experience => Boolean(experience));

  return (
    <>
      <section className="relative isolate">
        <img
          src={exp.image}
          alt={exp.alt}
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="container-page flex min-h-[62vh] flex-col justify-end py-14 text-surface-foreground">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {exp.type}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{exp.h1}</h1>
          <p className="mt-4 max-w-2xl text-base text-surface-foreground/85">{exp.short}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton experience={exp.title} message={exp.whatsappText} />
            <Link
              to={isSafari ? "/bali-safari-marine-park" : isZoo ? "/bali-zoo" : "/experiences"}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-surface-foreground hover:bg-white/10"
            >
              {isSafari
                ? "View All Bali Safari Packages"
                : isZoo
                  ? "View All Bali Zoo Experiences"
                  : "Explore Experiences"}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/50">
        <dl className="container-page grid grid-cols-2 gap-6 py-6 text-sm lg:grid-cols-4">
          {[
            ["Price", exp.price],
            ["Duration", exp.duration],
            ["Location", exp.location],
            ["Suitable for", exp.suitableFor],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
              <dd className="mt-1 font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-semibold">
              {exp.slug === "ayung-river-rafting"
                ? "Why Choose This Ayung River Rafting Bali"
                : `Why choose ${exp.title}?`}
            </h2>
            {exp.intro.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Explore more in{" "}
              {category ? (
                <Link
                  to="/category/$category"
                  params={{ category: category.slug }}
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {category.label}
                </Link>
              ) : (
                <Link
                  to="/experiences"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Bali experiences
                </Link>
              )}
              {relatedIntent.length > 0 ? (
                <>
                  <span> Related options include </span>
                  {relatedIntent.map((experience, index) => (
                    <span key={experience.slug}>
                      {index > 0 ? " and " : ""}
                      <Link
                        to={intentLinkPaths[experience.slug] ?? experience.path}
                        className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                      >
                        {experience.title}
                      </Link>
                    </span>
                  ))}
                  .
                </>
              ) : (
                "."
              )}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold">Highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {exp.highlights.map((h) => (
                <li key={h} className="rounded-xl border border-border bg-card p-4 text-sm">
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold">How the experience flows</h2>
            <ol className="mt-4 space-y-3">
              {exp.flow.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-8 sm:grid-cols-2">
            <List title="What's included" items={exp.included} />
            <List title="What's excluded" items={exp.excluded} />
          </section>

          <section className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-semibold">Pickup & transportation</h3>
              <p className="mt-3 text-sm text-muted-foreground">{exp.pickup}</p>
            </div>
            <List title="Experience & safety" items={exp.requirements} />
          </section>

          <section className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
            <h2 className="font-display text-xl font-semibold">Important information</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {exp.important.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold">Gallery</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Photos from {exp.title}.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {(exp.gallery ?? [exp.image, exp.image, exp.image]).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={exp.galleryAlts?.[i] ?? `${exp.title} in Bali — photo ${i + 1}`}
                  width={1920}
                  height={1280}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.dataset.fallbackApplied) return;
                    target.dataset.fallbackApplied = "true";
                    // Fallback to SVG placeholder
                    target.src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none"><rect width="800" height="600" fill="%231b261b"/><rect x="20" y="20" width="760" height="560" rx="16" fill="%23223122" stroke="%23344d34" stroke-width="2"/><g transform="translate(360, 240)" stroke="%2348bb78" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="0" width="80" height="60" rx="8"/><circle cx="25" cy="20" r="8"/><path d="m5 50 25-25 15 15 20-20 10 10"/></g><text x="400" y="340" fill="%23a0aec0" font-family="sans-serif" font-size="16" text-anchor="middle">${exp.title}</text><text x="400" y="365" fill="%23718096" font-family="sans-serif" font-size="13" text-anchor="middle">Bali Adventure</text></svg>`,
                      );
                  }}
                  className="aspect-[3/2] w-full rounded-xl object-cover shadow-sm transition hover:scale-[1.02]"
                />
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">
              Why book {exp.title} with BaliBonza?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm">
              <div className="space-y-1">
                <p className="font-medium text-foreground">
                  {exp.categoryId === "rafting-river-adventures"
                    ? "Trusted Local Operators"
                    : "Official Ticket Vouchers"}
                </p>
                <p className="text-muted-foreground">
                  {exp.categoryId === "rafting-river-adventures"
                    ? "We confirm the selected rafting operator, activity package and availability before you book."
                    : "Direct voucher confirmation from official operators, guaranteed entry upon arrival."}
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Transparent Pricing</p>
                <p className="text-muted-foreground">
                  Published rates in IDR with zero surprise booking surcharges or hidden card fees.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">WhatsApp Local Team</p>
                <p className="text-muted-foreground">
                  Direct support from our local Bali team for scheduling, package advice, and
                  optional private transport.
                </p>
              </div>
            </div>
            {isSafari && exp.slug !== "bali-safari-marine-park" && (
              <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                Looking for other packages or ticket comparisons? Explore our comprehensive{" "}
                <Link
                  to="/bali-safari-marine-park"
                  className="font-medium text-accent underline underline-offset-4 hover:text-accent/80"
                >
                  Bali Safari & Marine Park Packages Guide
                </Link>
                .
              </p>
            )}
            {isZoo && exp.slug !== "bali-zoo" && (
              <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                Looking for other packages or ticket comparisons? Explore our comprehensive{" "}
                <Link
                  to="/bali-zoo"
                  className="font-medium text-accent underline underline-offset-4 hover:text-accent/80"
                >
                  Bali Zoo Experiences Guide
                </Link>
                .
              </p>
            )}
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
            <div className="mt-4">
              <FaqAccordion
                items={exp.faq}
                defaultValue={exp.slug === "ayung-river-rafting" ? "ayung-beginners" : undefined}
              />
            </div>
          </section>

        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="eyebrow">Book this experience</p>
            <p className="mt-2 font-display text-2xl font-semibold">{exp.price}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Final price confirmed for your date and group size.
            </p>
            {exp.priceNote && (
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{exp.priceNote}</p>
            )}
            <WhatsAppButton
              experience={exp.title}
              message={exp.whatsappText}
              className="mt-5 w-full"
            />
            <Link
              to="/contact"
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-muted"
            >
              Request an Itinerary
            </Link>
          </div>
        </aside>
      </div>

      <section className="container-page pb-12">
        <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">Ready to book {exp.title}?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Check availability, final pricing and pickup options with our local Bali team.
            </p>
          </div>
          <WhatsAppButton
            experience={exp.title}
            message={exp.whatsappText}
            className="mt-5 shrink-0 sm:mt-0"
          />
        </div>
      </section>

      {children ? (
        children
      ) : exp.slug === "bali-safari-marine-park" ? (
        <>
          <section className="container-page pb-12">
            <h2 className="font-display text-2xl font-semibold">Safari Experiences</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "bali-safari-jungle-hopper",
                "bali-safari-night-safari",
                "bali-safari-jungle-hopper-legend",
              ].map((slug) => {
                const item = experiences.find((e) => e.slug === slug);
                return item ? <ExperienceCard key={item.slug} exp={item} /> : null;
              })}
            </div>
          </section>

          <section className="container-page pb-12">
            <h2 className="font-display text-2xl font-semibold">Wildlife & Premium Experiences</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "bali-safari-rhino-package",
                "bali-safari-lion-package",
                "bali-safari-breakfast-with-lion",
                "bali-safari-dragon-package",
              ].map((slug) => {
                const item = experiences.find((e) => e.slug === slug);
                return item ? <ExperienceCard key={item.slug} exp={item} /> : null;
              })}
            </div>
          </section>

          <section className="container-page pb-6">
            <h2 className="font-display text-2xl font-semibold">
              Varuna — Underwater Dining & Theatrical Show
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["varuna-regular-bali", "varuna-deluxe-bali", "varuna-premium-bali"].map((slug) => {
                const item = experiences.find((e) => e.slug === slug);
                return item ? <ExperienceCard key={item.slug} exp={item} /> : null;
              })}
            </div>
          </section>
        </>
      ) : (
        <section className="container-page pb-6">
          <h2 className="font-display text-2xl font-semibold">
            {exp.slug === "bali-zoo"
              ? "Explore All Bali Zoo Experiences"
              : isSafari
                ? "Other Bali Safari Packages"
                : isZoo
                  ? "Other Bali Zoo Experiences"
                  : "Related Bali experiences"}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <ExperienceCard key={e.slug} exp={e} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
