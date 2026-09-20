import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tanjung-benoa-parasailing");

export const Route = createFileRoute("/tanjung-benoa-parasailing")({
  component: () => <ExperienceDetail exp={experience} />,
});
