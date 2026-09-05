import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("bali-atv-adventure");

export const Route = createFileRoute("/bali-atv-adventure")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});
