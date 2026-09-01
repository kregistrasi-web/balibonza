import atvImg from "@/assets/bali-atv-adventure-jungle-river.jpg";




import zooImg from "@/assets/bali-zoo-animal-experience.jpg";
import safariImg from "@/assets/bali-safari-marine-park.jpg";
import buggyImg from "@/assets/bali-buggy-adventure.jpg";
import swingImg from "@/assets/bali-swing-experience.jpg";

export type CategoryId =
  | "atv-off-road"
  | "wildlife-animal"
  | "swing-scenic"
  | "island-experiences";

export type Experience = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  location: string;
  duration: string;
  type: string;
  suitableFor: string;
  price: string;
  categoryId?: CategoryId;
  highlights: string[];
  flow: string[];
  included: string[];
  excluded: string[];
  pickup: string;
  requirements: string[];
  important: string[];
  faq: { q: string; a: string }[];
  intro: string[];
};

const commonExcluded = [
  "Personal expenses and souvenirs",
  "Gratuities (optional)",
  "Anything not listed under what's included",
];

export const experiences: Experience[] = [
  {
    slug: "bali-atv-adventure",
    path: "/bali-atv-adventure",
    title: "Bali ATV Adventure",
    h1: "Bali ATV Adventure",
    short:
      "Ride a quad through jungle tracks, rice fields and village trails on one of Bali's most popular adventures.",
    metaTitle: "Bali ATV Adventure | Jungle ATV Ride | BaliBonza",
    metaDescription:
      "Book a Bali ATV adventure through jungle tracks and rice fields. Single or tandem quad rides arranged by BaliBonza, with pickup available.",
    image: atvImg,
    alt: "ATV quad bikes riding a jungle track in Bali surrounded by palms and rice fields",
    location: "Ubud area, Bali",
    duration: "Approx. 2 hours riding (confirm on booking)",
    type: "Adventure • Off-road",
    suitableFor: "Couples, friends, families with teens",
    price: "Price on request",
    categoryId: "atv-off-road",
    intro: [
      "A Bali ATV tour is the easiest way to swap the beach for real Bali countryside. You ride an all-terrain quad along dirt tracks that cut between rice fields, plantations and village lanes, with a guide leading the group the whole way.",
      "BaliBonza arranges your Bali ATV ride with trusted local operators, handles the transport, and confirms availability over WhatsApp before you pay anything.",
    ],
    highlights: [
      "Guided jungle and countryside ATV track",
      "Rice field and plantation scenery",
      "Single or tandem quad options",
      "Briefing and safety gear provided by the operator",
      "Optional hotel pickup in popular areas",
    ],
    flow: [
      "Pickup from your hotel or meet directly at the ATV base",
      "Registration, safety briefing and gear fitting",
      "Practice lap to get comfortable with the quad",
      "Guided ride through the track",
      "Shower, change and refreshment at the base",
      "Return transfer to your hotel (if selected)",
    ],
    included: [
      "ATV rental for the booked duration",
      "Guide during the ride",
      "Helmet and basic safety equipment",
      "Refreshment at the base",
      "Booking assistance and confirmation",
    ],
    excluded: ["Insurance upgrades where offered", ...commonExcluded],
    pickup:
      "Hotel pickup can be arranged for most areas of South Bali and Ubud. Share your hotel name on WhatsApp and we will confirm the pickup time and any transport surcharge.",
    requirements: [
      "Minimum age policy applies — confirmed with the operator at booking",
      "Riders should be in reasonable physical condition",
      "Closed shoes recommended",
      "Bring a change of clothes; tracks can be muddy",
    ],
    important: [
      "Track routes and inclusions depend on the operator selected for your date.",
      "We confirm the exact price for your group size and date before you book.",
    ],
    faq: [
      {
        q: "Do I need a driving licence for a Bali ATV tour?",
        a: "A licence is not normally required as the ride is on private tracks, but operator policies vary. We confirm the rules for your chosen operator before booking.",
      },
      {
        q: "Can two people share one ATV?",
        a: "Tandem quads are usually available. Tell us your group size on WhatsApp and we will quote both single and tandem options.",
      },
      {
        q: "What should I wear for ATV in Bali?",
        a: "Clothes you don't mind getting dirty, plus closed shoes. Bring a change of clothes and a towel.",
      },
      {
        q: "Is hotel pickup included?",
        a: "Pickup is available in many areas. Availability and any extra cost depend on your location, so we confirm it when you book.",
      },
    ],
  },
  {
    slug: "bali-zoo",
    path: "/bali-zoo",
    title: "Bali Zoo Experiences",
    h1: "Bali Zoo Experiences",
    short:
      "Family-friendly animal encounters and day visits at Bali Zoo, arranged and booked for you.",
    metaTitle: "Bali Zoo Tickets & Experiences | BaliBonza",
    metaDescription:
      "Bali Zoo tickets, animal encounters and family experiences arranged by BaliBonza. Tell us your dates on WhatsApp for availability and pricing.",
    image: zooImg,
    alt: "Family watching an elephant during an animal encounter at a tropical zoo in Bali",
    location: "Gianyar, Bali",
    duration: "Half day (flexible)",
    type: "Wildlife • Family",
    suitableFor: "Families with children, first-time visitors",
    price: "Price on request",
    categoryId: "wildlife-animal",
    intro: [
      "Bali Zoo is one of the island's most popular family attractions, with tropical gardens, animal habitats and a range of add-on encounters.",
      "BaliBonza is an independent booking and travel service. We arrange your Bali Zoo tickets and transport — Bali Zoo is owned and operated by its own management.",
    ],
    highlights: [
      "Bali Zoo admission arranged for your dates",
      "Optional animal encounter experiences where offered",
      "Breakfast experiences subject to availability",
      "Family and group friendly",
      "Private transport can be added",
    ],
    flow: [
      "Confirm your date, guest numbers and preferred experience",
      "We check availability with the attraction",
      "Optional hotel pickup by private car",
      "Enjoy your visit and any booked encounters",
      "Return transfer if transport was included",
    ],
    included: [
      "Bali Zoo entry for the package you select",
      "Booking assistance and confirmation",
      "Private transport when added to your package",
    ],
    excluded: [
      "Encounter add-ons not selected at booking",
      "Meals unless part of the chosen package",
      ...commonExcluded,
    ],
    pickup:
      "Private transport from most South Bali and Ubud hotels can be added. Send your hotel name on WhatsApp for a quote.",
    requirements: [
      "Children's pricing rules follow the attraction's own policy",
      "Comfortable walking shoes and sun protection recommended",
    ],
    important: [
      "Specific encounters such as breakfast with orangutans or capybara experiences are only bookable when offered by the attraction on your date.",
      "Opening hours and ticket prices are set by Bali Zoo and confirmed at the time of booking.",
    ],
    faq: [
      {
        q: "Does BaliBonza operate Bali Zoo?",
        a: "No. Bali Zoo is a third-party attraction. We are a Bali travel and booking service that arranges tickets, experiences and transport for you.",
      },
      {
        q: "How much are Bali Zoo tickets?",
        a: "Ticket prices depend on the package, guest ages and the date. We send you current pricing on WhatsApp rather than publishing figures that may be out of date.",
      },
      {
        q: "Is Bali Zoo good for young children?",
        a: "It is a popular family attraction with walkable grounds and animal viewing areas. We can suggest the best experience mix for your children's ages.",
      },
    ],
  },
  {
    slug: "bali-safari-marine-park",
    path: "/bali-safari-marine-park",
    title: "Bali Safari & Marine Park",
    h1: "Bali Safari & Marine Park",
    short:
      "Safari journeys, wildlife viewing and family attractions at Bali Safari & Marine Park.",
    metaTitle: "Bali Safari & Marine Park Tickets | BaliBonza",
    metaDescription:
      "Bali Safari & Marine Park tickets and family packages arranged by BaliBonza, with optional private transport. Ask for availability on WhatsApp.",
    image: safariImg,
    alt: "Guests in a safari vehicle watching zebras in an open savannah enclosure at Bali Safari",
    location: "Gianyar, Bali",
    duration: "Full or half day",
    type: "Wildlife • Family",
    suitableFor: "Families, groups, wildlife lovers",
    price: "Price on request",
    categoryId: "wildlife-animal",
    intro: [
      "Bali Safari & Marine Park combines a safari journey through open animal habitats with shows, rides and family facilities in one large park.",
      "We handle the booking side: admission packages, guest numbers and transport. The park itself is operated by Bali Safari & Marine Park.",
    ],
    highlights: [
      "Safari journey through open habitats",
      "Wide range of family attractions in one location",
      "Multiple package levels available",
      "Private transport can be included",
      "Suitable for a full-day family outing",
    ],
    flow: [
      "Tell us your date, guests and preferred package",
      "We confirm availability and total price",
      "Optional hotel pickup by private car",
      "Enjoy the safari and park attractions",
      "Return transfer if included",
    ],
    included: [
      "Park admission for the selected package",
      "Booking assistance and confirmation",
      "Private transport when added",
    ],
    excluded: [
      "Premium add-ons not selected at booking",
      "Meals unless part of the chosen package",
      ...commonExcluded,
    ],
    pickup:
      "Private car pickup is available from most South Bali and Ubud hotels. Share your hotel on WhatsApp for a quote.",
    requirements: [
      "Package rules, age bands and height limits follow the park's own policy",
      "Bring sun protection and comfortable shoes",
    ],
    important: [
      "Package contents, show times and prices are set by the park and confirmed when you book.",
      "We never publish estimated ticket prices — you always get the current figure before paying.",
    ],
    faq: [
      {
        q: "Which Bali Safari package should we choose?",
        a: "It depends on your group and how long you want to stay. Tell us your ages and interests on WhatsApp and we will explain the current options.",
      },
      {
        q: "Can you include transport from our hotel?",
        a: "Yes, private car transfers can be added to any package for most areas of Bali.",
      },
      {
        q: "Is BaliBonza the park operator?",
        a: "No. Bali Safari & Marine Park is a third-party attraction; we are the travel service that arranges your tickets and transport.",
      },
    ],
  },
  {
    slug: "bali-buggy-adventure",
    path: "/bali-buggy-adventure",
    title: "Bali Buggy Adventure",
    h1: "Bali Buggy Adventure",
    short:
      "Off-road buggy driving through jungle tracks, rice fields and village scenery.",
    metaTitle: "Bali Buggy Adventure | Off Road Buggy Bali | BaliBonza",
    metaDescription:
      "Bali buggy adventure through off-road jungle tracks and rice fields. Two-seat and four-seat buggy options arranged by BaliBonza.",
    image: buggyImg,
    alt: "Off-road buggy driving a dirt track between Bali rice fields with palm trees behind",
    location: "Ubud area, Bali",
    duration: "Approx. 2 hours riding (confirm on booking)",
    type: "Adventure • Off-road",
    suitableFor: "Couples, friends, families driving together",
    price: "Price on request",
    categoryId: "atv-off-road",
    intro: [
      "A Bali buggy adventure gives you more space and a shared cockpit compared with a quad, so couples and families can ride together while still getting the full off-road experience.",
      "We match you with a buggy operator that fits your group size and location, then confirm the schedule with you directly.",
    ],
    highlights: [
      "Off-road buggy driving on guided tracks",
      "Jungle, rice field and village scenery",
      "Two-seat and larger buggies where available",
      "Briefing and safety gear from the operator",
      "Optional hotel pickup",
    ],
    flow: [
      "Pickup or arrive at the buggy base",
      "Registration, briefing and safety gear",
      "Guided off-road route",
      "Shower and refreshment at the base",
      "Return transfer if selected",
    ],
    included: [
      "Buggy rental for the booked duration",
      "Guide during the ride",
      "Helmet and basic safety equipment",
      "Refreshment at the base",
      "Booking assistance and confirmation",
    ],
    excluded: ["Insurance upgrades where offered", ...commonExcluded],
    pickup:
      "Hotel pickup can be arranged from most South Bali and Ubud areas. Message us with your hotel for confirmation.",
    requirements: [
      "Minimum age and driver policies follow the operator's rules",
      "Closed shoes recommended",
      "Bring a change of clothes",
    ],
    important: [
      "Track routes vary between operators and are confirmed for your date.",
      "Pricing depends on buggy type and group size.",
    ],
    faq: [
      {
        q: "What is the difference between buggy and ATV in Bali?",
        a: "A buggy seats two or more people side by side with a roll cage, while an ATV is a single quad you straddle. Buggies suit couples and families who want to ride together.",
      },
      {
        q: "Can children join a Bali buggy tour?",
        a: "Children can often ride as passengers depending on the operator's age policy. We confirm the rules before booking.",
      },
      {
        q: "Is it very muddy?",
        a: "Tracks are dirt and can be muddy, especially in the wet season. Bring a change of clothes.",
      },
    ],
  },
  {
    slug: "bali-swing",
    path: "/bali-swing",
    title: "Bali Swing Experience",
    h1: "Bali Swing Experience",
    short:
      "Jungle swings, nests and photo spots overlooking Bali's valleys and terraces.",
    metaTitle: "Bali Swing Experience & Tour | BaliBonza",
    metaDescription:
      "Book a Bali Swing experience with jungle and valley views, photo spots and optional private transport, arranged by BaliBonza.",
    image: swingImg,
    alt: "Woman on a jungle swing above a green Bali valley with terraces and morning mist",
    location: "Ubud area, Bali",
    duration: "1–2 hours at the park",
    type: "Scenic • Photo experience",
    suitableFor: "Couples, families, photo lovers",
    price: "Price on request",
    categoryId: "swing-scenic",
    intro: [
      "Bali Swing parks combine swings of different heights with nests, platforms and viewpoints set above green valleys — the classic Bali photo experience.",
      "We book your entry package, arrange transport if needed, and confirm exactly which swings and props are included at the park you choose.",
    ],
    highlights: [
      "Swings and photo platforms with valley views",
      "Package options from single swing to multi-swing entry",
      "Romantic and family-friendly setups",
      "Dresses and props available at most parks",
      "Easy to combine with an Ubud day tour",
    ],
    flow: [
      "Confirm your date, guests and package",
      "Optional hotel pickup by private car",
      "Arrive at the swing park and check in",
      "Enjoy the swings, nests and photo spots",
      "Continue to another Ubud stop or return to your hotel",
    ],
    included: [
      "Swing park entry for the selected package",
      "Safety harness and staff assistance at the park",
      "Booking assistance and confirmation",
      "Private transport when added",
    ],
    excluded: [
      "Professional photography packages unless selected",
      "Dress rental where charged separately",
      ...commonExcluded,
    ],
    pickup:
      "Private transport from South Bali or Ubud can be added to the booking. Send your hotel name for a quote.",
    requirements: [
      "Weight and age limits follow each park's safety policy",
      "Flowing dresses photograph well; bring or rent one at the park",
      "Secure loose items before swinging",
    ],
    important: [
      "Views, swing counts and props differ by park; we confirm what your chosen package includes.",
      "Morning visits are usually quieter and cooler.",
    ],
    faq: [
      {
        q: "Is Bali Swing safe?",
        a: "Parks use safety harnesses and staff operate every swing. Follow the staff instructions and each park's weight and age limits.",
      },
      {
        q: "What should I wear for the Bali Swing?",
        a: "A long flowing dress is the classic look and many parks rent them. Wear something you can move in comfortably.",
      },
      {
        q: "Can we combine the swing with other Ubud stops?",
        a: "Yes. It pairs well with rice terraces, waterfalls or an ATV ride on the same day — ask us for a combined itinerary.",
      },
    ],
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug)!;
}

export const categories = [
  {
    title: "Adventure",
    description: "ATV, buggy, tubing and water sports across Bali.",
    items: ["Bali ATV", "Bali Buggy", "Water Sports", "Tubing"],
    to: "/bali-atv-adventure",
  },
  {
    title: "Wildlife & Family",
    description: "Zoo visits, safari journeys and animal encounters.",
    items: ["Bali Zoo", "Bali Safari & Marine Park", "Animal experiences"],
    to: "/bali-zoo",
  },
  {
    title: "Scenic & Instagrammable",
    description: "Swings, rice terraces, waterfalls and viewpoints.",
    items: ["Bali Swing", "Rice terraces", "Waterfalls", "Viewpoints"],
    to: "/bali-swing",
  },
  {
    title: "Private Tours",
    description: "Ubud, culture, temples and fully custom day tours.",
    items: ["Ubud tours", "Temple tours", "Cultural tours", "Custom day tours"],
    to: "/bali-private-tours",
  },
  {
    title: "Islands & Snorkeling",
    description: "Nusa Penida day trips, snorkeling and manta spots.",
    items: ["West Nusa Penida", "East Nusa Penida", "Snorkeling"],
    to: "/nusa-penida-tours",
  },
  {
    title: "Transportation",
    description: "Airport transfers, private drivers and fast boats.",
    items: ["Airport transfer", "Private driver", "Fast boat"],
    to: "/bali-private-tours",
  },
];
