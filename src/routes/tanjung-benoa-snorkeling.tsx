import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-snorkeling");

export const Route = createFileRoute("/tanjung-benoa-snorkeling")({
  component: () => <ExperienceDetail exp={experience} />,
});
