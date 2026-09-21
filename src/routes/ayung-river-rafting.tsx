import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("ayung-river-rafting");

export const Route = createFileRoute("/ayung-river-rafting")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
