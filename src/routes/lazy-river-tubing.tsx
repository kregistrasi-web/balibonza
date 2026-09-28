import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("lazy-river-tubing");

export const Route = createFileRoute("/lazy-river-tubing")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
