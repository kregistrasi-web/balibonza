import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("bali-safari-lion-package");

export const Route = createFileRoute("/bali-safari-lion-package")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});
