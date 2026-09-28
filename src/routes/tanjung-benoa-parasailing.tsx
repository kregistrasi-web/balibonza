import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("tanjung-benoa-parasailing");

export const Route = createFileRoute("/tanjung-benoa-parasailing")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
