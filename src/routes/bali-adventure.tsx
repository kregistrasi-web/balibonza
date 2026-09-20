import { createFileRoute, Link } from "@tanstack/react-router";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";

const adventureProducts = experiences.filter(
  (exp) => exp.categoryId === "bali-adventure"
);

export const Route = createFileRoute("/bali-adventure")({
  component: BaliAdventurePage,
});

function BaliAdventurePage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-10 max-w-3xl">
        <Link
          to="/experiences"
          className="mb-4 inline-block text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          ← All Experiences
        </Link>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bali Adventure Experiences
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          River tubing and rafting adventures across Bali, from relaxed
          river experiences to exciting white-water adventures.
        </p>
      </div>

      {adventureProducts.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adventureProducts.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
            />
          ))}
        </section>
      ) : (
        <p className="text-muted-foreground">
          Adventure experiences are coming soon.
        </p>
      )}
    </main>
  );
}
