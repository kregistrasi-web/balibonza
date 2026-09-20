import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("telaga-waja-river-rafting");

export const Route = createFileRoute("/telaga-waja-river-rafting")({
  component: () => <ExperienceDetail exp={experience} />,
});
