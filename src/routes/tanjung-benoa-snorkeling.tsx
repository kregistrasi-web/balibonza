import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("tanjung-benoa-snorkeling");

export const Route = createFileRoute("/tanjung-benoa-snorkeling")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
