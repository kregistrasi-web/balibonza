import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";

const experience = getExperience("lazy-river-tubing");

export const Route = createFileRoute("/lazy-river-tubing")({
  component: () => <ExperienceDetail exp={experience} />,
});
