import zooImg from "@/assets/images/bali_zoo_capybara_1789048952498.jpg";
import zooGalleryBreakfastOrangutan from "@/assets/images/zoo_breakfast_orangutan_1789050512143.jpg";
import zooGalleryElephantMudFun from "@/assets/images/zoo_elephant_mud_fun_1789050537553.jpg";
import zooGalleryElephantExplorer from "@/assets/images/zoo_elephant_exp_1789050556609.jpg";
import type { Experience } from "./experiences";

/**
 * Official Bali Zoo Image Assets
 * Centralized mapping for all 11 Bali Zoo products.
 * Easily updated or replaced if the supplier provides new official photos.
 */
export const BALI_ZOO_IMAGES = {
  animalExperience: zooImg, // Approved official asset representing animal & capybara encounters
  breakfastOrangutan: zooGalleryBreakfastOrangutan, // Approved official asset for breakfast with orangutans
  elephantMudFun: zooGalleryElephantMudFun, // Approved official asset for elephant mud fun bathing
  elephantExplorer: zooGalleryElephantExplorer, // Approved official asset for elephant explorer trail ride
} as const;

export const BALI_ZOO_IMAGE_ALTS = {
  animalExperience: "Interaksi seru dengan capybara di Bali Zoo Park Experience Gianyar",
  breakfastOrangutan: "Sarapan pagi favorit bersama orangutan ramah di Gayo Restaurant Bali Zoo",
  elephantMudFun: "Aktivitas mandikan gajah Bali Zoo Elephant Mud Fun di kolam lumpur alami",
  elephantExplorer: "Pengalaman Bali Zoo Elephant Explorer menyusuri jalur hijau Kampung Sumatra",
} as const;

export const baliZooExperiences: Experience[] = [
  // 1. Bali Zoo Tickets (General Admission)
  {
    slug: "bali-zoo-tickets",
    path: "/bali-zoo/bali-zoo-tickets",
    title: "Bali Zoo Tickets (General Admission)",
    h1: "Bali Zoo Tickets & Admission",
    short:
      "General admission to Bali Zoo in Singapadu, Gianyar. Explore diverse wildlife habitats, shaded walking trails, educational animal presentations, and the Jungle Splash water play area.",
    metaTitle: "Bali Zoo Tickets & Admission | BaliBonza",
    metaDescription:
      "Official Bali Zoo admission tickets. Access open wildlife enclosures, animal encounters, and splash water play zone. Book easily via WhatsApp.",
    image: BALI_ZOO_IMAGES.animalExperience,
    gallery: [
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantMudFun,
      BALI_ZOO_IMAGES.elephantExplorer,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
    ],
    alt: "Interaksi seru dengan capybara di Bali Zoo Park Experience Gianyar",
    location: "Singapadu, Gianyar, Bali",
    duration: "Flexible (Full day, open 09:00 – 17:00)",
    type: "Wildlife • General Admission",
    suitableFor: "Families, couples, nature lovers, and travelers of all ages",
    price: "Adult: IDR 375,250 • Child: IDR 266,000",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-general",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Tickets (General Admission).\n\nPlease share availability and ticket details for our group.\n\nThank you.",
    intro: [
      "Set amid shaded tropical botanical gardens in Singapadu, Gianyar, Bali Zoo provides an approachable, walk-friendly zoological sanctuary where visitors can observe diverse native Indonesian and international wildlife up close.",
      "A standard admission ticket provides full-day access to walk-through aviaries, open-range wildlife habitats, scheduled educational keeper presentations, and the interactive Jungle Splash water play area designed especially for younger travelers.",
      "Whether you are planning a relaxed family day trip or exploring the cultural corridor between Sanur and Ubud, Bali Zoo offers an engaging wildlife experience with paved paths, shaded pavilions, and clear signage.",
    ],
    highlights: [
      "Full-day access to Bali Zoo's immersive walking trails, aviaries, and open-range habitats",
      "Observe diverse native Indonesian wildlife including primates, tropical birds, and reptiles",
      "Scheduled educational animal presentations and keeper talks throughout the day",
      "Complimentary access to the Jungle Splash water play area for children",
      "Official ticket voucher with direct admission scan at the entrance",
      "Paved, stroller-friendly walking paths surrounded by lush tropical gardens",
    ],
    flow: [
      "Arrive at Bali Zoo ticketing lobby in Singapadu, Gianyar (operating hours 09:00 – 17:00, last entry 16:00)",
      "Scan your official BaliBonza electronic voucher at the turnstiles for direct admission",
      "Stroll along landscaped jungle walkways visiting diverse wildlife enclosures and bird aviaries",
      "Attend scheduled daily animal presentations and educational keeper talks at designated pavilions",
      "Cool off at the Jungle Splash water play area or enjoy lunch at the zoo's lakeside dining venues",
      "Explore the souvenir boutiques or depart at your own leisure before closing time",
    ],
    included: [
      "Bali Zoo full-day general admission ticket",
      "Access to all standard animal viewing habitats and walk-through aviaries",
      "Scheduled educational animal presentations and bird shows (subject to daily schedule)",
      "Full access to Jungle Splash water play area for children",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Special interactive encounters (Breakfast with Orangutan, Elephant Mud Fun, Capybara Connection, etc.)",
      "Animal feeding tokens or fruit baskets (available separately inside the park)",
      "Food and beverages (available for purchase inside the park)",
      "Hotel pickup and drop-off",
      "Personal locker rentals and towel hire",
    ],
    pickup:
      "Direct admission only. Transportation is not included; guests travel independently to Bali Zoo in Singapadu, Gianyar.",
    requirements: [
      "Comfortable walking shoes, breathable clothing, and sun protection (hat, sunscreen) recommended",
      "Swimwear and a towel if children plan to use the Jungle Splash water play area",
      "Child age policy: 3–12 years (official child rate applies); infants under 3 enter free with an accompanying adult",
      "Cash or card for optional food, drinks, and animal feeding tokens inside the zoo",
    ],
    important: [
      "Zoo operating hours are 09:00 to 17:00 daily, with last park admission at 16:00.",
      "Schedule of animal presentations is subject to daily weather conditions and animal welfare protocols.",
      "Special encounters (such as Breakfast with Orangutan or Elephant Mud Fun) are separate ticketed packages with limited capacity and are not included in general admission.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What does standard Bali Zoo admission include?",
        a: "A standard general admission ticket includes all-day entry to the zoo exhibits, walk-through bird aviaries, scheduled educational keeper talks, and complimentary access to the Jungle Splash water play zone.",
      },
      {
        q: "Is transportation included with this ticket?",
        a: "No. Bali Zoo general admission is direct entry only and does not include transportation. Guests arrive independently by taxi, ride-hail, or private vehicle.",
      },
      {
        q: "Can I participate in animal encounters with standard tickets?",
        a: "General admission allows you to view the animals in their habitats. However, signature interactive programs like Breakfast with Orangutan, Elephant Mud Fun, and Capybara Connection require dedicated advance bookings due to strictly capped daily slots.",
      },
      {
        q: "Is Bali Zoo suitable for strollers and wheelchairs?",
        a: "Yes, the main walkways throughout Bali Zoo are paved and designed with ramps, making them accessible for strollers and wheelchairs.",
      },
      {
        q: "What happens if it rains during our visit?",
        a: "Bali Zoo remains open during tropical rain. Most major walking routes feature covered rest pavilions and shaded tree canopies. Shows may be adjusted slightly if heavy rain occurs.",
      },
    ],
  },

  // 2. Breakfast with Orangutan
  {
    slug: "breakfast-with-orangutan",
    path: "/bali-zoo/breakfast-with-orangutan",
    title: "Bali Zoo Breakfast with Orangutan",
    h1: "Breakfast with Orangutan at Bali Zoo",
    short:
      "Bali Zoo's iconic morning experience. Enjoy a generous breakfast buffet at Gayo Restaurant in the company of playful orangutans, followed by full-day zoo exploration.",
    metaTitle: "Breakfast with Orangutan Bali Zoo Tickets | BaliBonza",
    metaDescription:
      "Book the famous Breakfast with Orangutan at Bali Zoo. Feast on a breakfast buffet with playful primates nearby, plus full zoo entry. WhatsApp booking.",
    image: BALI_ZOO_IMAGES.breakfastOrangutan,
    gallery: [
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantMudFun,
      BALI_ZOO_IMAGES.animalExperience,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
      BALI_ZOO_IMAGE_ALTS.animalExperience,
    ],
    alt: "Sarapan pagi favorit bersama orangutan ramah di Gayo Restaurant Bali Zoo",
    location: "Singapadu, Gianyar, Bali",
    duration: "Morning session (08:00 – 10:00) + Full-day zoo admission",
    type: "Wildlife • Dining Encounter",
    suitableFor: "Couples, families with children, photography lovers, and wildlife enthusiasts",
    price: "Adult: IDR 783,750 • Child: IDR 551,000",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-signature",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Breakfast with Orangutan.\n\nPlease check morning availability and send me details for our group.\n\nThank you.",
    intro: [
      "Start your Bali Zoo visit with one of Southeast Asia's most recognized wildlife dining experiences. Breakfast with Orangutan takes place in the tranquil morning hours at Gayo Restaurant in Kampung Sumatra, surrounded by lush tropical greenery.",
      "As you enjoy a hearty breakfast buffet of fresh tropical fruits, bakery selections, Indonesian favorites, and warm dishes, majestic orangutans relax, climb, and forage on specially designed play structures just meters away.",
      "Dedicated animal welfare keepers are on hand throughout the session to share fascinating facts about primate care, biology, and conservation, while guiding safe, unhurried photo moments that highlight the gentle nature of these remarkable animals.",
    ],
    highlights: [
      "Generous morning breakfast buffet served at Gayo Restaurant overlooking lush jungle foliage",
      "Close viewing and photography opportunities with orangutans in an open, cage-free setting",
      "Guided photo opportunities supervised by certified zoo keepers and welfare specialists",
      "Full-day Bali Zoo general admission included following the breakfast session",
      "Access to daily animal presentations, bird shows, and the Jungle Splash water play area",
      "Optional private roundtrip hotel transfer package available across major Bali resort areas",
    ],
    flow: [
      "Arrive at Bali Zoo ticketing counter around 07:45 – 08:00 AM (or early morning pickup if transfer package booked)",
      "Take a brief transfer or scenic morning walk to Gayo Restaurant in Kampung Sumatra",
      "08:00 – 10:00 AM: Enjoy your breakfast buffet while observing the orangutans relaxing and playing nearby",
      "Step up for supervised photo opportunities alongside the orangutans with assistance from zoo staff",
      "10:00 AM onward: Spend the rest of the day exploring the entire zoo's trails, shows, and water play area",
    ],
    included: [
      "Full breakfast buffet at Gayo Restaurant (featuring Western, Asian, and tropical selections)",
      "Orangutan viewing, interaction, and supervised photo session",
      "Full-day Bali Zoo general admission",
      "Access to all scheduled educational animal presentations and shows",
      "Access to Jungle Splash water play zone",
      "Comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Specialty espresso drinks or alcoholic beverages outside the standard buffet beverage station",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 973,750 / Child IDR 684,000)",
      "Personal purchases, souvenirs, and optional animal feeding tokens",
    ],
    pickup:
      "Direct package: No transfers included (guests arrive directly at Bali Zoo by 08:00 AM). Optional transfer package available: Adult IDR 973,750 / Child IDR 684,000. Includes roundtrip private AC hotel transfers with typical pickups: Nusa Dua / Jimbaran (06:30–07:00), Kuta / Seminyak / Sanur (07:00–07:15), Ubud (07:15–07:30).",
    requirements: [
      "Advance reservation is strongly recommended due to high demand and strictly capped restaurant seating",
      "Guests must respect animal welfare boundaries and follow keeper instructions during photo opportunities",
      "Child age policy: 3–12 years (child rate); infants under 3 enter free",
      "Casual morning attire and comfortable footwear suitable for walking the zoo grounds afterwards",
    ],
    important: [
      "Breakfast session runs officially from 08:00 AM to 10:00 AM. Guests should arrive promptly by 08:00 AM to maximize their dining and viewing time.",
      "Animal welfare is strictly maintained: orangutan appearances are guided by the zoo's veterinary and behavioral team, and animals are never forced to perform or interact.",
      "Flash photography directly in the animals' eyes is prohibited for their comfort and safety.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What time should we arrive for Breakfast with Orangutan?",
        a: "The breakfast session runs from 08:00 AM to 10:00 AM. We recommend arriving at the Bali Zoo entrance by 07:45 – 08:00 AM so you can check in and reach Gayo Restaurant without rushing.",
      },
      {
        q: "What type of food is served at the breakfast buffet?",
        a: "The buffet features a variety of hot dishes, eggs cooked to order, pastries, fresh tropical fruits, juices, tea, and brewed coffee catering to international tastes.",
      },
      {
        q: "Are we allowed to hold or touch the orangutans?",
        a: "In accordance with modern international animal welfare and veterinary guidelines, guests do not hold the orangutans. Instead, you pose close to them while they perch naturally on dedicated wooden platforms, allowing for memorable photos while safeguarding the animals' wellbeing.",
      },
      {
        q: "Can we explore the rest of Bali Zoo after breakfast?",
        a: "Yes. Your ticket includes full-day general admission, so you can explore the entire zoo, attend animal presentations, and use the Jungle Splash area until closing at 17:00.",
      },
      {
        q: "Are hotel transfers available for this experience?",
        a: "Yes. You can select our verified hotel transfer package (Adult IDR 973,750 / Child IDR 684,000), which provides private air-conditioned roundtrip transport from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, and Jimbaran.",
      },
    ],
  },

  // 3. Elephant Explorer
  {
    slug: "elephant-explorer",
    path: "/bali-zoo/elephant-explorer",
    title: "Bali Zoo Elephant Explorer",
    h1: "Elephant Explorer at Bali Zoo",
    short:
      "A scenic safari trail expedition riding atop gentle Sumatran elephants through lush tropical pathways and bamboo groves at Bali Zoo's Kampung Sumatra.",
    metaTitle: "Bali Zoo Elephant Explorer Tickets & Ride | BaliBonza",
    metaDescription:
      "Book the Elephant Explorer experience at Bali Zoo. Enjoy a scenic ride atop Sumatran elephants through tropical greenery, plus full zoo entry. WhatsApp us.",
    image: BALI_ZOO_IMAGES.elephantExplorer,
    gallery: [
      BALI_ZOO_IMAGES.elephantExplorer,
      BALI_ZOO_IMAGES.elephantMudFun,
      BALI_ZOO_IMAGES.animalExperience,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
      BALI_ZOO_IMAGE_ALTS.animalExperience,
    ],
    alt: "Pengalaman Bali Zoo Elephant Explorer menyusuri jalur hijau Kampung Sumatra",
    location: "Singapadu, Gianyar, Bali",
    duration: "Expedition ride approx. 20 minutes + Full-day zoo admission",
    type: "Wildlife • Elephant Expedition",
    suitableFor: "Couples, families with children, nature enthusiasts",
    price: "Adult: IDR 1,425,000 • Child: IDR 997,500",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-elephant",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Elephant Explorer.\n\nPlease check date availability and send me details for our group.\n\nThank you.",
    intro: [
      "Elephant Explorer offers a peaceful vantage point across Bali Zoo's Kampung Sumatra sanctuary from atop a comfortable teakwood chair mounted on a gentle Sumatran elephant.",
      "Accompanied by experienced mahouts (handlers), you traverse shaded forest trails, tropical bamboo clusters, and scenic river viewpoints while learning about elephant biology, daily care routines, and ongoing habitat conservation initiatives.",
      "This experience is specifically designed as a serene safari ride expedition through nature, distinct from interactive water or mud bathing activities, and includes full general zoo admission for the rest of your day.",
    ],
    highlights: [
      "Approx. 20-minute scenic elephant expedition ride through Kampung Sumatra's forest trails",
      "Ride atop a secure, comfortable teakwood bench chair accompanied by an experienced mahout",
      "Scenic views of riverbanks, bamboo groves, and tropical jungle foliage",
      "Full-day Bali Zoo general admission included with access to all standard exhibits",
      "Attendance at daily educational animal presentations and Jungle Splash water play area",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "Arrive at Bali Zoo and check in at the main ticketing counter with your confirmation voucher",
      "Make your way to the Elephant Explorer boarding station at Kampung Sumatra",
      "Receive a brief safety orientation and mount the secure teakwood seating structure via an elevated platform",
      "Embark on the peaceful approx. 20-minute guided trail ride through shaded jungle landscapes",
      "Disembark at the station and take commemorative photos with the elephants and mahout",
      "Spend the rest of the day exploring the zoo's diverse animal habitats, shows, and amenities",
    ],
    included: [
      "Elephant Explorer guided trail expedition ride (approx. 20 minutes)",
      "Full-day Bali Zoo general admission",
      "Access to scheduled educational animal presentations and bird shows",
      "Access to Jungle Splash water play zone",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Food and beverages (available at on-site restaurants)",
      "Elephant feeding fruit baskets (available for separate purchase at the station)",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 1,615,000 / Child IDR 1,130,500)",
      "Personal expenses and professional photo print purchases",
    ],
    pickup:
      "Direct ticket: Transportation not included (guests arrive independently at Bali Zoo). Optional transfer package available: Adult IDR 1,615,000 / Child IDR 1,130,500 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Comfortable casual clothing and sensible walking shoes",
      "Weight limits and standard boarding safety protocols apply; follow mahout instructions at all times",
      "Child age policy: 3–12 years (child rate); infants under 3 ride seated on an adult's lap",
      "Sun protection recommended during the outdoor trail expedition",
    ],
    important: [
      "Distinct from Elephant Mud Fun: Elephant Explorer is a riding expedition on dry forested trails. It does not involve bathing in mud or water.",
      "Advance booking is strongly recommended to secure your preferred morning or afternoon riding schedule.",
      "Elephant riding sessions are scheduled thoughtfully to ensure comfortable rest intervals for the animals.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What is the difference between Elephant Explorer and Elephant Mud Fun?",
        a: "Elephant Explorer is a scenic 20-minute trail ride atop a comfortable saddle through forested pathways. Elephant Mud Fun is a non-riding, interactive wellness encounter where guests bathe, scrub, and splash in mud and water alongside elephants.",
      },
      {
        q: "How long is the elephant ride?",
        a: "The guided expedition trail ride lasts approximately 20 minutes. Afterward, you have full-day access to explore the rest of Bali Zoo at your own pace.",
      },
      {
        q: "Is Elephant Explorer safe for young children?",
        a: "Yes. The elevated boarding platform makes mounting simple, and children ride securely seated on a wide, sturdy teakwood bench chair flanked by an adult and accompanied by a professional mahout.",
      },
      {
        q: "Are hotel transfers available?",
        a: "Yes, an optional transfer package is available (Adult IDR 1,615,000 / Child IDR 1,130,500) including private air-conditioned vehicle transfers directly to and from your hotel.",
      },
    ],
  },

  // 4. Elephant Mud Fun
  {
    slug: "elephant-mud-fun",
    path: "/bali-zoo/elephant-mud-fun",
    title: "Bali Zoo Elephant Mud Fun",
    h1: "Elephant Mud Fun at Bali Zoo",
    short:
      "Bali's premier ethical elephant mud spa encounter. Join gentle Sumatran elephants in their mud pool, help cover them in therapeutic mud, and wash them in the river splash.",
    metaTitle: "Bali Zoo Elephant Mud Fun Tickets & Spa | BaliBonza",
    metaDescription:
      "Experience Elephant Mud Fun at Bali Zoo. Interactive mud spa, bathing and feeding with Sumatran elephants. Includes meal and zoo entry. WhatsApp booking.",
    image: BALI_ZOO_IMAGES.elephantMudFun,
    gallery: [
      BALI_ZOO_IMAGES.elephantMudFun,
      BALI_ZOO_IMAGES.elephantExplorer,
      BALI_ZOO_IMAGES.breakfastOrangutan,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
    ],
    alt: "Aktivitas mandikan gajah Bali Zoo Elephant Mud Fun di kolam lumpur alami",
    location: "Singapadu, Gianyar, Bali",
    duration: "Half-day program (approx. 4.5 hours) + Full-day zoo admission",
    type: "Wildlife • Mud Spa & Bathing",
    suitableFor: "Adults, couples, wildlife conservationists, and adventure seekers (Adult only)",
    price: "Adult: IDR 1,425,000",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-elephant",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Elephant Mud Fun.\n\nPlease check session availability and send details for our booking.\n\nThank you.",
    intro: [
      "Elephant Mud Fun at Bali Zoo is recognized as one of Indonesia's pioneering ethical elephant experiences, allowing visitors to get hands-on and connect deeply with gentle Sumatran elephants without any riding involved.",
      "In the wild, elephants naturally coat their thick skin with mineral-rich mud to regulate body temperature, protect against insect bites, and moisturize their skin. In this program, you step directly into a purpose-built mud playground alongside mahouts to help apply mud across the elephants' backs and shoulders.",
      "Following the mud spa, accompany the herd to a dedicated freshwater river splash area to wash down, bathe, and shower the elephants before enjoying a rewarding buffet meal and relaxing in the zoo's verdant surroundings.",
    ],
    highlights: [
      "Hands-on, non-riding mud spa encounter alongside gentle Sumatran elephants",
      "Help coat elephants in natural therapeutic mud and splash alongside them in the river wash pool",
      "Complete program including welcome coffee break, Indonesian buffet lunch, and refreshments",
      "Full-day Bali Zoo general admission included before or after your scheduled mud session",
      "Clean hot showers, private changing facilities, lockers, and towels provided on site",
      "Strictly capped sessions per day to safeguard animal welfare and ensure intimate group sizes",
    ],
    flow: [
      "Session I (Morning): 09:30 Coffee Break • 10:00 Mud Fun • 11:30 Lunch • 12:30 Explore Zoo • 14:00 Finish",
      "Session II (Midday): 12:00 Lunch • 13:00 Mud Fun • 14:45 Coffee • 15:15 Explore Zoo • 17:00 Finish",
      "Session III (Afternoon): 12:00 Explore Zoo • 14:00 Coffee • 14:30 Mud Fun • 16:00 Late Lunch • 17:00 Finish",
      "Please note: The official rundown order is subject to change based on daily operational and weather conditions.",
    ],
    included: [
      "Complete Elephant Mud Fun interactive bathing and mud spa program",
      "Coffee break with light refreshments and beverages",
      "Buffet meal (lunch or late lunch depending on chosen session)",
      "Full-day Bali Zoo general admission",
      "Use of clean hot shower facilities, lockers, and fresh bath towel",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 1,615,000)",
      "Dark swimwear or mud-friendly clothing (guests bring their own)",
      "Alcoholic beverages during lunch",
      "Professional photo print purchases",
    ],
    pickup:
      "Direct package: Transportation not included (guests arrive independently at Bali Zoo for their session). Optional transfer package available: Adult IDR 1,615,000 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Adult experience only: Child rate is not available for Elephant Mud Fun according to official park regulations",
      "Bring dark swimwear or an old T-shirt and shorts that you do not mind getting thoroughly muddy",
      "Bring a fresh, clean change of clothes and basic personal toiletries for showering afterwards",
      "Advance booking is essential as each session is strictly capped to protect animal comfort",
    ],
    important: [
      "Three official sessions are operated daily: Session I (morning starting 09:30), Session II (midday starting 12:00), and Session III (afternoon starting 12:00/14:30).",
      "Strict non-riding experience focused entirely on natural elephant care, social enrichment, and mud play.",
      "Lockers, bath towels, and hot shower facilities are provided on-site so you can clean up comfortably before exploring the rest of the zoo.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "Why is child pricing unavailable for Elephant Mud Fun?",
        a: "According to official Bali Zoo safety and operational guidelines, Elephant Mud Fun is designated as an adult-oriented activity due to the physical nature of moving through the mud pool alongside large animals. Therefore, child tickets are not offered.",
      },
      {
        q: "What should I wear and bring for Elephant Mud Fun?",
        a: "Wear dark-colored swimwear or old shorts and a T-shirt that can get covered in thick mud. Bring a dry change of clothes and sunscreen. Towels, private lockers, and hot showers are provided at the venue.",
      },
      {
        q: "What are the three daily session schedules?",
        a: "Session I starts at 09:30 with coffee break followed by mud fun at 10:00 and lunch at 11:30. Session II starts with lunch at 12:00, mud fun at 13:00, and coffee at 14:45. Session III allows zoo exploration from 12:00, coffee at 14:00, mud fun at 14:30, and late lunch at 16:00.",
      },
      {
        q: "Does this include a meal?",
        a: "Yes. Every Elephant Mud Fun ticket includes an Indonesian buffet meal and a coffee break with light refreshments.",
      },
      {
        q: "Can we explore the zoo before or after the mud session?",
        a: "Yes, full-day general zoo admission is completely included in your ticket.",
      },
    ],
  },

  // 5. Brunch with Capybara
  {
    slug: "brunch-with-capybara",
    path: "/bali-zoo/brunch-with-capybara",
    title: "Bali Zoo Brunch with Capybara",
    h1: "Brunch with Capybara at Bali Zoo",
    short:
      "Dine alongside the world's friendliest giant rodents. Enjoy a curated 90-minute brunch and feeding encounter with adorable capybaras, plus full-day zoo admission.",
    metaTitle: "Brunch with Capybara Bali Zoo Tickets | BaliBonza",
    metaDescription:
      "Experience Brunch with Capybara at Bali Zoo. 90-minute brunch, close interaction, feeding session, and full zoo admission. WhatsApp booking available.",
    image: BALI_ZOO_IMAGES.animalExperience,
    gallery: [
      BALI_ZOO_IMAGES.animalExperience,
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantMudFun,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.animalExperience,
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.animalExperience,
    location: "Singapadu, Gianyar, Bali",
    duration: "90-minute brunch session + Full-day zoo admission",
    type: "Wildlife • Dining Encounter",
    suitableFor: "Couples, families with children, capybara enthusiasts, and nature lovers",
    price: "Adult: IDR 712,500 • Child: IDR 498,750",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-capybara",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Brunch with Capybara.\n\nPlease check session availability and send details for our group.\n\nThank you.",
    intro: [
      "Celebrate the charm of the world's largest, most peaceful rodent species with Bali Zoo's exclusive Brunch with Capybara experience. Set within a dedicated garden pavilion, this relaxed 90-minute program combines a delicious sit-down meal with intimate animal interaction.",
      "During your session, you are served a curated meal and beverage from a selected menu while friendly, calm capybaras mingle nearby. Guided by dedicated zoo keepers, you will have the opportunity to hand-feed fresh greens to these gentle creatures and capture unhurried photos.",
      "Because group sizes per session are strictly limited, the atmosphere remains quiet, calm, and respectful of the animals, making it an especially rewarding outing for couples and families alike.",
    ],
    highlights: [
      "Curated 90-minute sit-down brunch featuring one meal and one drink from a selected menu",
      "Up-close hands-on capybara feeding and gentle interaction guided by trained keepers",
      "Two daily sessions available: Session I (09:30–11:00) and Session II (11:00–12:30)",
      "Full-day Bali Zoo general admission included for complete park exploration",
      "Access to daily educational animal presentations and the Jungle Splash water play area",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "Arrive at Bali Zoo ticketing desk in Singapadu, Gianyar prior to your confirmed session start",
      "Proceed to the dedicated Capybara pavilion (Session I: 09:30 – 11:00 or Session II: 11:00 – 12:30)",
      "Take your reserved seat and select your preferred meal and beverage from the curated menu",
      "Step into the feeding area under keeper supervision to hand-feed fresh vegetables to the capybaras",
      "Enjoy your meal at a leisurely pace while observing the animals in their peaceful enclosure",
      "Spend the remainder of the day exploring the rest of Bali Zoo's wildlife exhibits and attractions",
    ],
    included: [
      "90-minute Brunch with Capybara session",
      "One meal and one beverage per person selected from the designated brunch menu",
      "Fresh vegetable snacks for hand-feeding the capybaras",
      "Close interaction and photo session guided by animal keepers",
      "Full-day Bali Zoo general admission",
      "Access to animal presentations and Jungle Splash water zone",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Extra food items or specialty beverages outside the selected brunch set",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 902,500 / Child IDR 631,750)",
      "Personal expenses, locker rentals, and souvenirs",
    ],
    pickup:
      "Direct ticket: Transportation not included (guests arrive independently at Bali Zoo). Optional transfer package available: Adult IDR 902,500 / Child IDR 631,750 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Strictly limited seats per session; advance reservation is strongly advised",
      "Guests must follow keeper instructions regarding gentle handling and feeding",
      "Child age policy: 3–12 years (child rate); infants under 3 enter free with an accompanying adult",
      "Casual, comfortable clothing suitable for an outdoor garden pavilion",
    ],
    important: [
      "Operated in two distinct morning/midday sessions: Session I (09:30–11:00) and Session II (11:00–12:30).",
      "Differs from Capybara Connection: Brunch with Capybara is a 90-minute program that includes a full meal and beverage, whereas Capybara Connection is a 1-hour afternoon encounter with a complimentary drink.",
      "Capybaras are docile, calm animals; interaction is conducted gently without forcing the animals.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What is included in the brunch meal?",
        a: "Each guest receives one main course and one beverage chosen from a specially curated menu featuring both Indonesian and Western brunch options.",
      },
      {
        q: "What are the session timings for Brunch with Capybara?",
        a: "Session I runs from 09:30 AM to 11:00 AM, and Session II runs from 11:00 AM to 12:30 PM. Please arrive at the zoo 15–20 minutes before your session begins.",
      },
      {
        q: "How does Brunch with Capybara differ from Capybara Connection?",
        a: "Brunch with Capybara is a 90-minute morning/midday experience that includes a full sit-down meal and beverage plus capybara feeding. Capybara Connection is a 1-hour afternoon encounter focused on feeding and petting with a complimentary drink (no full meal).",
      },
      {
        q: "Is this experience suitable for young children?",
        a: "Yes, capybaras are known for their gentle, placid temperament, making this encounter very safe and enjoyable for children when supervised by parents and zoo keepers.",
      },
      {
        q: "Are hotel transfers available?",
        a: "Yes, you can book our verified transfer package (Adult IDR 902,500 / Child IDR 631,750), which includes private air-conditioned hotel pickup and return.",
      },
    ],
  },

  // 6. Capybara Connection
  {
    slug: "capybara-connection",
    path: "/bali-zoo/capybara-connection",
    title: "Bali Zoo Capybara Connection",
    h1: "Capybara Connection at Bali Zoo",
    short:
      "A dedicated afternoon animal encounter. Get up close to feed, pet, and connect with charming capybaras, complete with a complimentary drink and full-day zoo entry.",
    metaTitle: "Bali Zoo Capybara Connection Tickets & Feeding | BaliBonza",
    metaDescription:
      "Book Capybara Connection at Bali Zoo. Up-close feeding encounter, complimentary drink, and full zoo admission. Multiple afternoon sessions. WhatsApp booking.",
    image: BALI_ZOO_IMAGES.animalExperience,
    gallery: [
      BALI_ZOO_IMAGES.animalExperience,
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantExplorer,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.animalExperience,
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.animalExperience,
    location: "Singapadu, Gianyar, Bali",
    duration: "1-hour encounter session + Full-day zoo admission",
    type: "Wildlife • Animal Encounter",
    suitableFor: "All ages, families with kids, couples, and capybara fans",
    price: "Adult: IDR 574,750 • Child: IDR 408,500",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-capybara",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Capybara Connection.\n\nPlease check session availability and send details for our group.\n\nThank you.",
    intro: [
      "Capybara Connection is Bali Zoo's focused afternoon encounter designed specifically for travelers eager to spend meaningful, direct time with these famously serene animals without committing to a full dining program.",
      "Stepping inside the capybara habitat under the guidance of passionate animal keepers, you will learn about capybara social structures, their native South American habitat, and their love of fresh vegetation. Hand-feed them crisp greens, gently scratch their thick coats, and enjoy their relaxed demeanor.",
      "The experience includes a refreshing complimentary beverage to enjoy on site and gives you full access to explore the rest of Bali Zoo before or after your booked session.",
    ],
    highlights: [
      "Intimate 1-hour animal encounter inside the dedicated capybara habitat",
      "Hands-on feeding session with fresh vegetable snacks provided for the capybaras",
      "One complimentary refreshing beverage included per guest",
      "Three flexible afternoon sessions: Session I (13:00–14:00), Session II (14:00–15:00), Session III (15:00–16:00)",
      "Full-day Bali Zoo general admission included with show presentations and water play access",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "Arrive at Bali Zoo at your convenience earlier in the day to explore general exhibits and presentations",
      "Make your way to the Capybara Connection encounter area 10 minutes prior to your booked session",
      "Session choices: Session I (13:00–14:00), Session II (14:00–15:00), or Session III (15:00–16:00)",
      "Meet the animal keepers, receive a short briefing on handling, and enter the habitat enclosure",
      "Hand-feed the capybaras, interact gently, take photos, and enjoy your complimentary beverage",
      "Continue exploring the zoo grounds or relax at the café until park closing at 17:00",
    ],
    included: [
      "1-hour Capybara Connection interactive encounter",
      "Fresh vegetable feeding basket for the capybaras",
      "One complimentary beverage per person",
      "Full-day Bali Zoo general admission",
      "Access to all scheduled educational animal presentations",
      "Access to Jungle Splash water play area",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Full sit-down meal (this is an encounter with a drink, not a full brunch meal)",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 764,750 / Child IDR 536,750)",
      "Personal expenses and optional professional photo prints",
    ],
    pickup:
      "Direct ticket: Transportation not included (guests arrive independently). Optional transfer package available: Adult IDR 764,750 / Child IDR 536,750 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Gentle interaction is required; follow animal keeper instructions throughout the encounter",
      "Child age policy: 3–12 years (child rate); infants under 3 enter free with an adult",
      "Advance booking recommended to secure your preferred afternoon time slot",
    ],
    important: [
      "Operated in three afternoon sessions daily: Session I (13:00–14:00), Session II (14:00–15:00), and Session III (15:00–16:00).",
      "Distinction from Brunch with Capybara: Capybara Connection is a 1-hour afternoon encounter including a complimentary drink and feeding, whereas Brunch with Capybara is a 90-minute morning session with a full sit-down meal.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What is included with Capybara Connection?",
        a: "The ticket includes a 1-hour interactive encounter inside the capybara enclosure, feeding vegetables, one complimentary drink, and full-day general admission to Bali Zoo.",
      },
      {
        q: "Does this package include a full meal?",
        a: "No. Capybara Connection includes a complimentary beverage. If you prefer a full sit-down dining experience with capybaras, choose the morning Brunch with Capybara package instead.",
      },
      {
        q: "What times are the sessions held?",
        a: "There are three 1-hour afternoon sessions: Session I from 13:00 to 14:00, Session II from 14:00 to 15:00, and Session III from 15:00 to 16:00.",
      },
      {
        q: "Can we visit the zoo before our session starts?",
        a: "Yes! Your ticket provides full-day general zoo entry, so you can arrive as early as 09:00 AM, explore the exhibits, and join your scheduled afternoon session at the appointed time.",
      },
    ],
  },

  // 7. Behind Closed Doors
  {
    slug: "behind-closed-doors",
    path: "/bali-zoo/behind-closed-doors",
    title: "Bali Zoo Behind Closed Doors",
    h1: "Behind Closed Doors Tour at Bali Zoo",
    short:
      "An exclusive backstage conservation journey. Explore animal hospital facilities, nutrition kitchens, and behind-the-scenes wildlife care with dedicated zoologists.",
    metaTitle: "Bali Zoo Behind Closed Doors VIP Tour | BaliBonza",
    metaDescription:
      "Book the exclusive Behind Closed Doors tour at Bali Zoo. VIP backstage access to veterinary care, animal nutrition, and conservation facilities. WhatsApp booking.",
    image: BALI_ZOO_IMAGES.animalExperience,
    gallery: [
      BALI_ZOO_IMAGES.animalExperience,
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantMudFun,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.animalExperience,
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.animalExperience,
    location: "Singapadu, Gianyar, Bali",
    duration: "Backstage tour approx. 2 hours + Full-day zoo admission",
    type: "Wildlife • Backstage VIP Tour",
    suitableFor:
      "Wildlife enthusiasts, conservation-minded travelers, biology students, and older children",
    price: "Adult: IDR 855,000 • Child: IDR 598,500",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-signature",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Behind Closed Doors.\n\nPlease check schedule availability and send details for our group.\n\nThank you.",
    intro: [
      "Behind Closed Doors offers privileged, small-group backstage access to the specialized care, veterinary medicine, and scientific nutrition that support the hundreds of animals residing at Bali Zoo.",
      "Led by dedicated zoologists and senior animal care specialists, this educational walking tour takes you beyond the public barriers into restricted staff facilities, including the animal nutrition prep kitchen, clinical veterinary treatment rooms, and quarantine habitats.",
      "You will gain an authentic understanding of modern zoo management, ethical wildlife enrichment, and Indonesian endangered species conservation, followed by full access to explore the park on your own.",
    ],
    highlights: [
      "Privileged access to staff-only conservation, veterinary clinic, and nutrition facilities",
      "Observe daily dietary preparation and learn how specialized animal feeds are formulated",
      "Gain first-hand insights into veterinary care and animal welfare protocols from zoo professionals",
      "Small-group guided experience ensuring quiet, informative interaction with zoo specialists",
      "Full-day Bali Zoo general admission included with access to presentations and water play area",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "Arrive at Bali Zoo and check in at the dedicated guest relations desk for your backstage orientation",
      "Meet your zoological specialist guide and review bio-security and safety guidelines",
      "Tour the animal commissary and nutrition prep kitchen to see how species-specific diets are prepared",
      "Visit the veterinary care clinic, nursery areas, and animal rehabilitation facilities",
      "Engage in discussions regarding Indonesian conservation projects and daily animal enrichment programs",
      "Conclude the guided backstage tour and spend the rest of the day enjoying public zoo exhibits at your leisure",
    ],
    included: [
      "Behind Closed Doors guided backstage educational tour",
      "Expert commentary from a dedicated zoologist or senior animal care specialist",
      "Full-day Bali Zoo general admission",
      "Access to scheduled educational animal presentations and shows",
      "Access to Jungle Splash water play zone",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Food and beverages (meals can be purchased at on-site restaurants)",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 1,045,000 / Child IDR 731,500)",
      "Personal expenses and retail purchases",
    ],
    pickup:
      "Direct ticket: Transportation not included (guests arrive independently at Bali Zoo). Optional transfer package available: Adult IDR 1,045,000 / Child IDR 731,500 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Closed-toe footwear (sneakers or walking shoes) is mandatory for entry into clinical and kitchen backstage areas",
      "Strict compliance with biosecurity protocols and keeper instructions is required at all times",
      "Child age policy: 3–12 years (child rate); children must be accompanied and closely supervised by an adult",
    ],
    important: [
      "Tour sizes are strictly limited to minimize disturbance to animals undergoing clinical treatment or rest.",
      "Access to specific clinical rooms on any given day is subject to veterinary procedures and patient welfare.",
      "This is an educational conservation tour; it focuses on animal husbandry and medical care rather than high-volume petting.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What areas of the zoo are visited during Behind Closed Doors?",
        a: "The tour visits restricted backstage facilities including the animal commissary (nutrition kitchen), the veterinary treatment clinic, rehabilitation quarters, and keeper care stations that are normally closed to the general public.",
      },
      {
        q: "Are closed-toe shoes really required?",
        a: "Yes. For health, safety, and hygiene standards in veterinary and food preparation areas, guests must wear closed shoes (no flip-flops or open sandals).",
      },
      {
        q: "Is this tour suitable for children?",
        a: "Yes, curious children aged 3 and older can participate, provided they are supervised by an adult and can adhere to calm, quiet behavior in sensitive animal care areas.",
      },
      {
        q: "Does this ticket include general zoo admission?",
        a: "Yes, full-day general admission to all public exhibits and scheduled shows at Bali Zoo is completely included.",
      },
    ],
  },

  // 8. Breakfast with Orangutan & Elephant Mud Fun
  {
    slug: "breakfast-with-orangutan-elephant-mud-fun",
    path: "/bali-zoo/breakfast-with-orangutan-elephant-mud-fun",
    title: "Bali Zoo Breakfast with Orangutan & Elephant Mud Fun",
    h1: "Breakfast with Orangutan & Elephant Mud Fun Combo",
    short:
      "Bali Zoo's ultimate full-day signature combo. Feast on a breakfast buffet with orangutans in the morning, followed by the therapeutic elephant mud spa.",
    metaTitle: "Breakfast with Orangutan & Elephant Mud Fun | BaliBonza",
    metaDescription:
      "Book the ultimate Bali Zoo combo: Breakfast with Orangutan plus Elephant Mud Fun. Includes meals, mud spa, and zoo entry. Inquire via WhatsApp.",
    image: BALI_ZOO_IMAGES.breakfastOrangutan,
    gallery: [
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantMudFun,
      BALI_ZOO_IMAGES.elephantExplorer,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
    location: "Singapadu, Gianyar, Bali",
    duration: "Full-day program (approx. 6 – 7 hours)",
    type: "Wildlife • Signature Combo",
    suitableFor:
      "Adults, couples, wildlife enthusiasts, and special occasion celebrations (Adult only)",
    price: "Adult: IDR 1,781,250",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-elephant",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Breakfast with Orangutan & Elephant Mud Fun.\n\nPlease check combo availability and send details for our group.\n\nThank you.",
    intro: [
      "Combining Bali Zoo's two most celebrated signature programs into one cohesive full-day itinerary, this premier package delivers an unparalleled wildlife immersion in the heart of Gianyar.",
      "Begin your morning at 08:00 AM at Gayo Restaurant in Kampung Sumatra, savoring a generous breakfast buffet while majestic orangutans relax, climb, and feed nearby in an open-air environment with supervised photo moments.",
      "After morning zoo exploration, transition seamlessly into the renowned Elephant Mud Fun program, where you step into the mud playground alongside Sumatran elephants, apply mineral-rich mud, and wash down in the freshwater river pool before enjoying lunch and hot shower facilities.",
    ],
    highlights: [
      "Full morning breakfast buffet at Gayo Restaurant with close-up orangutan viewing and photo sessions",
      "Complete Elephant Mud Fun experience including therapeutic mud spa, river washing, and elephant care",
      "Multiple meals included: breakfast buffet, buffet lunch, and afternoon coffee break",
      "Full-day Bali Zoo general admission with educational animal presentations and exhibits",
      "Towels, private lockers, hot showers, and changing amenities provided on site",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "08:00 AM: Arrive at Bali Zoo and proceed to Gayo Restaurant for Breakfast with Orangutan",
      "08:00 – 10:00 AM: Enjoy the breakfast buffet, observe orangutans, and take supervised photographs",
      "10:00 – 12:00 PM: Explore the zoo's shaded walking trails and attend morning animal presentations",
      "12:00 PM: Check in for Elephant Mud Fun and enjoy a delicious buffet lunch",
      "13:00 – 14:45 PM: Hands-on mud spa, elephant grooming, and river splash bath in Kampung Sumatra",
      "14:45 – 15:30 PM: Refresh with a hot shower, change into dry clothes, and enjoy an afternoon coffee break",
      "15:30 – 17:00 PM: Final relaxed exploration of the park before departure",
    ],
    included: [
      "Full breakfast buffet at Gayo Restaurant",
      "Orangutan viewing, interaction, and supervised photo session",
      "Complete Elephant Mud Fun bathing and grooming program",
      "Buffet lunch and afternoon coffee break with light refreshments",
      "Full-day Bali Zoo general admission",
      "Use of hot showers, private lockers, and fresh bath towels",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 1,971,250)",
      "Dark swimwear or mud-friendly clothing (guests bring their own)",
      "Alcoholic beverages",
      "Professional photo prints by park photographers",
    ],
    pickup:
      "Direct package: Transportation not included (guests arrive at Bali Zoo by 08:00 AM). Optional transfer package available: Adult IDR 1,971,250 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Adult experience only: In accordance with Elephant Mud Fun safety rules, child tickets are unavailable for this combo",
      "Bring dark swimwear or clothes that can get muddy, plus a dry set of clothes for the afternoon",
      "Advance reservation is strictly required due to limited daily table and mud session capacities",
    ],
    important: [
      "Combines two high-demand official experiences into a coordinated, non-rushed schedule.",
      "Elephant Mud Fun is strictly a non-riding experience focused on natural bathing and skin care.",
      "Hot showers, private lockers, and bath towels are included so you remain comfortable throughout the day.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "Why is child pricing not available for this combo?",
        a: "Because this package incorporates Elephant Mud Fun, which is restricted to adult guests under Bali Zoo safety policies, the combo is offered exclusively at the adult rate.",
      },
      {
        q: "Are both breakfast and lunch included in this package?",
        a: "Yes. You receive the full breakfast buffet during the morning orangutan session, as well as an Indonesian buffet lunch and an afternoon coffee break during the Elephant Mud Fun program.",
      },
      {
        q: "What should I pack for this full-day experience?",
        a: "Pack dark swimwear or clothes for the mud bath, a change of dry clothes, sunscreen, and personal toiletries. Towels and lockers are provided.",
      },
      {
        q: "Is hotel transfer available for this full-day program?",
        a: "Yes. An optional transfer package is available (Adult IDR 1,971,250) that includes private air-conditioned vehicle pickup and return directly to your accommodation.",
      },
    ],
  },

  // 9. Breakfast with Orangutan & Brunch with Capybara
  {
    slug: "breakfast-with-orangutan-brunch-with-capybara",
    path: "/bali-zoo/breakfast-with-orangutan-brunch-with-capybara",
    title: "Bali Zoo Breakfast with Orangutan & Brunch with Capybara",
    h1: "Breakfast with Orangutan & Brunch with Capybara Combo",
    short:
      "A unique double culinary wildlife adventure. Experience early morning dining with playful orangutans, followed by an intimate midday brunch and capybara feeding encounter.",
    metaTitle: "Breakfast with Orangutan & Brunch with Capybara | BaliBonza",
    metaDescription:
      "Book the double dining combo at Bali Zoo: Breakfast with Orangutan plus Brunch with Capybara. Meals, encounters, and full zoo entry included. WhatsApp booking.",
    image: BALI_ZOO_IMAGES.breakfastOrangutan,
    gallery: [
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.animalExperience,
      BALI_ZOO_IMAGES.elephantExplorer,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.animalExperience,
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
    location: "Singapadu, Gianyar, Bali",
    duration: "Full-day program (approx. 5 – 6 hours)",
    type: "Wildlife • Double Dining Combo",
    suitableFor: "Couples, families with children, animal lovers, and food enthusiasts",
    price: "Adult: IDR 1,258,750 • Child: IDR 883,500",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-capybara",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Breakfast with Orangutan & Brunch with Capybara.\n\nPlease check combo availability and send details for our group.\n\nThank you.",
    intro: [
      "Crafted for travelers who appreciate remarkable dining settings and gentle animal interactions, this package seamlessly pairs Bali Zoo's two signature culinary encounters into one memorable day.",
      "Your morning begins at 08:00 AM with a hearty breakfast buffet at Gayo Restaurant alongside playful orangutans. After a leisurely stroll through the shaded gardens and morning animal exhibits, you transition to the Capybara pavilion at 11:00 AM for Session II of Brunch with Capybara.",
      "Enjoy a curated meal and beverage while hand-feeding fresh vegetables to the calm capybaras, followed by unhurried afternoon exploration of the park and its Jungle Splash water zone.",
    ],
    highlights: [
      "Morning breakfast buffet with close-up orangutan viewing at Gayo Restaurant",
      "Midday 90-minute Brunch with Capybara including one selected meal, one beverage, and feeding",
      "Coordinated, relaxed itinerary with ample time between dining sessions",
      "Full-day Bali Zoo general admission included with animal presentations and shows",
      "Complimentary access to the Jungle Splash water play area for children",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "08:00 AM: Arrive at Bali Zoo and head to Gayo Restaurant for Breakfast with Orangutan",
      "08:00 – 10:00 AM: Enjoy the breakfast buffet, observe orangutans, and take supervised photographs",
      "10:00 – 11:00 AM: Stroll through nearby shaded animal trails and view morning wildlife exhibits",
      "11:00 – 12:30 PM: Attend Brunch with Capybara (Session II) for your curated meal and capybara feeding",
      "12:30 PM onward: Spend the afternoon exploring the remaining zoo habitats, shows, or water play area",
    ],
    included: [
      "Full breakfast buffet at Gayo Restaurant",
      "Orangutan viewing, interaction, and supervised photo session",
      "90-minute Brunch with Capybara (one meal and one beverage per person from selected menu)",
      "Fresh vegetable snacks for hand-feeding the capybaras",
      "Full-day Bali Zoo general admission",
      "Access to all scheduled animal presentations and shows",
      "Access to Jungle Splash water play area",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Additional meals, specialty beverages, or alcohol outside package allowances",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 1,448,750 / Child IDR 1,016,500)",
      "Personal expenses, locker hire, and retail purchases",
    ],
    pickup:
      "Direct ticket: Transportation not included (guests arrive at Bali Zoo by 08:00 AM). Optional transfer package available: Adult IDR 1,448,750 / Child IDR 1,016,500 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Child age policy: 3–12 years (child rate); infants under 3 enter free with an accompanying adult",
      "Comfortable casual clothing and sensible walking footwear",
      "Advance booking is essential as seats are limited across both dining venues",
    ],
    important: [
      "The timing between Breakfast with Orangutan (08:00–10:00) and Brunch with Capybara Session II (11:00–12:30) is spaced to allow a leisurely walk without rushing.",
      "Both experiences are conducted with animal welfare as the highest priority.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "Is there enough time between the breakfast and brunch sessions?",
        a: "Yes. Breakfast concludes at 10:00 AM, providing a comfortable 1-hour interval to explore the botanical paths and aviaries before checking into the Capybara pavilion for the 11:00 AM brunch session.",
      },
      {
        q: "Is this combination package family-friendly?",
        a: "Yes, both encounters are gentle, safe, and highly engaging for children, with dedicated child pricing for guests aged 3–12.",
      },
      {
        q: "What food is included during the day?",
        a: "You receive a full morning buffet during the orangutan experience, plus one chosen meal and one beverage from the curated menu during the capybara brunch.",
      },
      {
        q: "Can we use the Jungle Splash water area?",
        a: "Yes, full-day general zoo access and water play zone entry are completely included.",
      },
    ],
  },

  // 10. Capybara Connection & Behind Closed Doors
  {
    slug: "capybara-connection-behind-closed-doors",
    path: "/bali-zoo/capybara-connection-behind-closed-doors",
    title: "Bali Zoo Capybara Connection & Behind Closed Doors",
    h1: "Capybara Connection & Behind Closed Doors Combo",
    short:
      "Combine an afternoon capybara feeding encounter with an exclusive backstage conservation tour of Bali Zoo's veterinary and animal care facilities.",
    metaTitle: "Capybara Connection & Behind Closed Doors Combo | BaliBonza",
    metaDescription:
      "Book Bali Zoo Capybara Connection & Behind Closed Doors tour combo. Backstage VIP access, capybara feeding, drink, and full zoo admission. WhatsApp booking.",
    image: BALI_ZOO_IMAGES.animalExperience,
    gallery: [
      BALI_ZOO_IMAGES.animalExperience,
      BALI_ZOO_IMAGES.breakfastOrangutan,
      BALI_ZOO_IMAGES.elephantMudFun,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.animalExperience,
      BALI_ZOO_IMAGE_ALTS.breakfastOrangutan,
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.animalExperience,
    location: "Singapadu, Gianyar, Bali",
    duration: "Full-day program (approx. 4 – 5 hours)",
    type: "Wildlife • Backstage & Encounter",
    suitableFor: "Conservation enthusiasts, animal lovers, curious families, and older children",
    price: "Adult: IDR 1,116,250 • Child: IDR 788,500",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-capybara",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Capybara Connection & Behind Closed Doors.\n\nPlease check combo availability and send details for our group.\n\nThank you.",
    intro: [
      "This insightful combination pairs an educational behind-the-scenes exploration of Bali Zoo's medical and nutritional operations with an intimate, hands-on afternoon encounter alongside friendly capybaras.",
      "During the morning or midday Behind Closed Doors tour, a dedicated zoologist guides you through restricted areas including the animal kitchen, clinical hospital, and quarantine habitats to reveal the meticulous science behind wildlife care.",
      "In the afternoon, join Session II of Capybara Connection (14:00–15:00) to feed fresh greens to the capybaras, enjoy a complimentary beverage, and experience the calming presence of these South American ambassadors.",
    ],
    highlights: [
      "Guided Behind Closed Doors VIP backstage tour of animal hospital and nutrition kitchens",
      "Afternoon 1-hour Capybara Connection feeding encounter with fresh vegetables",
      "One complimentary beverage included during the Capybara encounter",
      "First-hand insights from zoologists and senior animal care specialists",
      "Full-day Bali Zoo general admission with animal presentations and water play area",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "Morning arrival at Bali Zoo and leisure exploration of general wildlife exhibits",
      "Join your scheduled Behind Closed Doors guided tour through veterinary and nutrition facilities",
      "Break for lunch at your own pace at one of the zoo's lakeside or garden restaurants",
      "14:00 – 15:00 PM: Check in for Capybara Connection (Session II) for hands-on feeding and photos",
      "Enjoy your complimentary beverage and spend the rest of the afternoon exploring until park closing",
    ],
    included: [
      "Behind Closed Doors guided backstage tour with a zoology specialist",
      "Capybara Connection 1-hour interactive encounter with vegetable feeding basket",
      "One complimentary beverage during the Capybara session",
      "Full-day Bali Zoo general admission",
      "Access to all scheduled educational animal presentations and shows",
      "Access to Jungle Splash water play area",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Full lunch meal (meals and snacks can be purchased independently at on-site restaurants)",
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 1,306,250 / Child IDR 921,500)",
      "Personal expenses and retail purchases",
    ],
    pickup:
      "Direct ticket: Transportation not included (guests arrive independently at Bali Zoo). Optional transfer package available: Adult IDR 1,306,250 / Child IDR 921,500 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Closed-toe shoes (sneakers or walking shoes) are required for the backstage tour portion",
      "Child age policy: 3–12 years (child rate); infants under 3 enter free with an adult",
      "Gentle handling and adherence to keeper instructions required during the animal encounter",
    ],
    important: [
      "Combines the Behind Closed Doors VIP tour with Capybara Connection Session II (14:00–15:00).",
      "Lunch is not included in this package, giving you flexibility to choose from the zoo's various dining venues.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "What does this combo include?",
        a: "It includes the Behind Closed Doors VIP backstage tour with a zoologist, the 1-hour Capybara Connection feeding encounter with a complimentary drink, and full-day general zoo admission.",
      },
      {
        q: "Is lunch included in this package?",
        a: "No, a sit-down meal is not included in this package, though you receive a complimentary drink during the capybara session. Multiple restaurants and cafes are available within the zoo for lunch.",
      },
      {
        q: "What footwear should we wear?",
        a: "Closed-toe shoes are required for the backstage tour through veterinary and nutrition areas. Flip-flops or open sandals are not permitted in restricted zones.",
      },
      {
        q: "Are hotel transfers available?",
        a: "Yes. An optional transfer package is available (Adult IDR 1,306,250 / Child IDR 921,500) with private roundtrip hotel transportation.",
      },
    ],
  },

  // 11. Elephant Mud Fun & Behind Closed Doors
  {
    slug: "elephant-mud-fun-behind-closed-doors",
    path: "/bali-zoo/elephant-mud-fun-behind-closed-doors",
    title: "Bali Zoo Elephant Mud Fun & Behind Closed Doors",
    h1: "Elephant Mud Fun & Behind Closed Doors Combo",
    short:
      "An extraordinary conservation immersion. Go behind the scenes of zoo veterinary care and clinical nutrition, followed by an interactive mud spa with rescued elephants.",
    metaTitle: "Elephant Mud Fun & Behind Closed Doors Combo | BaliBonza",
    metaDescription:
      "Book the Bali Zoo Elephant Mud Fun and Behind Closed Doors VIP combo. Backstage conservation tour, elephant mud spa, meal, and zoo entry. WhatsApp us.",
    image: BALI_ZOO_IMAGES.elephantMudFun,
    gallery: [
      BALI_ZOO_IMAGES.elephantMudFun,
      BALI_ZOO_IMAGES.elephantExplorer,
      BALI_ZOO_IMAGES.animalExperience,
    ],
    galleryAlts: [
      BALI_ZOO_IMAGE_ALTS.elephantMudFun,
      BALI_ZOO_IMAGE_ALTS.elephantExplorer,
      BALI_ZOO_IMAGE_ALTS.animalExperience,
    ],
    alt: BALI_ZOO_IMAGE_ALTS.elephantMudFun,
    location: "Singapadu, Gianyar, Bali",
    duration: "Full-day program (approx. 6 hours)",
    type: "Wildlife • VIP Conservation Combo",
    suitableFor: "Adults, wildlife conservationists, and elephant lovers (Adult only)",
    price: "Adult: IDR 1,852,500",
    categoryId: "wildlife-animal",
    subcategory: "bali-zoo-elephant",
    whatsappText:
      "Hello BaliBonza,\n\nI would like to book Bali Zoo Elephant Mud Fun & Behind Closed Doors.\n\nPlease check combo availability and send details for our group.\n\nThank you.",
    intro: [
      "For travelers passionate about animal welfare, veterinary science, and hands-on conservation, this full-day VIP package represents Bali Zoo's most thorough and rewarding wildlife immersion.",
      "Your day starts with the Behind Closed Doors backstage educational tour, exploring staff-only clinics, nutritional preparation hubs, and quarantine quarters alongside dedicated zoological specialists.",
      "In the afternoon, proceed to Kampung Sumatra for the acclaimed Elephant Mud Fun program, where you step into the mud spa alongside gentle Sumatran elephants, help coat their skin in therapeutic volcanic clay, wash them in the river pool, and enjoy an Indonesian buffet lunch with full shower amenities.",
    ],
    highlights: [
      "Guided Behind Closed Doors VIP tour of animal hospital, nursery, and nutrition facilities",
      "Complete hands-on Elephant Mud Fun mud spa, grooming, and river wash-down program",
      "Buffet lunch and coffee break with light refreshments included",
      "Full-day Bali Zoo general admission with animal presentations and exhibits",
      "Clean hot showers, private lockers, and fresh bath towels provided",
      "Optional private roundtrip hotel transfer package available",
    ],
    flow: [
      "Morning arrival and check-in at the guest relations desk for the Behind Closed Doors VIP tour",
      "Explore restricted veterinary treatment rooms, quarantine facilities, and animal nutrition kitchens",
      "Proceed to Kampung Sumatra for the Elephant Mud Fun program check-in and coffee break",
      "Buffet lunch served in the shaded pavilion overlooking the elephant sanctuary",
      "Step into the mud pool for therapeutic mud bathing, followed by the river splash wash-down",
      "Refresh with hot showers and change of clothes using provided towels and locker amenities",
      "Enjoy late afternoon zoo exploration before departure",
    ],
    included: [
      "Behind Closed Doors guided backstage educational tour",
      "Dedicated zoologist or senior animal care guide",
      "Complete Elephant Mud Fun interactive bathing and grooming encounter",
      "Indonesian buffet lunch and coffee break with refreshments",
      "Full-day Bali Zoo general admission",
      "Use of hot showers, private lockers, and fresh bath towels",
      "Official comprehensive zoo visitor insurance coverage",
    ],
    excluded: [
      "Hotel pickup and drop-off (available as an optional verified transfer package: Adult IDR 2,042,500)",
      "Dark swimwear or mud-friendly clothing (guests bring their own)",
      "Alcoholic beverages during lunch",
      "Professional photo prints by park photographers",
    ],
    pickup:
      "Direct package: Transportation not included (guests arrive independently at Bali Zoo). Optional transfer package available: Adult IDR 2,042,500 with private roundtrip transfers from Kuta, Seminyak, Sanur, Ubud, Nusa Dua, or Jimbaran.",
    requirements: [
      "Adult experience only: In accordance with Elephant Mud Fun regulations, child tickets are unavailable for this combo",
      "Closed-toe shoes (sneakers) required for the backstage tour; dark swimwear or mud clothes needed for the mud spa",
      "Bring a fresh change of clothes for after your shower",
      "Advance reservation is strictly required due to capped tour and mud session capacities",
    ],
    important: [
      "Combines an exclusive backstage educational conservation tour with the popular Elephant Mud Fun program.",
      "Elephant Mud Fun is strictly a non-riding experience focused on natural skin therapy and river bathing.",
      "Hot showers, private lockers, and fresh towels are provided on site for your convenience.",
      "Official published rate valid 1 April 2026 – 31 March 2027.",
    ],
    faq: [
      {
        q: "Why is child pricing unavailable for this combo?",
        a: "Because this combo includes Elephant Mud Fun, which is restricted to adult participants under official Bali Zoo safety regulations, child pricing is not available.",
      },
      {
        q: "What should I wear and pack for this full-day package?",
        a: "Wear closed-toe walking shoes and light clothes for the morning Behind Closed Doors tour. Bring dark swimwear or clothes you do not mind getting muddy for the elephant mud spa, plus a clean change of clothes. Towels and lockers are provided.",
      },
      {
        q: "Is lunch included in this package?",
        a: "Yes, an Indonesian buffet lunch and a coffee break with light refreshments are included as part of the Elephant Mud Fun program.",
      },
      {
        q: "Are hotel transfers available?",
        a: "Yes. An optional transfer package is available (Adult IDR 2,042,500) that includes private roundtrip hotel transportation.",
      },
    ],
  },
];
