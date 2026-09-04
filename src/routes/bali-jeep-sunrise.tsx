import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("bali-jeep-sunrise");

export const Route = createFileRoute("/bali-jeep-sunrise")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});
