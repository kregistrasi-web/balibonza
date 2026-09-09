import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageHead } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import heroImg from "@/assets/bali-hero.jpg";

const pageTitle = "Nusa Penida Tours & Snorkeling | BaliBonza";

const pageDescription =
  "Book Nusa Penida day tours from Bali, including West Nusa Penida, East Nusa Penida, combination tours and snorkeling. Fast boat transfers and private island transport available.";

export const Route = createFileRoute("/nusa-penida-tours")({
  head: () => {
    const baseHead = pageHead({
      title: pageTitle,
      description: pageDescription,
      path: "/nusa-penida-tours",
    });

    const pageUrl = `${siteConfig.url}/nusa-penida-tours`;

    return {
      ...baseHead,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: pageTitle,
                description: pageDescription,
                url: pageUrl,
                isPartOf: {
                  "@type": "WebSite",
                  name: siteConfig.name,
                  url: siteConfig.url,
                },
                about: {
                  "@type": "TouristDestination",
                  name: "Nusa Penida",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: siteConfig.url,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Nusa Penida Tours",
                    item: pageUrl,
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: NusaPenidaPage,
});

const tours = [
  [
    "West Nusa Penida Tour",
    "The classic west-coast day with the island's best-known viewpoints and beaches.",
  ],
  [
    "East Nusa Penida Tour",
    "Quieter east-coast highlights, cliffs and lagoons.",
  ],
  [
    "Nusa Penida Combination Tour",
    "A longer day covering both sides of the island.",
  ],
  [
    "Nusa Penida Snorkeling",
    "Boat snorkeling stops with equipment and guide, with manta spots subject to sea conditions.",
  ],
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

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Nusa Penida Tours & Snorkeling
          </h1>

          <p className="mt-4 max-w-xl text-surface-foreground/85">
            Book Nusa Penida day tours from Bali with fast boat transfers,
            private island transport and snorkeling options.
          </p>

          <div className="mt-6">
            <WhatsAppButton experience="Nusa Penida Tour" />
          </div>
        </div>
      </section>

      <div className="container-page py-14">
        <h2 className="font-display text-2xl font-semibold">
          Choose Your Nusa Penida Tour
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tours.map(([name, desc]) => (
            <div
              key={name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-lg font-semibold">{name}</h3>

              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

              <p className="mt-4 text-sm font-semibold">Price on request</p>

              <WhatsAppButton
                experience={name}
                label="Ask on WhatsApp"
                variant="outline"
                className="mt-4 px-4 py-2.5"
              />
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-semibold">
          Good to Know
        </h2>

        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>
            Fast boat departures and island road conditions can change with
            the weather.
          </li>
          <li>
            Start times are early; we confirm your pickup time the day before.
          </li>
          <li>
            Manta and snorkeling stops depend on sea conditions on the day.
          </li>
        </ul>
      </div>
    </>
  );
}