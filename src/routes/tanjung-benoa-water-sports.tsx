import { createFileRoute, Link } from "@tanstack/react-router";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";

const waterSportsProducts = experiences.filter(
  (exp) => exp.categoryId === "tanjung-benoa-water-sports"
);

export const Route = createFileRoute("/tanjung-benoa-water-sports")({
  component: TanjungBenoaWaterSportsPage,
});

function TanjungBenoaWaterSportsPage() {
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
          Tanjung Benoa Water Sports
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Exciting water sports in Tanjung Benoa, including jet ski,
          parasailing, banana boat, flyboard, sea walker and more.
        </p>
      </div>

      {waterSportsProducts.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {waterSportsProducts.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
            />
          ))}
        </section>
      ) : (
        <p className="text-muted-foreground">
          Water sports experiences are coming soon.
        </p>
      )}
    </main>
  );
}
