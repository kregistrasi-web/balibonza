import type { Experience } from "@/data/experiences";
import { siteConfig } from "@/config/site";

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function experienceHead(exp: Experience) {
  const url = absoluteUrl(exp.path);
  const homeUrl = siteConfig.url;
  const experiencesUrl = absoluteUrl("/experiences");

  return {
    meta: [
      { title: exp.metaTitle },
      { name: "description", content: exp.metaDescription },

      { property: "og:title", content: exp.metaTitle },
      { property: "og:description", content: exp.metaDescription },
      { property: "og:type", content: "product" },
      { property: "og:url", content: url },

      { name: "twitter:card", content: "summary_large_image" },
    ],

    links: [{ rel: "canonical", href: url }],

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
              url,
              provider: {
                "@type": "TravelAgency",
                name: siteConfig.name,
                url: homeUrl,
              },
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
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            },

            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: homeUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Experiences",
                  item: experiencesUrl,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: exp.title,
                  item: url,
                },
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
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },

      { name: "twitter:card", content: "summary_large_image" },
    ],

    links: [{ rel: "canonical", href: url }],
  };
}