import atvImg from "@/assets/images/ubud_atv_hero_1789047247321.jpg";
import atvGalleryJungle from "@/assets/bali-atv-gallery-jungle-track.jpg";
import atvGalleryRiver from "@/assets/bali-atv-gallery-river-canyon.jpg";
import atvGalleryCave from "@/assets/bali-atv-gallery-cave-tunnel.jpg";
import ayungRiverHero from "@/assets/ayung-river-rafting-bali.hero.webp";
import ayungRiverGallery1 from "@/assets/ayung-river-rafting-bali (2).webp";
import ayungRiverGallery2 from "@/assets/ayung-river-rafting-bali (3).webp";
import ayungRiverGallery3 from "@/assets/ayung-river-rafting-bali (5).webp";
import zooImg from "@/assets/images/bali_zoo_capybara_1789048952498.jpg";
import zooGalleryBreakfastOrangutan from "@/assets/bali-zoo-gallery-breakfast-with-orangutans.jpg";
import zooGalleryElephantMudFun from "@/assets/bali-zoo-gallery-elephant-mud-fun.jpg";
import zooGalleryElephantExplorer from "@/assets/bali-zoo-gallery-elephant-expedition-explorer.jpg";
import safariImg from "@/assets/images/bali_safari_tram_1789049772966.jpg";
import safariGalleryNight from "@/assets/bali-safari-gallery-night-safari-tiger.jpg";
import safariGalleryElephant from "@/assets/bali-safari-gallery-elephant-presentation.jpg";
import safariGalleryTsavo from "@/assets/bali-safari-gallery-tsavo-lion-restaurant.jpg";
import buggyImg from "@/assets/bali-buggy-adventure.jpg";
import swingImg from "@/assets/bali-swing-experience.jpg";
import jeepImg from "@/assets/images/jeep_sunrise_batur_1789047617993.jpg";
import { baliSafariExperiences } from "./bali-safari";
import { baliZooExperiences } from "./bali-zoo";
import { baliAdventureWaterProducts } from "./bali-adventure-watersports";

export type CategoryId =
  | "adventure-off-road"
  | "rafting-river-adventures"
  | "tanjung-benoa-water-sports"
  | "wildlife-animal"
  | "island-cultural"
  | "scenic-sunrise";

export type PriceVariant = {
  id?: string;
  label: string;
  session?: "day" | "evening";
  packageType?: "regular" | "deluxe" | "premium";
  adultPublishRate?: number;
  childPublishRate?: number;
  adultPrice: number;
  childPrice?: number;
  adultCommission?: number;
  childCommission?: number;
};

export type Experience = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  gallery?: string[];
  galleryAlts?: string[];
  alt: string;
  location: string;
  duration: string;
  type: string;
  suitableFor: string;
  price: string;
  priceNote?: string;
  pricing?: {
    publishRate?: { adult?: number; child?: number };
    websitePrice?: { adult?: number; child?: number };
    commission?: { adult?: number; child?: number };
    variants?: PriceVariant[];
  };
  categoryId?: CategoryId;
  subcategory?: string;
  /** Optional custom WhatsApp pre-filled message for this experience. */
  whatsappText?: string;
  highlights: string[];
  flow: string[];
  included: string[];
  excluded: string[];
  pickup: string;
  requirements: string[];
  important: string[];
  faq: {
    id?: string;
    q?: string;
    a?: string;
    question?: string;
    answer?: string;
  }[];
  intro: string[];
};

const commonExcluded = [
  "Personal expenses and souvenirs",
  "Gratuities (optional)",
  "Anything not listed under what's included",
];

const adventureWaterExperiences: Experience[] =
  baliAdventureWaterProducts.map((product) => {
    const isWaterSports =
      product.category === "Tanjung Benoa Water Sports";

    const categoryId: CategoryId = isWaterSports
      ? "tanjung-benoa-water-sports"
      : "rafting-river-adventures";

    return {
      slug: product.slug,
      path: `/experiences/${product.slug}`,
      title: product.title,
      h1: product.title,
      short: product.short,
      metaTitle: `${product.title} | BaliBonza`,
      metaDescription: `${product.title} in Bali. Check availability, pricing and booking details with BaliBonza.`,
      image: product.image,
      alt: product.alt,
      location: isWaterSports
        ? "Tanjung Benoa, Bali"
        : "Bali",
      duration: "Price and duration on request",
      type: isWaterSports
        ? "Water Sports"
        : "Adventure",
      suitableFor: "Couples, friends and families",
      price: "Price on request",
      categoryId,
      subcategory: product.category,
      whatsappText:
        `Hello BaliBonza,\n\nI would like to book the ${product.title}.\n\nPlease send me availability, total price, and booking details.\n\nThank you.`,
      intro: [
        `${product.title} is one of the experiences BaliBonza can arrange in Bali.`,
        "Send us your preferred date and number of guests on WhatsApp and we will confirm availability, price and booking details.",
      ],
      highlights: [
        product.title,
        isWaterSports
          ? "Tanjung Benoa water sports location"
          : "Bali outdoor adventure experience",
        "Booking assistance and confirmation",
        "Availability confirmed before booking",
      ],
      flow: [
        "Send your preferred date and number of guests",
        "BaliBonza checks availability and current price",
        "Receive booking confirmation and activity details",
        "Enjoy your Bali experience",
      ],
      included: [
        "Activity according to the selected product",
        "Booking assistance and confirmation",
      ],
      excluded: [...commonExcluded],
      pickup:
        "Pickup availability depends on the operator and your hotel location. Share your hotel details on WhatsApp and we will confirm the options.",
      requirements: [
        "Follow the operator's safety instructions",
        "Bring comfortable clothing suitable for the activity",
        "Final requirements are confirmed before booking",
      ],
      important: [
        "Availability and pricing are confirmed before booking.",
        "Activity conditions may depend on weather and operator availability.",
      ],
      faq: [
        {
          q: `How do I book ${product.title}?`,
          a: "Send us your preferred date, number of guests and hotel location on WhatsApp. We will check availability and confirm the current price.",
        },
        {
          q: "Is hotel pickup included?",
          a: "Pickup depends on the activity and your location. We confirm available pickup options before booking.",
        },
        {
          q: "Can I check availability before paying?",
          a: "Yes. BaliBonza confirms availability and booking details before you proceed.",
        },
      ],
      ...(product.slug === "ayung-river-rafting"
        ? {
            path: "/ayung-river-rafting",
            title: "Ayung River Rafting Bali",
            h1: "Ayung River Rafting Bali",
            short:
              "Paddle through jungle gorges, river rapids and lush tropical scenery on Bali's classic Ayung River rafting adventure.",
            metaTitle: "Ayung River Rafting Bali | Price & Booking | BaliBonza",
            metaDescription:
              "Enjoy Ayung River Rafting Bali in Ubud with a professional guide, full equipment and family-friendly options. Adult Rp500.000, Child Rp450.000. Book via WhatsApp.",
            image: ayungRiverHero,
            gallery: [ayungRiverGallery1, ayungRiverGallery2, ayungRiverGallery3],
            galleryAlts: [
              "Rafting boat navigating the Ayung River rapids in Bali",
              "Ayung River rafting surrounded by Ubud jungle and rocky cliffs",
              "Guests enjoying an Ayung River rafting adventure in Bali",
            ],
            alt: "Ayung River rafting through Bali's tropical jungle and river valley",
            location: "Ubud, Bali",
            duration: "Approx. 2 hours on the river (confirm on booking)",
            type: "Adventure - White-water rafting",
            suitableFor: "Couples, friends and active families",
            price: "Adult: Rp500.000 | Child (5-12 years): Rp450.000",
            priceNote:
              "Final payment is charged in IDR. Foreign currency estimates are for reference only and may vary with the daily exchange rate.",
            pricing: {
              websitePrice: { adult: 500000, child: 450000 },
            },
            whatsappText:
              "Hello BaliBonza,\n\nI would like to book Ayung River Rafting Bali.\n\nPlease send me availability, total price, and hotel pickup options.\n\nThank you.",
            intro: [
              "Ayung River Rafting Bali is a guided white-water adventure through the jungle valley north of Ubud. Paddle past carved river cliffs, tropical forest and waterfalls while your river guide leads the boat through a sequence of rapids.",
              "BaliBonza checks the latest operator availability, rafting package and transport options for your date, then confirms the final price and booking details through WhatsApp.",
            ],
            highlights: [
              "Guided white-water rafting on the Ayung River",
              "Jungle valley, river cliffs and waterfall scenery",
              "Professional river guide and safety briefing",
              "Rafting equipment supplied by the operator",
              "Optional hotel pickup from Ubud and South Bali",
              "Family and group booking support",
            ],
            flow: [
              "Pickup from your hotel or meet at the rafting base",
              "Registration, changing and safety briefing",
              "Walk down to the river and board the raft",
              "Paddle through guided rapids and jungle scenery",
              "Finish the river route, shower and change at the base",
              "Return transfer to your hotel if selected",
            ],
            included: [
              "Rafting activity for the booked duration",
              "Professional rafting guide",
              "Raft, paddle, helmet and life jacket",
              "Safety briefing and changing facilities",
              "Shower and basic refreshment at the base",
              "Lunch after the rafting activity; vegetarian options may be available upon request",
              "Booking assistance and confirmation",
            ],
            excluded: [
              "Starter/operator accident coverage is not automatically included; confirm whether it is included in the selected package before booking",
              "Personal travel and medical insurance, including optional upgrades",
              "Hotel pickup unless selected and confirmed",
              ...commonExcluded,
            ],
            pickup:
              "Hotel pickup can be arranged from Ubud and selected areas of South Bali. Share your hotel name on WhatsApp and we will confirm the pickup time, route and any transport surcharge.",
            requirements: [
              "Participants should be comfortable in moving water and able to follow guide instructions",
              "Minimum age is 5 years old; final eligibility and weight limits depend on the operator and river conditions",
              "Wear swimwear or quick-dry clothing and secure footwear",
              "Bring sunscreen, a change of clothes and a towel",
            ],
            important: [
              "Rafting routes and departure times may change because of weather and river conditions.",
              "Starter safety coverage is operator- and package-dependent, so we confirm its status before booking. Consider personal travel insurance that covers white-water rafting.",
              "The exact operator package, price and pickup coverage are confirmed before booking.",
              "Family and group rates are available on request via WhatsApp.",
              "Final payment is charged in IDR. Any foreign currency estimate is for reference only and may vary with the daily exchange rate.",
              "Guests with halal, vegetarian, Jain or other dietary requirements should inform us before booking so availability can be confirmed with the operator.",
              "Guests should disclose relevant medical conditions or pregnancy before booking.",
            ],
            faq: [
              {
                id: "ayung-beginners",
                question: "Is Ayung River Rafting suitable for beginners?",
                answer: "Yes. The activity is guided and begins with a safety briefing and equipment check. Previous rafting experience is not required, but you should be comfortable following instructions and being in moving water.",
              },
              {
                id: "ayung-what-to-wear",
                question: "What should I wear for Ayung River Rafting Bali?",
                answer: "Wear swimwear or quick-dry clothing with secure footwear that can get wet. Bring sunscreen, a towel and dry clothes for after the river trip. Avoid loose jewellery and valuables.",
              },
              {
                id: "ayung-insurance",
                question: "Is starter safety or accident coverage included?",
                answer: "It is not automatically assumed to be included. Coverage depends on the rafting operator and package, so BaliBonza confirms whether starter operator coverage is included before booking. Personal travel and medical insurance for rafting remains the guest's responsibility.",
              },
              {
                id: "ayung-pickup",
                question: "Is hotel pickup included?",
                answer: "Pickup is available from Ubud and selected Bali areas, depending on the operator and package. We confirm the coverage and any extra transport cost before booking.",
              },
              {
                id: "ayung-children",
                question: "Can children join Ayung River Rafting?",
                answer: "Children aged 5 and above may be accepted, subject to the operator's final age, height and weight requirements and the river conditions on the day. Send us the ages in your group so we can confirm the suitable package.",
              },
              {
                id: "ayung-group-booking",
                question: "Are family and group rates available?",
                answer: "Yes. Family and group rates may be available depending on the date, group size and selected package. Send us your number of adults, children and preferred date on WhatsApp so we can check the best available option.",
              },
            ],
          }
        : {}),
    };
  });

export const experiences: Experience[] = [
  {
    slug: "bali-atv-ride-adventure",
    path: "/experiences/bali-atv-ride-adventure",
    title: "Bali ATV Ride Adventure",
    h1: "Bali ATV Ride Adventure",
    short:
      "Ride a quad through jungle tracks, rice fields and village trails on one of Bali's most popular adventures.",
    metaTitle: "Bali ATV Ride Adventure | Jungle ATV Ride | BaliBonza",
    metaDescription:
      "Book a Bali ATV ride adventure through jungle tracks and rice fields. Single or tandem quad rides arranged by BaliBonza, with pickup available.",
    image: atvImg,
    gallery: [atvGalleryJungle, atvGalleryRiver, atvGalleryCave],
    galleryAlts: [
      "ATV quad bike riding through tropical jungle tracks in Ubud Bali",
      "Off-road ATV river canyon water splash trail in Ubud Bali",
      "ATV rider entering an authentic natural cave tunnel in Bali",
    ],
    alt: "Wisata Bali ATV Ride Adventure menerobos trek lumpur dan gua di Ubud",
    location: "Ubud area, Bali",
    duration: "Approx. 1,5 hours riding (confirm on booking)",
    type: "Adventure â€¢ Off-road",
    suitableFor: "Couples, friends, families with teens",
    price: "Price on request",
    categoryId: "adventure-off-road",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali ATV Adventure.\n\nPlease send me availability, total price, and hotel pickup options.\n\nThank you.",
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
      "Minimum age policy applies â€” confirmed with the operator at booking",
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
    slug: "bali-zoo-park-experience",
    path: "/experiences/bali-zoo-park-experience",
    title: "Bali Zoo Park Experience",
    h1: "Bali Zoo Park Experience",
    short:
      "Family-friendly animal encounters and day visits at Bali Zoo, arranged and booked for you.",
    metaTitle: "Bali Zoo Park Experience | BaliBonza",
    metaDescription:
      "Bali Zoo park experience, animal encounters and family experiences arranged by BaliBonza. Tell us your dates on WhatsApp for availability and pricing.",
    image: zooImg,
    gallery: [zooGalleryBreakfastOrangutan, zooGalleryElephantMudFun, zooGalleryElephantExplorer],
    galleryAlts: [
      "Bali Zoo Breakfast with Orangutans experience at Gayo Restaurant in Gianyar Bali",
      "Bali Zoo Elephant Mud Fun interactive bathing and mud spa conservation experience",
      "Bali Zoo Elephant Explorer expedition walking through tropical jungle sanctuary",
    ],
    alt: "Interaksi seru dengan capybara di Bali Zoo Park Experience Gianyar",
    location: "Gianyar, Bali",
    duration: "Half day (flexible)",
    type: "Wildlife â€¢ Family",
    suitableFor: "Families with children, first-time visitors",
    price: "Price on request",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-general",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo tickets/experiences.\n\nPlease send me availability, package options, and total price for my group.\n\nThank you.",
    intro: [
      "Bali Zoo is one of the island's most popular family attractions, with tropical gardens, animal habitats and a range of add-on encounters.",
      "BaliBonza is an independent booking and travel service. We arrange your Bali Zoo tickets and transport â€” Bali Zoo is owned and operated by its own management.",
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
    path: "/experiences/bali-safari-marine-park",
    title: "Bali Safari & Marine Park Ticket / Tour",
    h1: "Bali Safari & Marine Park Ticket / Tour",
    short: "Safari journeys, wildlife viewing and family attractions at Bali Safari & Marine Park.",
    metaTitle: "Bali Safari & Marine Park Ticket / Tour | BaliBonza",
    metaDescription:
      "Book Bali Safari & Marine Park tickets and tours. Compare Jungle Hopper, Night Safari, Safari Legend, Breakfast with Lions and Varuna. Instant WhatsApp assistance.",
    image: safariImg,
    gallery: [safariGalleryNight, safariGalleryElephant, safariGalleryTsavo],
    galleryAlts: [
      "Bali Safari and Marine Park Night Safari tiger feeding experience from a caged tram",
      "Bali Safari and Marine Park educational elephant conservation presentation in Gianyar",
      "Tsavo Lion Restaurant dining experience with close-up lion views at Bali Safari Park",
    ],
    alt: "Pengalaman Bali Safari Tram Tour melihat satwa liar dari dekat",
    location: "Gianyar, Bali",
    duration: "Full or half day",
    type: "Wildlife â€¢ Family",
    suitableFor: "Families, groups, wildlife lovers",
    price: "Price on request",
    categoryId: "wildlife-animal",
    subcategory: "core-safari-admission",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Safari & Marine Park.\n\nPlease send me package options, availability, and total price.\n\nThank you.",
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
      "We never publish estimated ticket prices â€” you always get the current figure before paying.",
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
    slug: "bali-buggy-tour",
    path: "/experiences/bali-buggy-tour",
    title: "Bali Buggy Tour",
    h1: "Bali Buggy Tour",
    short: "Off-road buggy driving through jungle tracks, rice fields and village scenery.",
    metaTitle: "Bali Buggy Tour | Off Road Buggy Bali | BaliBonza",
    metaDescription:
      "Bali buggy tour through off-road jungle tracks and rice fields. Two-seat and four-seat buggy options arranged by BaliBonza.",
    image: buggyImg,
    alt: "Petualangan Bali Buggy Tour menyusuri trek off-road dan pedesaan Bali",
    location: "Ubud area, Bali",
    duration: "Approx. 2 hours riding (confirm on booking)",
    type: "Adventure â€¢ Off-road",
    suitableFor: "Couples, friends, families driving together",
    price: "Price on request",
    categoryId: "adventure-off-road",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali Buggy Adventure.\n\nPlease send me availability, total price, and hotel pickup options.\n\nThank you.",
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
    short: "Jungle swings, nests and photo spots overlooking Bali's valleys and terraces.",
    metaTitle: "Bali Swing Experience & Tour | BaliBonza",
    metaDescription:
      "Book a Bali Swing experience with jungle and valley views, photo spots and optional private transport, arranged by BaliBonza.",
    image: swingImg,
    alt: "Spot foto populer Bali Swing Experience dengan latar pemandangan lembah hijau",
    location: "Ubud area, Bali",
    duration: "1â€“2 hours at the park",
    type: "Scenic â€¢ Photo experience",
    suitableFor: "Couples, families, photo lovers",
    price: "Price on request",
    categoryId: "scenic-sunrise",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali Swing Experience.\n\nPlease send me availability, package options, and total price.\n\nThank you.",
    intro: [
      "Bali Swing parks combine swings of different heights with nests, platforms and viewpoints set above green valleys â€” the classic Bali photo experience.",
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
        a: "Yes. It pairs well with rice terraces, waterfalls or an ATV ride on the same day â€” ask us for a combined itinerary.",
      },
    ],
  },
  {
    slug: "bali-jeep-sunrise-tour-mount-batur",
    path: "/experiences/bali-jeep-sunrise-tour-mount-batur",
    title: "Bali Jeep Sunrise Tour – Mount Batur",
    h1: "Bali Jeep Sunrise Tour – Mount Batur",
    short:
      "Sunrise adventure by 4WD Jeep around Mount Batur, with volcanic landscapes and scenic viewpoints.",
    metaTitle: "Bali Jeep Sunrise Tour – Mount Batur | BaliBonza",
    metaDescription:
      "Book a Bali Jeep sunrise tour around Mount Batur. 4WD Jeep ride across volcanic landscapes and scenic viewpoints, arranged by BaliBonza.",
    image: jeepImg,
    alt: "Tur Bali Jeep Sunrise Gunung Batur menyaksikan matahari terbit dari atas jeep 4WD",
    location: "Mount Batur, Bali",
    duration: "Half day",
    type: "Adventure â€¢ Off-road",
    suitableFor: "Couples, friends, families, sunrise lovers",
    price: "Price on request",
    categoryId: "adventure-off-road",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali Jeep Sunrise â€“ Mount Batur.\n\nPlease send me availability, total price, and hotel pickup options.\n\nThank you.",
    intro: [
      "The Bali Jeep sunrise experience takes you up the slopes of Mount Batur in a 4WD Jeep, so you can watch the sunrise over the volcano and lake without a strenuous hike.",
      "BaliBonza arranges your Mount Batur Jeep trip with trusted local operators, handles the early-morning pickup, and confirms availability over WhatsApp before you pay anything.",
    ],
    highlights: [
      "Sunrise from a Mount Batur viewpoint reached by 4WD Jeep",
      "Drive across volcanic black lava fields and sand",
      "Scenic viewpoints over the volcano, lake and caldera",
      "No hiking required â€” the Jeep does the climbing",
      "Optional hotel pickup from South Bali and Ubud",
    ],
    flow: [
      "Early-morning pickup from your hotel or meeting point",
      "Arrive at the Jeep base and meet your driver-guide",
      "4WD ride up the volcanic slopes in the dark",
      "Watch sunrise from a scenic viewpoint",
      "Explore the black lava fields and photo stops",
      "Return to the base and transfer back to your hotel (if selected)",
    ],
    included: [
      "4WD Jeep ride with driver-guide",
      "Sunrise viewpoint visit at Mount Batur",
      "Booking assistance and confirmation",
      "Private transport when added to your package",
    ],
    excluded: ["Meals and drinks unless part of the chosen package", ...commonExcluded],
    pickup:
      "Early-morning hotel pickup can be arranged for most areas of South Bali and Ubud. Share your hotel name on WhatsApp and we will confirm the pickup time and any transport surcharge.",
    requirements: [
      "Warm layer recommended â€” it is cold before sunrise",
      "Closed shoes and comfortable clothing",
      "Suitable for most ages; not a strenuous activity",
    ],
    important: [
      "Sunrise visibility depends on weather conditions on the day.",
      "We confirm the exact price for your group size and date before you book.",
    ],
    faq: [
      {
        q: "Do I need to hike to see the Mount Batur sunrise?",
        a: "No. The 4WD Jeep takes you up the volcanic slopes to a sunrise viewpoint, so there is no trekking involved.",
      },
      {
        q: "What time does the Jeep sunrise tour start?",
        a: "Pickup is in the early hours of the morning so you reach the viewpoint before sunrise. We confirm the exact pickup time for your hotel location when you book.",
      },
      {
        q: "What should I wear for the Mount Batur Jeep tour?",
        a: "Bring a warm layer or jacket, as it is cold on the mountain before sunrise, plus comfortable closed shoes.",
      },
      {
        q: "Is hotel pickup included?",
        a: "Pickup is available in many areas. Availability and any extra cost depend on your location, so we confirm it when you book.",
      },
    ],
  },
  ...adventureWaterExperiences,
  ...baliSafariExperiences,
  ...baliZooExperiences,
];

export function getExperience(slug: string) {
  const normalized = slug.replace(/^\/experiences\//, "");
  const legacyAliases: Record<string, string> = {
    "bali-atv-adventure": "bali-atv-ride-adventure",
    "bali-buggy-adventure": "bali-buggy-tour",
    "bali-jeep-sunrise": "bali-jeep-sunrise-tour-mount-batur",
    "lazy-river-tubing": "bali-lazy-river-tubing",
    "tubing-adventure": "ubud-river-tubing-adventure",
    "ayung-river-rafting-ubud": "ayung-river-rafting",
    "tanjung-benoa-jet-ski": "jet-ski-ride-bali",
    "tanjung-benoa-parasailing": "parasailing-adventure-bali",
    "tanjung-benoa-banana-boat": "banana-boat-ride",
    "tanjung-benoa-flying-fish": "flying-fish-water-sport",
    "tanjung-benoa-rolling-donut": "rolling-donut-ride",
    "tanjung-benoa-flyboard": "flyboard-bali-experience",
    "tanjung-benoa-sea-walker": "sea-walker-bali",
    "tanjung-benoa-snorkeling": "snorkeling-tour-bali",
    "tanjung-benoa-scuba-diving": "scuba-diving-bali",
    "bali-zoo": "bali-zoo-park-experience",
    "bali-zoo-breakfast-with-orangutan": "breakfast-with-orangutan",
    "bali-zoo-elephant-mud-fun": "elephant-mud-fun",
    "bali-zoo-breakfast-with-orangutan-and-brunch-with-capybara":
      "breakfast-with-orangutan-brunch-with-capybara",
    "bali-zoo-breakfast-with-orangutan-and-elephant-mud-fun":
      "breakfast-with-orangutan-elephant-mud-fun",
  };

  const resolvedSlug = legacyAliases[normalized] ?? normalized;
  return experiences.find((e) => e.slug === resolvedSlug || e.path === `/experiences/${resolvedSlug}`)!;
}

export const categories = [
  {
    id: "adventure-off-road",
    slug: "adventure-off-road",
    title: "Adventure & Off-Road",
    description: "Quad rides, buggy tours and sunrise 4WD adventures through Bali's rugged landscapes.",
    items: [
      "Bali ATV Ride Adventure",
      "Bali Buggy Tour",
      "Bali Jeep Sunrise Tour – Mount Batur",
      "Mount Batur Sunrise Hiking",
    ],
    to: "/experiences/bali-atv-ride-adventure",
  },
  {
    id: "rafting-river-adventures",
    slug: "rafting-river-adventures",
    title: "Rafting & River Adventures",
    description: "Ubud and Bali river trips with rafting, tubing and scenic jungle water experiences.",
    items: [
      "Ayung River Rafting Bali",
      "Telaga Waja River Rafting",
      "Bali Lazy River Tubing",
      "Ubud River Tubing Adventure",
    ],
    to: "/ayung-river-rafting",
  },
  {
    id: "tanjung-benoa-water-sports",
    slug: "water-sports",
    title: "Water Sports",
    description: "High-energy ocean activities and adventure sports in Bali's most popular water sports zone.",
    items: [
      "Jet Ski Ride Bali",
      "Parasailing Adventure Bali",
      "Banana Boat Ride",
      "Flying Fish Water Sport",
      "Rolling Donut Ride",
      "Flyboard Bali Experience",
      "Sea Walker Bali",
      "Snorkeling Tour Bali",
      "Scuba Diving Bali",
    ],
    to: "/experiences/jet-ski-ride-bali",
  },
  {
    id: "wildlife-animal",
    slug: "wildlife",
    title: "Wildlife & Animal Experiences",
    description: "Safari parks, zoo experiences and up-close wildlife encounters across Bali.",
    items: [
      "Bali Safari & Marine Park Ticket / Tour",
      "Bali Zoo Park Experience",
      "Bali Wildlife & Animal Encounters",
    ],
    to: "/experiences/bali-safari-marine-park",
  },
  {
    id: "island-cultural",
    slug: "island-cultural",
    title: "Island & Cultural Experiences",
    description: "Island hopping, day tours and easy coastal escapes designed for Bali travellers.",
    items: ["Nusa Penida Day Tour", "Nusa Lembongan Day Trip"],
    to: "/nusa-penida-tours",
  },
  {
    id: "scenic-sunrise",
    slug: "scenic-sunrise",
    title: "Scenic & Sunrise Tours",
    description: "Photo spots, scenic viewpoints and sunrise moments with Bali's most memorable landscapes.",
    items: ["Bali Swing Experience", "Mount Batur Sunrise Hiking"],
    to: "/bali-swing",
  },
];

