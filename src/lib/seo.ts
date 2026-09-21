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
  const safariLandingUrl = absoluteUrl("/bali-safari-marine-park");

  const imageUrl = exp.image ? absoluteUrl(exp.image) : undefined;
  const isSafariProduct = exp.path.startsWith("/bali-safari") || exp.path.startsWith("/varuna");

  // Determine breadcrumb structure: Home -> Bali Safari -> Product (or Home -> Bali Safari for landing, or Home -> Experiences -> Product)
  const breadcrumbElements =
    exp.slug === "bali-safari-marine-park"
      ? [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: exp.title,
            item: safariLandingUrl,
          },
        ]
      : isSafariProduct
        ? [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Bali Safari & Marine Park",
              item: safariLandingUrl,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: exp.title,
              item: url,
            },
          ]
        : [
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
          ];

  // Optional Product / Offer structured data without inventing fake reviews/ratings
  const schemaGraph: Record<string, unknown>[] = [
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
        name: f.q ?? f.question ?? "",
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a ?? f.answer ?? "",
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbElements,
    },
  ];

  // If concrete pricing is available in data, add standard Product/Offer metadata
  const adultPrice = exp.pricing?.websitePrice?.adult;
  const childPrice = exp.pricing?.websitePrice?.child;
  const priceMatch = exp.price && exp.price.match(/Rp\s*([\d.]+)/i);
  if (priceMatch) {
    const rawNumber = priceMatch[1].replace(/\./g, "");
    const hasAdultAndChildPrice = adultPrice !== undefined && childPrice !== undefined;
    schemaGraph.push({
      "@type": "Product",
      name: exp.title,
      description: exp.metaDescription,
      image: imageUrl,
      url,
      brand: {
        "@type": "Brand",
        name: isSafariProduct ? "Bali Safari & Marine Park" : siteConfig.name,
      },
      offers: hasAdultAndChildPrice
        ? {
            "@type": "AggregateOffer",
            url,
            priceCurrency: "IDR",
            lowPrice: childPrice,
            highPrice: adultPrice,
            offerCount: 2,
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "TravelAgency",
              name: siteConfig.name,
              url: homeUrl,
            },
          }
        : {
            "@type": "Offer",
            url,
            priceCurrency: "IDR",
            price: rawNumber,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "TravelAgency",
              name: siteConfig.name,
              url: homeUrl,
            },
          },
    });
  } else {
    // For Price on Request
    schemaGraph.push({
      "@type": "Product",
      name: exp.title,
      description: exp.metaDescription,
      image: imageUrl,
      url,
      brand: {
        "@type": "Brand",
        name: isSafariProduct ? "Bali Safari & Marine Park" : siteConfig.name,
      },
    });
  }

  const metaList: Array<{ title?: string; name?: string; property?: string; content?: string }> = [
    { title: exp.metaTitle },
    { name: "description", content: exp.metaDescription },
    { name: "robots", content: "index, follow" },

    // Open Graph
    { property: "og:title", content: exp.metaTitle },
    { property: "og:description", content: exp.metaDescription },
    { property: "og:type", content: "product" },
    { property: "og:url", content: url },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: exp.metaTitle },
    { name: "twitter:description", content: exp.metaDescription },
  ];

  if (imageUrl) {
    metaList.push({ property: "og:image", content: imageUrl });
    metaList.push({ name: "twitter:image", content: imageUrl });
  }

  return {
    meta: metaList,
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemaGraph,
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
  image = "/src/assets/bali-hero.jpg",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageUrl },
    ],

    links: [{ rel: "canonical", href: url }],
  };
}
