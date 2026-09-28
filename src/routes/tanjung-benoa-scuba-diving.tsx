import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("tanjung-benoa-scuba-diving");

export const Route = createFileRoute("/tanjung-benoa-scuba-diving")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
