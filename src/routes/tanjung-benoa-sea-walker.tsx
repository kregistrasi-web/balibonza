import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("tanjung-benoa-sea-walker");

export const Route = createFileRoute("/tanjung-benoa-sea-walker")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
