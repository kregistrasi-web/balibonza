import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("varuna-regular-bali");

export const Route = createFileRoute("/varuna-regular-bali")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});
