import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-scuba-diving");

export const Route = createFileRoute("/tanjung-benoa-scuba-diving")({
  component: () => <ExperienceDetail exp={experience} />,
});
