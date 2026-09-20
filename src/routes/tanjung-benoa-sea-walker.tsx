import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-sea-walker");

export const Route = createFileRoute("/tanjung-benoa-sea-walker")({
  component: () => <ExperienceDetail exp={experience} />,
});
