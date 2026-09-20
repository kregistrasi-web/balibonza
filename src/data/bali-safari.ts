import safariImg from "@/assets/images/bali_safari_tram_1789049772966.jpg";
import safariTsavoImg from "@/assets/images/safari_tsavo_lion_1789050179195.jpg";
import safariNightFeedingImg from "@/assets/images/safari_night_feeding_1789050140809.jpg";
import safariGalleryNight from "@/assets/bali-safari-gallery-night-safari-tiger.jpg";
import safariGalleryElephant from "@/assets/bali-safari-gallery-elephant-presentation.jpg";
import safariGalleryTsavo from "@/assets/bali-safari-gallery-tsavo-lion-restaurant.jpg";
import varunaRegularHero from "@/assets/varuna-regular-bali-card.jpg";
import varunaRegularCard from "@/assets/varuna-regular-bali-card.jpg";
import varunaRegularGallery1 from "@/assets/varuna-regular-bali-gallery-1.jpg";
import varunaRegularGallery2 from "@/assets/varuna-regular-bali-gallery-2.jpg";
import varunaRegularGallery3 from "@/assets/varuna-regular-bali-gallery-3.jpg";
import varunaDeluxeHero from "@/assets/varuna-deluxe-bali-card.jpg";
import varunaDeluxeCard from "@/assets/varuna-deluxe-bali-card.jpg";
import varunaDeluxeGallery1 from "@/assets/varuna-deluxe-bali-gallery-1.jpg";
import varunaDeluxeGallery2 from "@/assets/varuna-deluxe-bali-gallery-2.jpg";
import varunaDeluxeGallery3 from "@/assets/varuna-deluxe-bali-gallery-3.jpg";
import varunaPremiumHero from "@/assets/varuna-premium-bali-card.jpg";
import varunaPremiumCard from "@/assets/varuna-premium-bali-card.jpg";
import varunaPremiumGallery1 from "@/assets/varuna-premium-bali-gallery-1.jpg";
import varunaPremiumGallery2 from "@/assets/varuna-premium-bali-gallery-2.jpg";
import varunaPremiumGallery3 from "@/assets/varuna-premium-bali-gallery-3.jpg";
import type { Experience } from "./experiences";

const commonExcluded = [
  "Personal expenses and souvenirs",
  "Gratuities (optional)",
  "Anything not listed under what's included",
];

export const baliSafariExperiences: Experience[] = [
  {
    slug: "bali-safari-rhino-package",
    path: "/bali-safari-rhino-package",
    title: "Bali Safari Rhino Package",
    h1: "Bali Safari Rhino Package (VIP Experience)",
    short:
      "The ultimate VIP all-inclusive Bali Safari experience featuring unlimited safari journeys, elephant ride, gourmet lunch at Tsavo Lion, and front-row show seats.",
    metaTitle: "Bali Safari Rhino Package VIP Tickets & Tour | BaliBonza",
    metaDescription:
      "Book the VIP Bali Safari Rhino Package. Includes unlimited safari tram rides, elephant ride, Tsavo Lion Restaurant lunch, show seats, and Bali hotel transfers.",
    image: safariTsavoImg,
    gallery: [safariGalleryTsavo, safariImg, safariGalleryElephant],
    galleryAlts: [
      "Tsavo Lion Restaurant gourmet lunch overlooking majestic lions at Bali Safari",
      "Air-conditioned safari tram touring open savannah habitats",
      "Elephant safari ride and educational presentation Gianyar",
    ],
    alt: "Sensasi makan siang unik bersama singa di Tsavo Lion Restaurant Bali Safari",
    location: "Gianyar, Bali",
    duration: "09:00–17:00 WITA",
    type: "Wildlife • All-Inclusive VIP",
    suitableFor: "VIP travelers, families, luxury couples",
    price: "Adult: Rp1.662.500 • Child: Rp1.425.000",
    pricing: {
      publishRate: { adult: 1750000, child: 1500000 },
      websitePrice: { adult: 1662500, child: 1425000 },
      commission: { adult: 87500, child: 75000 },
    },
    categoryId: "wildlife-animal",
    subcategory: "vip-inclusive-dining",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali Safari Rhino Package.\n\nPlease send me VIP inclusions, availability, and total pricing.\n\nThank you.",
    intro: [
      "The Rhino Package stands as Bali Safari's premier daytime luxury safari tier. Designed for guests wanting priority access, gourmet dining, and every top attraction without queues.",
      "Enjoy unlimited safari tram journeys with express lane boarding, a scenic elephant ride, front-row VIP seating for cultural and animal performances, and a fine dining lunch surrounded by lions at Tsavo Lion Restaurant.",
    ],
    highlights: [
      "Top-tier VIP admission with express queue privileges",
      "Unlimited daytime Safari Journey tram rides",
      "Guided elephant ride experience",
      "Sumptuous lunch at the renowned Tsavo Lion Restaurant",
      "VIP seating at the Bali Agung Theatre presentation (when operational)",
      "Exclusive souvenir and welcome drink upon arrival",
    ],
    flow: [
      "Arrive at Bali Safari Park via private hotel transfer or private car",
      "VIP reception greeting with welcome beverage and package itinerary briefing",
      "Express priority boarding for the open savannah Safari Journey",
      "Enjoy the private elephant ride experience and feed gentle herbivores",
      "Relax over a gourmet multi-course lunch inside Tsavo Lion Restaurant",
      "Take front-row reserved seats at the flagship animal and cultural shows",
      "Afternoon leisure at the water park or browsing safari boutique souvenirs",
    ],
    included: [
      "VIP Bali Safari Park admission & express check-in",
      "Unlimited Safari Journey with priority express lane",
      "Elephant ride experience",
      "Set menu lunch at Tsavo Lion Restaurant next to the lion pride",
      "Animal educational presentation, Tiger show, and Elephant show",
      "VIP seating at theatrical shows (subject to park schedule)",
      "Fresh water park access and souvenir gift",
    ],
    excluded: [
      "Alcoholic beverages at Tsavo Lion Restaurant",
      "Personal safari boutique purchases",
      ...commonExcluded,
    ],
    pickup:
      "Private VIP round-trip transfer from major Bali tourist hubs (Nusa Dua, Kuta, Seminyak, Sanur, Ubud) can be included. Specify your hotel during WhatsApp booking.",
    requirements: [
      "Smart casual attire recommended for Tsavo Lion Restaurant",
      "Camera with full battery for close-up wildlife moments",
    ],
    important: [
      "Official operating hours: 09:00–17:00 WITA. Safari Journey: 09:00–17:15 (Toraja Terminal).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Seating at Tsavo Lion Restaurant window tables is popular; booking in advance ensures optimal lunch slots.",
      "Theatrical production schedules (such as Bali Agung) depend on seasonal park programming (Tuesday–Sunday).",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "Why choose the Rhino Package over standard safari tickets?",
        a: "The Rhino Package offers full VIP treatment including express boarding lanes, an elephant ride, full lunch at Tsavo Lion Restaurant, premium show seating, and unlimited safari journeys.",
      },
      {
        q: "Is lunch at Tsavo Lion Restaurant included?",
        a: "Yes, a delicious set menu lunch at Tsavo Lion Restaurant where you dine alongside roaming lions behind secure panoramic glass is included.",
      },
      {
        q: "Are hotel transfers included in the Rhino package?",
        a: "We can arrange seamless private vehicle transfers directly from your villa or hotel as part of your complete Rhino Package booking.",
      },
    ],
  },
  {
    slug: "bali-safari-lion-package",
    path: "/bali-safari-lion-package",
    title: "Bali Safari Lion Package",
    h1: "Bali Safari Lion Package with Tsavo Lunch",
    short:
      "A comprehensive safari day package featuring park admission, safari tram journey, animal presentations, and a delicious lunch at Tsavo Lion Restaurant.",
    metaTitle: "Bali Safari Lion Package Tickets with Tsavo Lunch | BaliBonza",
    metaDescription:
      "Book the Bali Safari Lion Package. Includes full park admission, safari journey tram, animal presentations, and lunch at Tsavo Lion Restaurant. WhatsApp booking.",
    image: safariTsavoImg,
    gallery: [safariGalleryTsavo, safariImg, safariGalleryNight],
    galleryAlts: [
      "Tsavo Lion Restaurant dining room with lion enclosure views at Bali Safari",
      "Safari tram exploring wilderness zones with free-roaming wildlife",
      "Night safari tiger encounter cage vehicle at Bali Safari",
    ],
    alt: "Sensasi makan siang unik bersama singa di Tsavo Lion Restaurant Bali Safari",
    location: "Gianyar, Bali",
    duration: "09:00–17:00 WITA",
    type: "Wildlife • Dining Experience",
    suitableFor: "Families, foodies, animal enthusiasts",
    price: "Adult: Rp1.045.000 • Child: Rp807.500",
    pricing: {
      publishRate: { adult: 1100000, child: 850000 },
      websitePrice: { adult: 1045000, child: 807500 },
      commission: { adult: 55000, child: 42500 },
    },
    categoryId: "wildlife-animal",
    subcategory: "vip-inclusive-dining",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali Safari Lion Package.\n\nPlease check date availability and send me total ticket price with lunch.\n\nThank you.",
    intro: [
      "The Lion Package brings together the signature highlights of Bali Safari along with an unforgettable dining experience at Tsavo Lion Restaurant.",
      "Marvel at zebras, rhinos, and hippos on the safari tram, be captivated by educational animal presentations, and sit down to an appetizing lunch right alongside Africa's apex predator.",
    ],
    highlights: [
      "Full park access to Bali Safari & Marine Park Gianyar",
      "Signature Safari Journey through wildlife habitats",
      "Included lunch at the iconic Tsavo Lion Restaurant",
      "Access to the Elephant Presentation, Tiger Presentation, and Animal Show",
      "Official operating hours: 09:00–17:00 WITA",
    ],
    flow: [
      "Arrive at Bali Safari and collect your Lion Package entry passes",
      "Embark on the Safari Journey tram ride through open animal enclosures",
      "Attend the engaging Animal Presentation and majestic Tiger Show",
      "Indulge in a relaxing lunch at Tsavo Lion Restaurant overlooking the lions",
      "Watch the inspiring Elephant Educational Presentation",
      "Enjoy afternoon park exhibits or browse safari gift shops before departing",
    ],
    included: [
      "1x Bali Safari general admission",
      "1x Safari Journey tram tour",
      "Lunch at Tsavo Lion Restaurant",
      "Animal educational presentation",
      "Tiger & Elephant conservation presentations",
    ],
    excluded: [
      "Elephant ride (available in Rhino package)",
      "Personal photos and animal feeding vouchers",
      ...commonExcluded,
    ],
    pickup:
      "Door-to-door private hotel transfers can be arranged with our friendly Balinese drivers across all resort regions.",
    requirements: [
      "Casual comfortable clothes and walking shoes",
      "Sun protection (sunscreen, sunglasses, umbrella)",
    ],
    important: [
      "Official operating hours: 09:00–17:00 WITA. Safari Journey: 09:00–17:15 (Toraja Terminal).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Lunch meal vouchers are redeemable during restaurant serving hours at Tsavo Lion Restaurant.",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "What makes the Lion Package special?",
        a: "It combines complete park access with a memorable meal inside Tsavo Lion Restaurant, making it one of Bali Safari's most popular family packages.",
      },
      {
        q: "Does the Lion Package include an elephant ride?",
        a: "No, the Lion Package focuses on the safari tram, presentations, and Tsavo lunch. If you wish to ride an elephant, consider the Rhino Package.",
      },
      {
        q: "Can dietary restrictions be accommodated at Tsavo Lion Restaurant?",
        a: "Yes, vegetarian and Halal-friendly meal options are available upon request when ordering.",
      },
    ],
  },
  {
    slug: "bali-safari-night-safari",
    path: "/bali-safari-night-safari",
    title: "Bali Safari Night Safari",
    h1: "Bali Safari Night Safari Adventure",
    short:
      "Experience the thrills of the nocturnal wilderness from a specially designed caged tram, followed by an exhilarating fire dance show and BBQ dinner.",
    metaTitle: "Bali Safari Night Safari Tickets & BBQ Dinner | BaliBonza",
    metaDescription:
      "Experience Bali Safari Night Safari: caged tram predator feeding, live Afrika! Rhythm of Fire show, and BBQ dinner. Book with BaliBonza on WhatsApp.",
    image: safariNightFeedingImg,
    gallery: [safariGalleryNight, safariImg, safariGalleryTsavo],
    galleryAlts: [
      "Night safari specially caged vehicle with meat tongs feeding tigers after dark",
      "Safari park daytime habitat view in Gianyar Bali",
      "Tsavo restaurant ambient dining area at Bali Safari",
    ],
    alt: "Atraksi Bali Night Safari memberi makan harimau di malam hari dari trem khusus",
    location: "Gianyar, Bali",
    duration: "Starts 18:00 WITA (Last Walking Night Safari: 19:15)",
    type: "Wildlife • Nocturnal Adventure",
    suitableFor: "Adventure seekers, couples, families with older kids",
    price: "Adult: Rp1.140.000 • Child: Rp931.000",
    pricing: {
      publishRate: { adult: 1200000, child: 980000 },
      websitePrice: { adult: 1140000, child: 931000 },
      commission: { adult: 60000, child: 49000 },
    },
    categoryId: "wildlife-animal",
    subcategory: "special-evening-encounters",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Safari Night Safari.\n\nPlease check evening availability and send me pricing with BBQ dinner.\n\nThank you.",
    intro: [
      "When the sun sets over Gianyar, Bali Safari transforms into a thrilling nocturnal jungle. The Night Safari invites daring travelers into a specially fortified caged vehicle to witness apex predators up close in the dark.",
      "Feel your heart race as tigers and lions prowl atop and around the cage while expert keepers conduct live feeding. Conclude your nocturnal journey with the dramatic 'Afrika! Rhythm of Fire' dance show and a BBQ dinner under the tropical night sky.",
    ],
    highlights: [
      "Caged safari tram expedition through predator territory at night",
      "Hand-feeding encounters with nocturnal wildlife and predators",
      "Spectacular live 'Afrika! Rhythm of Fire' fire-dance performance",
      "BBQ dinner at Nkuchiro Bar & Grill included",
      "Night walking tour accompanied by knowledgeable park naturalists",
    ],
    flow: [
      "Evening hotel pickup and scenic drive to Bali Safari Park Gianyar",
      "Arrive for evening registration and activity start at 18:00 WITA (last walk-in safari at 19:15 WITA)",
      "Guided night walk through nocturnal animal habitats",
      "Board the secure caged tram into the predator enclosures for live feeding",
      "Watch the high-energy Rhythm of Fire dance and drumming performance",
      "Enjoy BBQ dinner at Nkuchiro Bar & Grill",
      "Relax in your private air-conditioned vehicle for the ride back to your hotel",
    ],
    included: [
      "Night Safari park admission",
      "1x Caged tram Night Safari journey with predator encounter",
      "Welcome drink",
      "BBQ dinner at Nkuchiro Bar & Grill",
      "Afrika! Rhythm of Fire dance show",
      "Park insurance coverage",
    ],
    excluded: [
      "Daytime park admission and daytime presentations",
      "Alcoholic drinks and specialty mocktails",
      ...commonExcluded,
    ],
    pickup:
      "Evening hotel transfers can be pre-arranged with BaliBonza private transport, ensuring a relaxed journey back to your hotel after dinner.",
    requirements: [
      "No camera flash permitted during the night safari tram journey to protect animal eyesight",
      "Insect repellent and comfortable evening attire recommended",
    ],
    important: [
      "Night Safari starts at 18:00 WITA. Last Walking Night Safari: 19:15 WITA.",
      "Does NOT operate during daytime hours 09:00–17:00.",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Night Safari runs strictly on an evening schedule with set tram dispatch batches. Advance reservations are essential.",
      "Children must stay seated within the caged tram interior at all times.",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "What time does the Bali Safari Night Safari start?",
        a: "Night Safari operating hours are 18:00–21:00 WITA. The activity starts at 18:00 WITA, and the last walk-in safari is at 19:15 WITA.",
      },
      {
        q: "Is the caged tram safe during predator feeding?",
        a: "Yes, the vehicle is constructed with heavy-duty steel safety cages tested to withstand large carnivores under strict international zoo safety standards.",
      },
      {
        q: "Is dinner included in the Night Safari ticket?",
        a: "Yes! A BBQ dinner at Nkuchiro Bar & Grill along with the live fire dance show is included in the package.",
      },
    ],
  },
  {
    slug: "varuna-premium-bali",
    path: "/varuna-premium-bali",
    title: "Varuna Premium Bali",
    h1: "Varuna Premium Underwater Dining & Theatrical Show",
    short:
      "Indonesia's premier underwater theatrical dining experience featuring prime seating with choose-your-own-seat privilege, a Gourmet 3-course set menu, 1 bottle of wine per adult, and VIP waiting lounge access.",
    metaTitle: "Varuna Premium Bali Safari Dining & Show | BaliBonza",
    metaDescription:
      "Book Varuna Premium at Bali Safari. Prime seating with choose-your-own-seat privilege, Gourmet 3-course set menu, wine, and VIP lounge access. WhatsApp BaliBonza.",
    image: varunaPremiumHero,
    gallery: [varunaPremiumGallery1, varunaPremiumGallery2, varunaPremiumGallery3],
    galleryAlts: [
      "Varuna Premium underwater theater performance with aquatic artists and marine life view",
      "Varuna Premium dining table setting overlooking the illuminated underwater spectacle",
      "Varuna Premium underwater stage production with mermaid performers and marine staging",
    ],
    alt: "Pertunjukan teater bawah air spektakuler Varuna Dining Experience di Bali Safari",
    location: "Gianyar, Bali",
    duration:
      "Tuesday–Sunday (Closed Monday) • Day: doors 12:30 WITA, lunch 13:00, show ends 14:35 WITA • Evening: doors 18:30 WITA, dinner 19:00, show 19:30–20:35 WITA",
    type: "Theatrical • Underwater Gastronomy",
    suitableFor: "Couples, luxury travelers, celebratory occasions",
    price: "Day from Rp1.840.625 • Evening from Rp1.281.550",
    pricing: {
      variants: [
        {
          id: "day-varuna-premium",
          label: "Day Varuna Premium",
          session: "day",
          packageType: "premium",
          adultPublishRate: 1937500,
          childPublishRate: 1395000,
          adultPrice: 1840625,
          childPrice: 1325250,
          adultCommission: 290625,
          childCommission: 209250,
        },
        {
          id: "evening-varuna-premium",
          label: "Evening Varuna Premium",
          session: "evening",
          packageType: "premium",
          adultPublishRate: 1349000,
          childPublishRate: 899000,
          adultPrice: 1281550,
          childPrice: 854050,
          adultCommission: 202350,
          childCommission: 134850,
        },
      ],
    },
    categoryId: "wildlife-animal",
    subcategory: "varuna-shows",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Varuna Premium at Bali Safari.\n\nPlease check date availability and send me current pricing and menu details.\n\nThank you.",
    intro: [
      "Varuna Premium is the premier underwater theatrical dining experience at Bali Safari, operating Tuesday–Sunday (closed Monday).",
      "As a Varuna Premium guest, enjoy prime seating with choose-your-own-seat privilege, VIP waiting lounge access, a welcome drink/mocktail, a Gourmet 3-course set menu, 1 bottle of wine per adult, and a complimentary keepsake photo.",
    ],
    highlights: [
      "Prime seating with choose-your-own-seat privilege inside the underwater theater",
      "VIP waiting lounge access and welcome drink/mocktail",
      "Gourmet 3-course set menu",
      "1 bottle of wine per adult",
      "Complimentary keepsake photo",
      "Day inclusions: park admission, 1x Safari Journey, animal presentations",
      "Day schedule: doors 12:30 WITA, lunch 13:00, show ends 14:35 WITA",
      "Evening schedule: doors 18:30 WITA, dinner 19:00, show 19:30–20:35 WITA",
      "Operating days: Tuesday–Sunday (Closed Monday)",
    ],
    flow: [
      "Arrive and enjoy VIP waiting lounge access with a welcome drink or mocktail",
      "Day package: enjoy park admission, 1x Safari Journey, and animal presentations",
      "Select your preferred prime seating with choose-your-own-seat privilege",
      "Day session: doors open 12:30 WITA, lunch served 13:00 WITA, show ends 14:35 WITA",
      "Evening session: doors open 18:30 WITA, dinner served 19:00 WITA, show 19:30–20:35 WITA",
      "Savor a Gourmet 3-course set menu with 1 bottle of wine per adult and receive a complimentary keepsake photo",
    ],
    included: [
      "Prime seating with choose-your-own-seat privilege",
      "VIP waiting lounge access",
      "Welcome drink/mocktail",
      "Gourmet 3-course set menu",
      "1 bottle of wine per adult",
      "Complimentary keepsake photo",
      "Day inclusions: park admission, 1x Safari Journey, animal presentations",
    ],
    excluded: [
      "Fresh Water Park access",
      "Elephant ride (available as an optional upgrade)",
      ...commonExcluded,
    ],
    pickup:
      "Private VIP hotel transfers can be arranged with BaliBonza for a stylish door-to-door experience.",
    requirements: [
      "Smart casual dress code requested inside the Varuna underwater dining theater",
      "Please advise any food allergies or dietary preferences at booking",
    ],
    important: [
      "Operating days: Tuesday–Sunday (Closed Monday).",
      "Day session: doors open 12:30 WITA; lunch 13:00; show ends 14:35 WITA.",
      "Evening session: doors open 18:30 WITA; dinner 19:00; show 19:30–20:35 WITA.",
      "Day inclusions: park admission, 1x Safari Journey, and animal presentations (Fresh Water Park access is not included).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Includes prime seating with choose-your-own-seat privilege, VIP waiting lounge access, welcome drink/mocktail, Gourmet 3-course set menu, 1 bottle of wine per adult, and complimentary keepsake photo.",
    ],
    faq: [
      {
        q: "What is included in Varuna Premium?",
        a: "Varuna Premium includes prime seating with choose-your-own-seat privilege, VIP waiting lounge access, a welcome drink/mocktail, a Gourmet 3-course set menu, 1 bottle of wine per adult, a complimentary keepsake photo, and for day guests, park admission, 1x Safari Journey, and animal presentations.",
      },
      {
        q: "How does Varuna Premium differ from Regular and Deluxe?",
        a: "Varuna Premium includes prime seating with choose-your-own-seat privilege, VIP waiting lounge access, 1 bottle of wine per adult, and a complimentary keepsake photo alongside a Gourmet 3-course set menu.",
      },
      {
        q: "What is the schedule and operating days for Varuna Premium?",
        a: "Varuna operates Tuesday–Sunday (closed Monday). Day session: doors open 12:30 WITA, lunch 13:00, show ends 14:35 WITA. Evening session: doors open 18:30 WITA, dinner 19:00, show 19:30–20:35 WITA.",
      },
    ],
  },
  {
    slug: "bali-safari-breakfast-with-lion",
    path: "/bali-safari-breakfast-with-lion",
    title: "Bali Safari Breakfast with Lion",
    h1: "Bali Safari Breakfast with Lions Experience",
    short:
      "Start your morning with a lavish buffet breakfast next to magnificent lions at Tsavo Lion Restaurant, followed by a safari tram adventure and animal shows.",
    metaTitle: "Bali Safari Breakfast with Lions Tickets | BaliBonza",
    metaDescription:
      "Enjoy a breakfast buffet right next to lions at Tsavo Lion Restaurant Bali Safari. Includes safari tram ride and animal presentations. Book easily on WhatsApp.",
    image: safariTsavoImg,
    gallery: [safariGalleryTsavo, safariImg, safariGalleryElephant],
    galleryAlts: [
      "Breakfast dining table next to the glass wall facing lions at Tsavo Lion Restaurant",
      "Safari park tram driving through scenic grasslands Gianyar",
      "Elephant conservation and presentation grounds at Bali Safari",
    ],
    alt: "Sensasi makan siang unik bersama singa di Tsavo Lion Restaurant Bali Safari",
    location: "Gianyar, Bali",
    duration: "Starts 07:30 WITA (last check-in 09:30 WITA)",
    type: "Wildlife • Morning Dining",
    suitableFor: "Families with young children, couples, unique dining fans",
    price: "Adult: Rp750.500 • Child: Rp541.500",
    pricing: {
      publishRate: { adult: 790000, child: 570000 },
      websitePrice: { adult: 750500, child: 541500 },
      commission: { adult: 39500, child: 28500 },
    },
    categoryId: "wildlife-animal",
    subcategory: "vip-inclusive-dining",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Safari Breakfast with Lions.\n\nPlease check morning availability and send me prices with transport options.\n\nThank you.",
    intro: [
      "Start your day in Gianyar like nowhere else on earth—enjoying a hearty breakfast buffet while a pride of lions roams and grooms just inches away behind secure panoramic glass.",
      "Tsavo Lion Restaurant is Asia's first African-themed restaurant allowing you to dine in close proximity to lions. Following your morning meal, embark on the safari journey tram and explore animal presentations throughout the morning.",
    ],
    highlights: [
      "Full Buffet Breakfast at Tsavo Lion Restaurant",
      "Close-up morning views of the resident lion pride",
      "1-time Safari Journey tram tour through open savannah habitats",
      "Animal, Elephant, and Tiger Educational Presentations",
      "Breakfast starts at 07:30 WITA (last check-in 09:30 WITA)",
    ],
    flow: [
      "Early morning hotel pickup arranged for breakfast start at 07:30 WITA",
      "Arrive at Bali Safari and head to Tsavo Lion Restaurant (starts 07:30 WITA, last check-in 09:30 WITA)",
      "Feast on a Full Buffet Breakfast while watching the lions wake and interact",
      "Board the 1-time Safari Journey tram for the guided wildlife tour",
      "Watch the Animal, Elephant, and Tiger Educational Presentations",
      "Depart in the early afternoon or continue exploring the park at your leisure",
    ],
    included: [
      "Park admission for the morning session",
      "Full Buffet Breakfast at Tsavo Lion Restaurant",
      "1-time Safari Journey",
      "Animal, Elephant, and Tiger Educational Presentations",
    ],
    excluded: [
      "Elephant ride experience",
      "Specialty drinks outside the breakfast buffet service",
      ...commonExcluded,
    ],
    pickup:
      "Early morning private hotel pickup is available to ensure prompt arrival for breakfast opening. Contact us on WhatsApp for pickup timing.",
    requirements: [
      "Casual comfortable clothes and walking shoes",
      "Cameras ready for early morning lighting with the animals",
    ],
    important: [
      "Breakfast starts at 07:30 WITA at Tsavo Lion Restaurant. Last check-in is at 09:30 WITA.",
      "Does NOT follow the general 09:00 opening time as the breakfast start.",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "What time does Breakfast with Lions take place?",
        a: "Breakfast starts at 07:30 WITA at Tsavo Lion Restaurant, with the last check-in at 09:30 WITA.",
      },
      {
        q: "Is it safe for toddlers and children?",
        a: "Completely safe. Heavy-duty tempered architectural glass separates the dining room from the lion habitat, giving incredible close-up views with zero safety risk.",
      },
      {
        q: "Can I explore the rest of Bali Safari after breakfast?",
        a: "Yes, your ticket includes the Safari Journey tram ride and admission to animal shows for the rest of the day.",
      },
    ],
  },
  {
    slug: "bali-safari-dragon-package",
    path: "/bali-safari-dragon-package",
    title: "Bali Safari Dragon Package",
    h1: "Bali Safari Dragon Package with Buffet Lunch",
    short:
      "A comprehensive family safari day including park entry, safari journey, animal presentations, water play zone, and an Indonesian buffet lunch at Uma Restaurant.",
    metaTitle: "Bali Safari Dragon Package Tickets & Lunch | BaliBonza",
    metaDescription:
      "Get tickets for the Bali Safari Dragon Package. Safari tram ride, buffet lunch at Uma Restaurant, animal presentations, and water park fun. Inquire via WhatsApp.",
    image: safariImg,
    gallery: [safariImg, safariGalleryElephant, safariGalleryNight],
    galleryAlts: [
      "Safari journey tram crossing the savannah grasslands Gianyar Bali",
      "Elephant presentation showcasing conservation efforts at Bali Safari",
      "Night safari experience habitat lighting and tiger feeding cage",
    ],
    alt: "Pengalaman Bali Safari Tram Tour melihat satwa liar dari dekat",
    location: "Gianyar, Bali",
    duration: "09:00–17:00 WITA",
    type: "Wildlife • Family Day",
    suitableFor: "Families with kids, groups, tour parties",
    price: "Adult: Rp855.000 • Child: Rp684.000",
    pricing: {
      publishRate: { adult: 900000, child: 720000 },
      websitePrice: { adult: 855000, child: 684000 },
      commission: { adult: 45000, child: 36000 },
    },
    categoryId: "wildlife-animal",
    subcategory: "vip-inclusive-dining",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book the Bali Safari Dragon Package.\n\nPlease check ticket availability and send me pricing for our group.\n\nThank you.",
    intro: [
      "The Dragon Package is one of Bali Safari's most complete value-for-money packages, combining standard wildlife highlights with an all-you-can-eat buffet lunch at Uma Restaurant.",
      "Explore the vast savannah on an air-conditioned tram, watch captivating animal presentations, refuel over a varied buffet featuring Indonesian and international favorites, and let the kids splash around at the water play area.",
    ],
    highlights: [
      "Air-conditioned Safari Journey tram expedition",
      "Buffet lunch at Uma Restaurant inside the safari village",
      "Animal educational presentation and Tiger show",
      "Elephant conservation presentation",
      "Fresh Water Park access with slides and splash pools",
    ],
    flow: [
      "Morning arrival at Bali Safari & Marine Park via private transfer",
      "Collect package wristbands and daily presentation guide",
      "Board the Safari Journey tram across Asian and African wilderness zones",
      "Attend the engaging Animal Presentation and Tiger Presentation",
      "Enjoy a relaxing buffet lunch at Uma Restaurant",
      "Watch the majestic Elephant Educational Presentation",
      "Afternoon swim and water slides at the Water Play Zone before returning home",
    ],
    included: [
      "1x Bali Safari Park admission",
      "1x Safari Journey tram tour",
      "Indonesian & international buffet lunch at Uma Restaurant",
      "Animal presentation, Tiger show & Elephant presentation",
      "Water park admission",
    ],
    excluded: [
      "Elephant ride experience",
      "Dining at Tsavo Lion Restaurant (Uma Restaurant buffet is included)",
      ...commonExcluded,
    ],
    pickup:
      "Private round-trip hotel transfers are easily arranged across Ubud, Seminyak, Canggu, Kuta, Sanur, and Nusa Dua.",
    requirements: [
      "Swimsuits and towels if you plan to use the water play area",
      "Comfortable walking shoes and lightweight summer clothing",
    ],
    important: [
      "Official operating hours: 09:00–17:00 WITA. Safari Journey: 09:00–17:15 (Toraja Terminal).",
      "Lunch at Uma Restaurant is open from 12:00 PM to 14:00 PM.",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "What restaurant is included in the Dragon Package?",
        a: "The Dragon Package includes a generous buffet lunch at Uma Restaurant, offering Indonesian specialties and international options.",
      },
      {
        q: "Is the Dragon Package suitable for large family groups?",
        a: "Yes, it is one of our top recommendations for families because it includes park admission, safari tram, presentations, lunch, and water park access all in one price.",
      },
    ],
  },
  {
    slug: "varuna-deluxe-bali",
    path: "/varuna-deluxe-bali",
    title: "Varuna Deluxe Bali",
    h1: "Varuna Deluxe Underwater Dining & Show",
    short:
      "Underwater theatrical dining featuring dining tables and main-floor viewing close to the panoramic glass, a Deluxe 3-course set menu, and day park admission.",
    metaTitle: "Varuna Deluxe Bali Safari Dining & Show | BaliBonza",
    metaDescription:
      "Reserve Varuna Deluxe at Bali Safari. Enjoy a Deluxe 3-course set menu and underwater theatrical show with main-floor dining tables. WhatsApp BaliBonza for booking.",
    image: varunaDeluxeHero,
    gallery: [varunaDeluxeGallery1, varunaDeluxeGallery2, varunaDeluxeGallery3],
    galleryAlts: [
      "Varuna Deluxe front-tier view of theatrical aquatic performance at Bali Safari",
      "Varuna Deluxe dining experience positioned close to the expansive underwater glass",
      "Varuna Deluxe underwater spectacle featuring acrobatic artists and marine life",
    ],
    alt: "Pertunjukan teater bawah air spektakuler Varuna Dining Experience di Bali Safari",
    location: "Gianyar, Bali",
    duration: "Tuesday–Sunday (Closed Monday)",
    type: "Theatrical • Deluxe Dining",
    suitableFor: "Couples, anniversary celebrations, luxury seekers",
    price: "Day from Rp1.398.875 • Evening from Rp940.500",
    pricing: {
      variants: [
        {
          id: "day-varuna-deluxe",
          label: "Day Varuna Deluxe",
          session: "day",
          packageType: "deluxe",
          adultPublishRate: 1472500,
          childPublishRate: 1162500,
          adultPrice: 1398875,
          childPrice: 1104375,
          adultCommission: 220875,
          childCommission: 174375,
        },
        {
          id: "evening-varuna-deluxe",
          label: "Evening Varuna Deluxe",
          session: "evening",
          packageType: "deluxe",
          adultPublishRate: 990000,
          childPublishRate: 649000,
          adultPrice: 940500,
          childPrice: 616550,
          adultCommission: 148500,
          childCommission: 97350,
        },
      ],
    },
    categoryId: "wildlife-animal",
    subcategory: "varuna-shows",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Varuna Deluxe at Bali Safari.\n\nPlease check seating availability and send me package prices and menu choices.\n\nThank you.",
    intro: [
      "Varuna Deluxe places you on the main floor with dining tables positioned close to the expansive panoramic glass viewing wall.",
      "Accompanying the sensory underwater production is a Deluxe 3-course set menu, operating Tuesday–Sunday (closed Monday).",
    ],
    highlights: [
      "Dining tables and main-floor viewing close to the panoramic glass",
      "Deluxe 3-course set menu",
      "Day inclusions: park admission, 1x Safari Journey, animal presentations",
      "Day schedule: doors 12:30 WITA, lunch 13:00, show ends 14:35 WITA",
      "Evening schedule: doors 18:30 WITA, dinner 19:00, show 19:30–20:35 WITA",
      "Operating days: Tuesday–Sunday (Closed Monday)",
    ],
    flow: [
      "Day package: enjoy park admission, 1x Safari Journey, and animal presentations",
      "Day session: doors open 12:30 WITA, lunch served 13:00 WITA, show ends 14:35 WITA",
      "Evening session: doors open 18:30 WITA, dinner served 19:00 WITA, show 19:30–20:35 WITA",
      "Take your dining table on the main floor and savor the Deluxe 3-course set menu during the performance",
    ],
    included: [
      "Varuna Deluxe dining tables and main-floor viewing",
      "Deluxe 3-course set menu",
      "Day inclusions: park admission, 1x Safari Journey, animal presentations",
    ],
    excluded: ["Fresh Water Park access", "Elephant ride experience", ...commonExcluded],
    pickup:
      "Private transfers can be arranged from your accommodation anywhere in Bali with our dedicated private driver team.",
    requirements: [
      "Smart casual dress code inside the Varuna theater",
      "Notify us of dietary requirements or allergies when booking",
    ],
    important: [
      "Operating days: Tuesday–Sunday (Closed Monday).",
      "Day session: doors open 12:30 WITA; lunch 13:00; show ends 14:35 WITA.",
      "Evening session: doors open 18:30 WITA; dinner 19:00; show 19:30–20:35 WITA.",
      "Day inclusions: park admission, 1x Safari Journey, and animal presentations (Fresh Water Park access is not included).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Features dining tables with main-floor viewing and a Deluxe 3-course set menu.",
    ],
    faq: [
      {
        q: "What is included in the Varuna Deluxe package?",
        a: "Varuna Deluxe includes dining tables and main-floor viewing close to the panoramic glass, a Deluxe 3-course set menu, and for day guests, park admission, 1x Safari Journey, and animal presentations.",
      },
      {
        q: "What is the difference between Varuna Deluxe and Varuna Regular?",
        a: "Varuna Regular is a theatre/show package with tiered auditorium seating and canapés + welcome drink/mocktail, while Varuna Deluxe provides dining tables, main-floor viewing, and a Deluxe 3-course set menu.",
      },
      {
        q: "What is the schedule for Varuna Deluxe?",
        a: "Varuna operates Tuesday–Sunday (closed Monday). Day session: doors open 12:30 WITA, lunch 13:00, show ends 14:35 WITA. Evening session: doors open 18:30 WITA, dinner 19:00, show 19:30–20:35 WITA.",
      },
    ],
  },
  {
    slug: "bali-safari-jungle-hopper-legend",
    path: "/bali-safari-jungle-hopper-legend",
    title: "Safari Legend",
    h1: "Safari Legend Package",
    short:
      "The classic safari park adventure enriched with the legendary Bali Agung cultural performance, safari tram journey, animal shows, and water park access.",
    metaTitle: "Bali Safari Jungle Hopper Legend Tickets & Show | BaliBonza",
    metaDescription:
      "Book the Bali Safari Jungle Hopper Legend package. Includes the iconic Bali Agung theatrical performance, safari tram tour, animal presentations, and water park.",
    image: safariImg,
    gallery: [safariImg, safariGalleryElephant, safariGalleryNight],
    galleryAlts: [
      "Lush savannah habitat and safari tram at Bali Safari Park Gianyar",
      "Elephant conservation presentation amphitheater",
      "Nocturnal tiger feeding vehicle at night safari",
    ],
    alt: "Pengalaman Bali Safari Tram Tour melihat satwa liar dari dekat",
    location: "Gianyar, Bali",
    duration: "Tuesday–Sunday • 09:00–17:00 WITA (Bali Agung: 15:00–16:00)",
    type: "Wildlife • Cultural Show",
    suitableFor: "Families, culture lovers, first-time Bali visitors",
    price: "Adult: Rp237.500 • Child: Rp190.000",
    pricing: {
      publishRate: { adult: 250000, child: 200000 },
      websitePrice: { adult: 237500, child: 190000 },
      commission: { adult: 12500, child: 10000 },
    },
    categoryId: "wildlife-animal",
    subcategory: "core-safari-admission",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Safari Legend.\n\nPlease send me schedule details, show dates, and pricing for our group.\n\nThank you.",
    intro: [
      "Jungle Hopper Legend takes the beloved Jungle Hopper experience and adds reserved seating at the majestic Bali Agung cultural production—a world-class theatrical show featuring over 150 performers and live animals on stage.",
      "Combined with the classic safari tram voyage, educational presentations, and the water play zone, this package offers a complete day of nature, conservation, and authentic Balinese cultural heritage.",
    ],
    highlights: [
      "Reserved seating at the grand Bali Agung cultural performance",
      "Safari Journey tram tour through African and Asian animal zones",
      "Animal Educational Presentation, Tiger Show, and Elephant Show",
      "Water Play Zone access with refreshing splash pools",
      "Educational exploration through the Petting Zoo and Komodo exhibit",
    ],
    flow: [
      "Morning arrival at Bali Safari & Marine Park in Gianyar",
      "Board the Safari Journey tram to spot zebras, rhinos, lions, and bears",
      "Catch the morning Animal and Tiger educational presentations",
      "Take your seats inside the state-of-the-art Bali Agung Theatre for the cultural show",
      "Watch the grand Elephant Conservation Presentation",
      "Let the family cool off at the Water Play Zone before returning to the hotel",
    ],
    included: [
      "1x Bali Safari Park admission",
      "1x Safari Journey tram tour",
      "1x Bali Agung cultural show ticket (Silver seating)",
      "Animal presentation, Tiger presentation, and Elephant show",
      "Fresh Water Park access",
    ],
    excluded: [
      "Lunch meals (food courts and restaurants available inside the park)",
      "Elephant ride experience",
      ...commonExcluded,
    ],
    pickup:
      "Private hotel pickup and return transfers can be booked conveniently with BaliBonza. Message us on WhatsApp with your hotel name.",
    requirements: [
      "Cameras and phones must be safely stored in lockers during the Bali Agung show",
      "Comfortable walking shoes recommended for the park grounds",
    ],
    important: [
      "Operating days: Tuesday–Sunday (Park opening hours: 09:00–17:00 WITA). Closed Monday.",
      "Bali Agung Theatrical Show: 15:00–16:00 WITA at Bali Agung Theatre (Tuesday–Sunday).",
      "Safari Journey: 09:00–17:15 (last tram: 17:15 WITA at Toraja Terminal).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "What makes the Jungle Hopper Legend different from the standard Jungle Hopper?",
        a: "The Legend package includes admission to the Bali Agung theatrical show, a spectacular cultural epic featuring dancers, musicians, and animals on an expansive indoor stage.",
      },
      {
        q: "Does Jungle Hopper Legend include lunch?",
        a: "Lunch is not included, allowing you the freedom to choose from multiple casual dining cafes, food courts, or restaurants inside the safari park.",
      },
    ],
  },
  {
    slug: "bali-safari-jungle-hopper",
    path: "/bali-safari-jungle-hopper",
    title: "Bali Safari Jungle Hopper",
    h1: "Bali Safari Jungle Hopper (Most Popular Package)",
    short:
      "The classic and most popular Bali Safari admission package, featuring the signature safari tram journey, animal and tiger presentations, and elephant show.",
    metaTitle: "Bali Safari Jungle Hopper Package Tickets | BaliBonza",
    metaDescription:
      "Book the famous Bali Safari Jungle Hopper package. Experience the safari tram tour, animal presentations, and elephant conservation show. WhatsApp us.",
    image: safariImg,
    gallery: [safariImg, safariGalleryElephant, safariGalleryTsavo],
    galleryAlts: [
      "Bali Safari tram driving alongside African herbivores in open habitat",
      "Elephant presentation highlighting gentle giants and mahout bonds",
      "Tsavo Lion restaurant exterior overlooking the savannah",
    ],
    alt: "Pengalaman Bali Safari Tram Tour melihat satwa liar dari dekat",
    location: "Gianyar, Bali",
    duration: "09:00–17:00 WITA",
    type: "Wildlife • Best Seller",
    suitableFor: "All ages, budget-conscious travelers, families with kids",
    price: "Adult: Rp712.500 • Child: Rp589.000",
    pricing: {
      publishRate: { adult: 750000, child: 620000 },
      websitePrice: { adult: 712500, child: 589000 },
      commission: { adult: 37500, child: 31000 },
    },
    categoryId: "wildlife-animal",
    subcategory: "core-safari-admission",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Safari Jungle Hopper.\n\nPlease check date availability and send me current promotional ticket rates.\n\nThank you.",
    intro: [
      "The Jungle Hopper package is Bali Safari's all-time best-selling ticket, offering the quintessential safari experience at great value.",
      "Climb aboard the enclosed air-conditioned safari tram to observe wildlife from Indonesia, India, and Africa living in naturalistic open-range habitats. Complement your trip with daily educational presentations.",
    ],
    highlights: [
      "Bali Safari's #1 most popular admission package",
      "Air-conditioned Safari Journey tram expedition",
      "Educational Animal Presentation and dynamic Tiger Presentation",
      "Elephant conservation presentation",
      "Official operating hours: 09:00–17:00 WITA",
    ],
    flow: [
      "Arrive at Bali Safari & Marine Park in Gianyar (operating hours 09:00–17:00 WITA)",
      "Collect your wristbands and explore the walkable village exhibits and petting zoo",
      "Board the Safari Journey tram for the guided ride through animal habitats",
      "Watch the informative Animal Show and majestic Big Cat / Tiger Presentation",
      "Attend the touching Elephant Educational Presentation",
      "Conclude your safari experience and browse souvenirs before departure",
    ],
    included: [
      "1x Bali Safari Park admission",
      "1x Safari Journey tram tour",
      "Animal educational presentation",
      "Tiger & Elephant conservation presentations",
    ],
    excluded: [
      "Lunch meals (available at various park eateries)",
      "Elephant ride",
      "Bali Agung theatrical performance",
      ...commonExcluded,
    ],
    pickup:
      "Optional round-trip private transport is available from all popular resort towns across Bali. Request a quote on WhatsApp.",
    requirements: [
      "Comfortable clothing, walking sandals or sneakers",
      "Sun protection (sunscreen, sunglasses, hat)",
    ],
    important: [
      "General daytime operation: 09:00–17:00 WITA.",
      "Safari Journey: 09:00–17:15, Everyday (Last tram: 17:15 WITA; duration ~30 minutes at Toraja Terminal).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Arriving before 10:00 AM ensures you can comfortably catch the full sequence of morning animal presentations.",
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    ],
    faq: [
      {
        q: "What is included in the Jungle Hopper package?",
        a: "Jungle Hopper includes park entry, 1x Safari Journey tram tour, entry to the Animal Presentation, Tiger Presentation, and Elephant Show.",
      },
      {
        q: "Can I buy food inside the park?",
        a: "Yes, there are several cafes, fast-casual food stations, and restaurants (including Uma Restaurant and Tsavo Lion Restaurant) throughout the park.",
      },
      {
        q: "How do I receive my tickets?",
        a: "BaliBonza sends your confirmed booking voucher directly via WhatsApp or email, which you simply show at the Bali Safari admission counter upon arrival.",
      },
    ],
  },
  {
    slug: "varuna-regular-bali",
    path: "/varuna-regular-bali",
    title: "Varuna Regular Bali",
    h1: "Varuna Regular Underwater Theatrical Show",
    short:
      "A theatre and show package featuring tiered auditorium seating, canapés with a welcome drink or mocktail, and day park admission.",
    metaTitle: "Varuna Regular Bali Safari Underwater Show | BaliBonza",
    metaDescription:
      "Book Varuna Regular at Bali Safari. Theatre and show package with tiered auditorium seating, canapés, and welcome drink or mocktail. Inquire via WhatsApp.",
    image: varunaRegularHero,
    gallery: [varunaRegularGallery1, varunaRegularGallery2, varunaRegularGallery3],
    galleryAlts: [
      "Varuna Regular underwater theater auditorium view with illuminated aquatic stage",
      "Varuna Regular theatrical performance featuring synchronized aquatic artists",
      "Varuna Regular underwater theater ambiance and storytelling production",
    ],
    alt: "Pertunjukan teater bawah air spektakuler Varuna Dining Experience di Bali Safari",
    location: "Gianyar, Bali",
    duration:
      "Tuesday–Sunday (Closed Monday) • Day: doors 12:30 WITA, show 13:00–14:35 WITA • Evening: doors 18:30 WITA, show 19:30–20:35 WITA",
    type: "Theatrical • Underwater Show",
    suitableFor: "Couples, theater lovers, families",
    price: "Day from Rp1.104.375 • Evening from Rp616.550",
    pricing: {
      variants: [
        {
          id: "day-varuna-regular",
          label: "Day Varuna Regular",
          session: "day",
          packageType: "regular",
          adultPublishRate: 1162500,
          childPublishRate: 852500,
          adultPrice: 1104375,
          childPrice: 809875,
          adultCommission: 174375,
          childCommission: 127875,
        },
        {
          id: "evening-varuna-regular",
          label: "Evening Varuna Regular",
          session: "evening",
          packageType: "regular",
          adultPublishRate: 649000,
          childPublishRate: 435000,
          adultPrice: 616550,
          childPrice: 413250,
          adultCommission: 97350,
          childCommission: 65250,
        },
      ],
    },
    categoryId: "wildlife-animal",
    subcategory: "varuna-shows",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Varuna Regular at Bali Safari.\n\nPlease send me available dates, show times, and pricing.\n\nThank you.",
    intro: [
      "Varuna Regular is a theatre and show package showcasing Bali Safari's underwater theatrical performance, operating Tuesday–Sunday (closed Monday).",
      "Enjoy tiered auditorium seating with clear views of the underwater stage as performers bring an enchanting Balinese maritime legend to life, accompanied by canapés and a welcome drink or mocktail.",
    ],
    highlights: [
      "Tiered auditorium seating inside the Varuna underwater theater",
      "Theatre/show package with canapés and welcome drink/mocktail",
      "Day schedule: doors 12:30 WITA; show 13:00–14:35 WITA",
      "Evening schedule: doors 18:30 WITA; show 19:30–20:35 WITA",
      "Day inclusions: park admission, 1x Safari Journey, animal presentations",
      "Operating days: Tuesday–Sunday (Closed Monday)",
    ],
    flow: [
      "Day package: explore Bali Safari with park admission, 1x Safari Journey, and animal presentations",
      "Day session: doors open 12:30 WITA; show 13:00–14:35 WITA",
      "Evening session: doors open 18:30 WITA; show 19:30–20:35 WITA",
      "Take your tiered auditorium seats and enjoy canapés and welcome drink/mocktail during the performance",
    ],
    included: [
      "Varuna Regular tiered auditorium seating",
      "Canapés + welcome drink/mocktail",
      "Day inclusions: park admission, 1x Safari Journey, animal presentations",
    ],
    excluded: [
      "Full multi-course lunch or dinner",
      "Fresh Water Park access",
      "Elephant ride experience",
      ...commonExcluded,
    ],
    pickup:
      "BaliBonza offers comfortable air-conditioned private vehicle transfers from all major Bali tourist centers.",
    requirements: [
      "Smart casual dress code inside the Varuna venue",
      "Advise dietary requirements upon booking",
    ],
    important: [
      "Operating days: Tuesday–Sunday (Closed Monday).",
      "Day session: doors open 12:30 WITA; show 13:00–14:35 WITA.",
      "Evening session: doors open 18:30 WITA; show 19:30–20:35 WITA.",
      "Day inclusions: park admission, 1x Safari Journey, and animal presentations (Fresh Water Park access is not included).",
      "Age Policy: Infant: below 3 years | Child: 3–12 years | Adult: above 12 years.",
      "Varuna Regular is a theatre/show package with canapés and a welcome drink/mocktail (tiered auditorium seating; no full multi-course lunch/dinner).",
    ],
    faq: [
      {
        q: "What is the Varuna Regular package?",
        a: "Varuna Regular is a theatre/show package featuring tiered auditorium seating, canapés, and a welcome drink/mocktail. Day tickets include park admission, 1x Safari Journey, and animal presentations.",
      },
      {
        q: "Is a full lunch or dinner included with Varuna Regular?",
        a: "No, Varuna Regular is a theatre/show package with canapés and a welcome drink/mocktail. For set-menu dining, consider Varuna Deluxe or Varuna Premium.",
      },
      {
        q: "What are the operating days and schedule for Varuna Regular?",
        a: "Varuna operates Tuesday–Sunday (closed Monday). Day session: doors open 12:30 WITA, show 13:00–14:35 WITA. Evening session: doors open 18:30 WITA, show 19:30–20:35 WITA.",
      },
    ],
  },
];

export const varunaExperiences = baliSafariExperiences.filter((e) => e.subcategory === "varuna");

export interface PresentationScheduleItem {
  name: string;
  times: string[];
  location: string;
  days: string;
}

export interface ActivityScheduleItem {
  name: string;
  time: string;
  days: string;
}

export const baliSafariSchedule = {
  general: {
    openingHours: "09:00–17:00 WITA",
    disclaimer:
      "Activities may change, be postponed, or be cancelled due to weather conditions and animal conditions/welfare.",
    agePolicy: {
      infant: "Below 3 years",
      child: "3–12 years",
      adult: "Above 12 years",
    },
  },
  safariJourney: {
    operatingHours: "09:00–17:15 WITA",
    days: "Everyday",
    lastTram: "17:15 WITA",
    duration: "Approximately 30 minutes",
    location: "Toraja Terminal",
  },
  presentations: [
    {
      name: "Animal Educational Presentation",
      times: ["10:15–10:35", "16:00–16:20"],
      location: "Hanuman Stage",
      days: "Everyday",
    },
    {
      name: "Tiger Educational Presentation",
      times: ["11:00–11:20", "14:15–14:35"],
      location: "Harimau Amphitheatre",
      days: "Everyday",
    },
    {
      name: "Elephant Educational Presentation",
      times: ["11:35–12:00", "16:30–16:55"],
      location: "Kampung Gajah",
      days: "Everyday",
    },
    {
      name: "Balinese Traditional Market",
      times: ["13:00–13:30"],
      location: "Kampung Bali",
      days: "Everyday",
    },
    {
      name: "Bali Agung",
      times: ["15:00–16:00"],
      location: "Bali Agung Theatre",
      days: "Tuesday–Sunday",
    },
    {
      name: "Animal Welfare Station",
      times: ["09:00–16:30"],
      location: "Park Grounds",
      days: "Everyday",
    },
  ] as PresentationScheduleItem[],
  animalEncounters: [
    { name: "Bird Encounter", time: "09:30–16:00", days: "Everyday" },
    { name: "Orangutan at Playground", time: "12:30–15:30", days: "Everyday" },
    { name: "Bekantan Keeper Talk", time: "14:00–15:00", days: "Everyday" },
    { name: "Iguana Encounter", time: "13:00–15:00", days: "Everyday" },
    { name: "Snake Encounter", time: "13:00–15:00", days: "Everyday" },
  ] as ActivityScheduleItem[],
  animalFeeding: [
    { name: "Animal Feeding", time: "10:00–16:00", days: "Everyday" },
    { name: "Elephant Feeding", time: "10:00–16:00", days: "Everyday" },
    { name: "Meerkat Feeding & Encounter", time: "11:00–15:00", days: "Everyday" },
    { name: "Giraffe Feeding", time: "11:00–15:00", days: "Everyday" },
    { name: "Pigmy Hippo Feeding", time: "11:00–15:00", days: "Everyday" },
    { name: "Binturong Feeding", time: "12:30–15:00", days: "Everyday" },
    { name: "Croc Feeding", time: "13:00–16:00", days: "Thursday–Sunday" },
    { name: "Feed the Predator", time: "14:00–15:30", days: "Everyday" },
  ] as ActivityScheduleItem[],
  recreation: [
    { name: "Fun Zone", time: "11:00–17:00", days: "Everyday" },
    { name: "Water Play", time: "11:00–17:00", days: "Everyday" },
  ] as ActivityScheduleItem[],
};
