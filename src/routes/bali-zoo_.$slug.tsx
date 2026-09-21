import { createFileRoute, notFound } from "@tanstack/react-router";
import { getExperience } from "@/data/experiences";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { experienceHead } from "@/lib/seo";

export const Route = createFileRoute("/bali-zoo_/$slug")({
  loader: ({ params }) => {
    const exp = getExperience(params.slug);
    if (!exp) {
      throw notFound();
    }
    return { exp };
  },
  head: ({ loaderData }) => {
     return loaderData?.exp ? experienceHead(loaderData.exp) : {};
  },
  component: ZooProductComponent,
});

function ZooProductComponent() {
  const { exp } = Route.useLoaderData();
  return <ExperienceDetail exp={exp} />;
}
