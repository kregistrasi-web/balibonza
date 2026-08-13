import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageHead } from "@/lib/seo";
import heroImg from "@/assets/bali-hero.jpg";

export const Route = createFileRoute("/nusa-penida-tours")({
  head: () =>
    pageHead({
      title: "Nusa Penida Tours & Snorkeling | BaliBonza",
      description:
        "West, east and combination Nusa Penida day tours plus snorkeling trips and fast boat transfers, arranged by BaliBonza.",
      path: "/nusa-penida-tours",
    }),
  component: NusaPenidaPage,
});

const tours = [
  ["West Nusa Penida Tour", "The classic west-coast day with the island's best-known viewpoints and beaches."],
  ["East Nusa Penida Tour", "Quieter east-coast highlights, cliffs and lagoons."],
  ["Nusa Penida Combination Tour", "A longer day covering both sides of the island."],
  ["Nusa Penida Snorkeling", "Boat snorkeling stops with equipment and guide, manta spots subject to conditions."],
];

function NusaPenidaPage() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Cliffs and turquoise water on the Nusa Penida coastline seen from the air"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="container-page flex min-h-[50vh] flex-col justify-end py-12 text-surface-foreground">
          <Breadcrumbs items={[{ label: "Nusa Penida Tours" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-5xl">Nusa Penida Tours</h1>
          <p className="mt-4 max-w-xl text-surface-foreground/85">
            Island day trips with fast boat transfer, private car and driver on the island.
          </p>
          <div className="mt-6">
            <WhatsAppButton experience="Nusa Penida Tour" />
          </div>
        </div>
      </section>

      <div className="container-page py-14">
        <h2 className="font-display text-2xl font-semibold">Choose your island day</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tours.map(([name, desc]) => (
            <div key={name} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-4 text-sm font-semibold">From $XX</p>
              <WhatsAppButton experience={name} label="Ask on WhatsApp" variant="outline" className="mt-4 px-4 py-2.5" />
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-semibold">Good to know</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Fast boat departures and island road conditions can change with the weather.</li>
          <li>Start times are early; we confirm your pickup time the day before.</li>
          <li>Manta and snorkeling stops depend on sea conditions on the day.</li>
        </ul>
      </div>
    </>
  );
}
