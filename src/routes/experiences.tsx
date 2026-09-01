import { createFileRoute, Link } from "@tanstack/react-router";
import { experiences, categories } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/experiences")({
  head: () =>
    pageHead({
      title: "Bali Activities & Experiences | BaliBonza",
      description:
        "Browse Bali activities: ATV and buggy adventures, Bali Zoo, Bali Safari, Bali Swing, private tours, snorkeling, Nusa Penida trips and transport.",
      path: "/experiences",
    }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: "Experiences" }]} />
      <h1 className="mt-6 font-display text-4xl font-semibold">Bali Activities & Experiences</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Everything we arrange in one place — adventure, wildlife, scenic days, private tours,
        islands and transport. Message us on WhatsApp for availability and pricing.
      </p>

      {categories.map((c, categoryIndex) => {
        const categoryExperiences = experiences.filter((e) => e.categoryId === c.id);

        return (
          <section key={c.id} className="mt-12">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryExperiences.length > 0 ? (
                categoryExperiences.map((exp, i) => (
                  <ExperienceCard
                    key={exp.slug}
                    exp={exp}
                    priority={categoryIndex === 0 && i === 0}
                  />
                ))
              ) : (
                <Link
                  to={c.to}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-accent/50"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold">{c.items[0]}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                    Explore {c.title}
                    <svg
                      className="ml-1 size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

