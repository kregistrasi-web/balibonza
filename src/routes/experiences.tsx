import { createFileRoute } from "@tanstack/react-router";
import { experiences, categories } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/experiences")({
  head: () =>
    pageHead({
      title: "Bali Activities & Experiences | KitKat Bali Tour",
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

      <h2 className="mt-12 font-display text-2xl font-semibold">Top experiences</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.slug} exp={exp} priority={i === 0} />
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold">Browse by category</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
