import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-flyboard");

export const Route = createFileRoute("/tanjung-benoa-flyboard")({
  component: () => <ExperienceDetail exp={experience} />,
});
