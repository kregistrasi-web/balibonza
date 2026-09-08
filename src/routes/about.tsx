import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageHead } from "@/lib/seo";
import { siteConfig } from "@/config/site";

const pageTitle = "About BaliBonza | Local Bali Activities Team";

const pageDescription =
  "BaliBonza is a local Bali travel and experience booking service arranging adventures, wildlife parks, private tours, transport and island trips.";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: pageTitle,
      description: pageDescription,
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: "About" }]} />

      <h1 className="mt-6 font-display text-4xl font-semibold">
        About {siteConfig.name}
      </h1>

      <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          {siteConfig.name} helps travelers discover Bali through adventure,
          wildlife, family experiences, scenic attractions, private tours,
          transportation and island days.
        </p>

        <p>
          We are a local Bali travel and experience booking service. Instead
          of running one single activity, we work with trusted operators and
          attractions across the island so you can plan several experiences
          with one contact — and one WhatsApp conversation.
        </p>

        <p>
          Attractions such as Bali Zoo and Bali Safari &amp; Marine Park are
          operated by their own management. Our role is to arrange your
          tickets, packages and transport, confirm current pricing, and be
          reachable before and during your experience.
        </p>

        <p>
          Most of our guests come from Australia, the USA, the UK, Canada,
          New Zealand, Singapore, India, the Middle East and Europe — families,
          couples, solo travelers and groups.
        </p>
      </div>

      <div className="mt-8">
        <WhatsAppButton />
      </div>
    </div>
  );
}