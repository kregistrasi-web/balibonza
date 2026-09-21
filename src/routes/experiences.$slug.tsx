import { createFileRoute, notFound } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const experience = getExperience(params.slug);

    if (!experience) {
      throw notFound();
    }

    return { experience };
  },
  head: ({ loaderData }) =>
    loaderData?.experience ? experienceHead(loaderData.experience) : {},
  component: ExperienceSlugPage,
});

function ExperienceSlugPage() {
  const { experience } = Route.useLoaderData();

  return <ExperienceDetail exp={experience} />;
}