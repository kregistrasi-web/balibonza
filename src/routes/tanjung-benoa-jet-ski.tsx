import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-jet-ski");

export const Route = createFileRoute("/tanjung-benoa-jet-ski")({
  component: () => <ExperienceDetail exp={experience} />,
});
