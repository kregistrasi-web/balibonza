import { Link } from "@tanstack/react-router";
import type { Experience } from "@/data/experiences";
import { experiences } from "@/data/experiences";
import { WhatsAppButton } from "./WhatsAppButton";
import { Breadcrumbs } from "./Breadcrumbs";
import { ExperienceCard } from "./ExperienceCard";

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

export function ExperienceDetail({ exp }: { exp: Experience }) {
  const related = experiences.filter((e) => e.slug !== exp.slug).slice(0, 3);

  return (
    <>
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
        <div className="container-page flex min-h-[62vh] flex-col justify-end py-14 text-surface-foreground">
          <Breadcrumbs
            items={[{ label: "Experiences", to: "/experiences" }, { label: exp.title }]}
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {exp.type}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{exp.h1}</h1>
          <p className="mt-4 max-w-2xl text-base text-surface-foreground/85">{exp.short}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton experience={exp.title} message={exp.whatsappText} />
            <Link
              to="/experiences"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-surface-foreground hover:bg-white/10"
            >
              Explore Experiences
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
              Why choose this {exp.title.toLowerCase()}
            </h2>
            {exp.intro.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
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
              <h3 className="font-display text-lg font-semibold">Pickup information</h3>
              <p className="mt-3 text-sm text-muted-foreground">{exp.pickup}</p>
            </div>
            <List title="Requirements & safety" items={exp.requirements} />
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
              Photos of {exp.title} and the surrounding area in Bali.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {(exp.gallery ?? [exp.image, exp.image, exp.image]).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${exp.title} in Bali — photo ${i + 1}`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
            <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
              {exp.faq.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold">Reviews</h2>
            <p className="mt-3 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
              Verified guest reviews for this experience will appear here once our Google and
              Tripadvisor listings are connected. We do not publish unverified testimonials.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="eyebrow">Book this experience</p>
            <p className="mt-2 font-display text-2xl font-semibold">{exp.price}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Final price confirmed for your date and group size.
            </p>
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

      <section className="container-page pb-6">
        <h2 className="font-display text-2xl font-semibold">Related Bali experiences</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((e) => (
            <ExperienceCard key={e.slug} exp={e} />
          ))}
        </div>
      </section>
    </>
  );
}
