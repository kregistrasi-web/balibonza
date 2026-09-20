import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-banana-boat");

export const Route = createFileRoute("/tanjung-benoa-banana-boat")({
  component: () => <ExperienceDetail exp={experience} />,
});
