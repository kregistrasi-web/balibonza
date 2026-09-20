import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("ayung-river-rafting");

export const Route = createFileRoute("/ayung-river-rafting")({
  component: () => <ExperienceDetail exp={experience} />,
});
