import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageHead } from "@/lib/seo";
import swingImg from "@/assets/bali-swing-experience.jpg";

const pageTitle = "Private Bali Tours & Driver | BaliBonza";

const pageDescription =
  "Book private Bali tours with your own driver for Ubud, temples, waterfalls, rice terraces, cultural trips, airport transfers and custom Bali itineraries.";

export const Route = createFileRoute("/bali-private-tours")({
  head: () =>
    pageHead({
      title: pageTitle,
      description: pageDescription,
      path: "/bali-private-tours",
    }),
  component: PrivateToursPage,
});

const tours = [
  [
    "Ubud Private Tour",
    "Rice terraces, monkey forest, art villages and Ubud centre at your pace.",
  ],
  [
    "Bali Temple Tour",
    "Visit iconic temples with a driver who knows the timing and dress code.",
  ],
  [
    "Bali Waterfall Tour",
    "Chase two or three waterfalls in one relaxed day.",
  ],
  [
    "Bali Nature & Instagram Tour",
    "Viewpoints, terraces and photo stops arranged around you.",
  ],
  [
    "Custom Bali Day Tour",
    "Tell us what you want to see and we build the route.",
  ],
];

const transport = [
  [
    "Bali Private Driver",
    "Car with driver by the hour or full day, fuel included.",
  ],
  [
    "Airport Transfer",
    "Meet and greet at Ngurah Rai with fixed pricing.",
  ],
  ["Hotel Transfer", "Point-to-point transfers anywhere in Bali."],
  [
    "Fast Boat Transfers",
    "Boat tickets to Nusa Penida, Lembongan and the Gilis.",
  ],
];

const water = [
  ["Snorkeling", "Reef snorkeling trips with equipment and guide."],
  [
    "Water Sports",
    "Jet ski, banana boat, parasailing and combo packages.",
  ],
  [
    "Nusa Penida Snorkeling",
    "Snorkel stops around Nusa Penida on a boat day.",
  ],
];

function Group({ title, items }: { title: string; items: string[][] }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([name, desc]) => (
          <div
            key={name}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-display text-lg font-semibold">{name}</h3>

            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

            <p className="mt-4 text-sm font-semibold text-accent-foreground/80">
              Price on request
            </p>

            <WhatsAppButton
              experience={name}
              label="Ask on WhatsApp"
              variant="outline"
              className="mt-4 px-4 py-2.5"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function PrivateToursPage() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={swingImg}
          alt="Green Bali valley with rice terraces seen from a jungle viewpoint near Ubud"
          width={1600}
          height={1000}
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover"
        />

        <div className="absolute inset-0 -z-10 hero-scrim" />

        <div className="container-page flex min-h-[50vh] flex-col justify-end py-12 text-surface-foreground">
          <Breadcrumbs items={[{ label: "Private Bali Tours" }]} />

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Private Bali Tours
          </h1>

          <p className="mt-4 max-w-xl text-surface-foreground/85">
            Your own car, driver and route — culture, nature and transport
            across Bali.
          </p>

          <div className="mt-6">
            <WhatsAppButton experience="Private Bali Tour" />
          </div>
        </div>
      </section>

      <div className="container-page pb-8">
        <Group title="Private tours" items={tours} />

        <Group title="Transportation" items={transport} />

        <Group title="Water & ocean experiences" items={water} />

        <p className="mt-10 text-sm text-muted-foreground">
          Prices are confirmed for your dates, group size and pickup area
          before you book. Nothing is charged until you approve the quote.
        </p>
      </div>
    </>
  );
}