import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("bali-safari-rhino-package");

export const Route = createFileRoute("/bali-safari-rhino-package")({
  head: () => experienceHead(exp),
  component: () => <ExperienceDetail exp={exp} />,
});
