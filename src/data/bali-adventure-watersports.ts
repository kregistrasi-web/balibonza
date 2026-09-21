import atvRiverSplashImg from "@/assets/images/atv_river_splash_1789047538920.jpg";
import atvJungleMudImg from "@/assets/images/atv_jungle_mud_1789047509415.jpg";
import ayungRiverRaftingImg from "@/assets/ayung-river-rafting-bali (5).webp";
import atvWaterfallCoupleImg from "@/assets/images/atv_waterfall_couple_1789047494046.jpg";

export type AdventureWaterProduct = {
  slug: string;
  title: string;
  category: "Bali Adventure Experiences" | "Tanjung Benoa Water Sports";
  image: string;
  alt: string;
  short: string;
};

export const baliAdventureWaterProducts: AdventureWaterProduct[] = [
  {
    slug: "bali-lazy-river-tubing",
    title: "Bali Lazy River Tubing",
    category: "Bali Adventure Experiences",
    image: atvRiverSplashImg,
    alt: "Aktivitas Bali Lazy River Tubing menyusuri sungai jernih di tengah alam Ubud",
    short: "A relaxed river tubing experience surrounded by Bali's tropical landscape.",
  },
  {
    slug: "ubud-river-tubing-adventure",
    title: "Ubud River Tubing Adventure",
    category: "Bali Adventure Experiences",
    image: atvJungleMudImg,
    alt: "Ubud River Tubing Adventure",
    short: "An exciting tubing adventure through Bali's natural river scenery.",
  },
  {
    slug: "ayung-river-rafting",
    title: "Ayung River Rafting Bali",
    category: "Bali Adventure Experiences",
    image: ayungRiverRaftingImg,
    alt: "Ayung River rafting through Bali's tropical jungle and river valley",
    short: "White-water rafting through the scenic Ayung River valley.",
  },
  {
    slug: "telaga-waja-river-rafting",
    title: "Telaga Waja River Rafting",
    category: "Bali Adventure Experiences",
    image: atvRiverSplashImg,
    alt: "Telaga Waja River Rafting",
    short: "A thrilling rafting adventure through Bali's Telaga Waja River.",
  },

  {
    slug: "jet-ski-ride-bali",
    title: "Jet Ski Ride Bali",
    category: "Tanjung Benoa Water Sports",
    image: atvWaterfallCoupleImg,
    alt: "Jet Ski Ride Bali on the tropical coast of Tanjung Benoa",
    short: "Ride across the water on a high-energy Jet Ski experience in Tanjung Benoa.",
  },
  {
    slug: "parasailing-adventure-bali",
    title: "Parasailing Adventure Bali",
    category: "Tanjung Benoa Water Sports",
    image: atvWaterfallCoupleImg,
    alt: "Parasailing Adventure Bali above the tropical coastline",
    short: "Take in coastal views from above with a parasailing experience.",
  },
  {
    slug: "banana-boat-ride",
    title: "Banana Boat Ride",
    category: "Tanjung Benoa Water Sports",
    image: atvWaterfallCoupleImg,
    alt: "Banana Boat Ride in Bali for friends and families",
    short: "A fun group water ride perfect for friends and families.",
  },
  {
    slug: "flying-fish-water-sport",
    title: "Flying Fish Water Sport",
    category: "Tanjung Benoa Water Sports",
    image: atvRiverSplashImg,
    alt: "Flying Fish Water Sport ride in Bali",
    short: "A fast-paced flying fish water sports experience off Tanjung Benoa.",
  },
  {
    slug: "rolling-donut-ride",
    title: "Rolling Donut Ride",
    category: "Tanjung Benoa Water Sports",
    image: atvRiverSplashImg,
    alt: "Rolling Donut Ride water sport in Bali",
    short: "Hold on tight for a fun and exciting rolling donut ride.",
  },
  {
    slug: "flyboard-bali-experience",
    title: "Flyboard Bali Experience",
    category: "Tanjung Benoa Water Sports",
    image: atvRiverSplashImg,
    alt: "Flyboard Bali Experience above the water",
    short: "Experience the thrill of flying above the water on a Flyboard.",
  },
  {
    slug: "sea-walker-bali",
    title: "Sea Walker Bali",
    category: "Tanjung Benoa Water Sports",
    image: atvWaterfallCoupleImg,
    alt: "Sea Walker Bali underwater marine experience",
    short: "Explore Bali's underwater world with an easy-going Sea Walker experience.",
  },
  {
    slug: "snorkeling-tour-bali",
    title: "Snorkeling Tour Bali",
    category: "Tanjung Benoa Water Sports",
    image: atvWaterfallCoupleImg,
    alt: "Snorkeling Tour Bali in tropical waters",
    short: "Discover tropical marine life with a snorkeling experience in Tanjung Benoa.",
  },
  {
    slug: "scuba-diving-bali",
    title: "Scuba Diving Bali",
    category: "Tanjung Benoa Water Sports",
    image: atvWaterfallCoupleImg,
    alt: "Scuba Diving Bali among tropical marine life",
    short: "Explore Bali's underwater scenery with a scuba diving experience.",
  },
];

