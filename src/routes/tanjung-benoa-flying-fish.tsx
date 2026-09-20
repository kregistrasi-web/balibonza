import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-flying-fish");

export const Route = createFileRoute("/tanjung-benoa-flying-fish")({
  component: () => <ExperienceDetail exp={experience} />,
});
