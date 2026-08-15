import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";
import atvHeroAsset from "@/assets/ubud-atv-adventure-tour.jpg.asset.json";

const exp = { ...getExperience("bali-atv-adventure"), image: atvHeroAsset.url };

export const Route = createFileRoute("/bali-atv-adventure")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});

