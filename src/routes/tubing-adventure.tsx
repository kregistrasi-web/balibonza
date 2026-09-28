import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const experience = getExperience("tubing-adventure");

export const Route = createFileRoute("/tubing-adventure")({
  head: () => experienceHead(experience),
  component: () => <ExperienceDetail exp={experience} />,
});
