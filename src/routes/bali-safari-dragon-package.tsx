import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("bali-safari-dragon-package");

export const Route = createFileRoute("/bali-safari-dragon-package")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});
