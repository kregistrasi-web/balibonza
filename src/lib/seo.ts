import type { Experience } from "@/data/experiences";
import { siteConfig } from "@/config/site";

export function experienceHead(exp: Experience) {
  return {
    meta: [
      { title: exp.metaTitle },
      { name: "description", content: exp.metaDescription },
      { property: "og:title", content: exp.metaTitle },
      { property: "og:description", content: exp.metaDescription },
      { property: "og:type", content: "product" },
      { property: "og:url", content: exp.path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: exp.path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristTrip",
              name: exp.title,
              description: exp.metaDescription,
              touristType: exp.suitableFor,
              provider: { "@type": "TravelAgency", name: siteConfig.name },
              itinerary: {
                "@type": "ItemList",
                itemListElement: exp.flow.map((step, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: step,
                })),
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: exp.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Experiences", item: "/experiences" },
                { "@type": "ListItem", position: 3, name: exp.title, item: exp.path },
              ],
            },
          ],
        }),
      },
    ],
  };
}

export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
