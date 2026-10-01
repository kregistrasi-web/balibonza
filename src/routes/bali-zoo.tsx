import { createFileRoute } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

const exp = getExperience("bali-zoo");

export const Route = createFileRoute("/bali-zoo")({
  head: () => experienceHead(exp, "/bali-zoo"),
  component: () => <ExperienceDetail exp={exp} />,
});
