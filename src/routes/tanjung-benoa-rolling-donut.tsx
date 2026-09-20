import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-rolling-donut");

export const Route = createFileRoute("/tanjung-benoa-rolling-donut")({
  component: () => <ExperienceDetail exp={experience} />,
});
