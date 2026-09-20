import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("tubing-adventure");

export const Route = createFileRoute("/tubing-adventure")({
  component: () => <ExperienceDetail exp={experience} />,
});
