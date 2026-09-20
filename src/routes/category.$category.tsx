import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import zooImage from "@/assets/images/bali_zoo_capybara_1789048952498.jpg";
import safariImage from "@/assets/images/bali_safari_tram_1789049772966.jpg";
import { categories, experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageHead } from "@/lib/seo";

const wildlifeSubcategories = [
  {
    title: "GENERAL ADMISSION & DAY VISITS",
    subcategory: "bali-zoo-general",
  },
  {
    title: "CAPYBARA ENCOUNTERS & COMBOS",
    subcategory: "bali-zoo-capybara",
  },
  {
    title: "ELEPHANT ENCOUNTERS & CONSERVATION",
    subcategory: "bali-zoo-elephant",
  },
  {
    title: "SIGNATURE DINING & BEHIND THE SCENES",
    subcategory: "bali-zoo-signature",
  },
  {
    title: "CORE SAFARI ADMISSION & DAY PACKAGES",
    subcategory: "core-safari-admission",
  },
  {
    title: "VIP & INCLUSIVE DINING PACKAGES",
    subcategory: "vip-inclusive-dining",
  },
  {
    title: "SPECIAL EVENING ENCOUNTERS",
    subcategory: "special-evening-encounters",
  },
  {
    title: "UNDERWATER THEATRICAL DINING (VARUNA SHOWS)",
    subcategory: "varuna-shows",
  },
];

export const Route = createFileRoute("/category/$category")({
  loader: ({ params }) => {
    const category = categories.find((item) => item.slug === params.category);

    if (!category) {
      throw notFound();
    }

    return {
      category,
      products: experiences.filter((experience) => experience.categoryId === category.id),
    };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData?.category.title ?? "Bali Experiences"} | BaliBonza`,
      description:
        loaderData?.category.description ??
        "Explore Bali activities and experiences with BaliBonza.",
      path: `/category/${loaderData?.category.slug ?? ""}`,
    }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  const isWildlifeCategory = category.slug === "wildlife";

  const wildlifeGroups = wildlifeSubcategories.map((subcategory) => ({
    ...subcategory,
    products: products.filter((product) => product.subcategory === subcategory.subcategory),
  }));
  const zooGroups = wildlifeGroups.filter((group) => group.subcategory.startsWith("bali-zoo-"));
  const safariGroups = wildlifeGroups.filter((group) => group.subcategory !== "bali-zoo-general");

  const renderProductGroup = (group: (typeof wildlifeGroups)[number]) => (
    <section key={group.title} className="scroll-mt-24">
      <div className="border-b border-border pb-3">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">{group.title}</h3>
      </div>

      <div
        className={
          group.products.length === 1
            ? "mt-6 flex justify-center"
            : "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {group.products.map((experience, index) => (
          <div
            key={experience.slug}
            className={
              group.products.length === 1
                ? `mx-auto w-full ${
                    group.subcategory === "special-evening-encounters"
                      ? "max-w-3xl"
                      : "max-w-xl"
                  }`
                : undefined
            }
          >
            <ExperienceCard
              exp={experience}
              priority={index === 0}
              landscape={group.products.length === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="container-page py-10">
      <Breadcrumbs items={[{ label: "Categories", to: "/experiences" }, { label: category.title }]} />

      <div className="mt-8 max-w-3xl">
        <Link
          to="/experiences"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          All Experiences
        </Link>
        <p className="eyebrow mt-8">BaliBonza Categories</p>
        <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{category.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{category.description}</p>
      </div>

      {isWildlifeCategory ? (
        <>
          <section className="mt-10 grid gap-6 md:grid-cols-2" aria-label="Wildlife experience categories">
            <a
              href="#bali-zoo-products"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("bali-zoo-products")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", "#bali-zoo-products");
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={zooImage}
                  alt="Bali Zoo capybara encounter and wildlife experience"
                  width={1600}
                  height={1000}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold">BALI ZOO EXPERIENCES</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Interactive animal encounters and day passes at Bali Zoo.
                </p>
                <span className="mt-4 inline-flex font-semibold text-primary">Explore Bali Zoo</span>
              </div>
            </a>

            <a
              href="#bali-safari-products"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("bali-safari-products")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", "#bali-safari-products");
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={safariImage}
                  alt="Bali Safari tram tour through wildlife habitats"
                  width={1600}
                  height={1000}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold">
                  BALI SAFARI & MARINE PARK EXPERIENCE
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Safari tram journeys, cultural performances, and Varuna underwater dining.
                </p>
                <span className="mt-4 inline-flex font-semibold text-primary">Explore Bali Safari</span>
              </div>
            </a>
          </section>

          <div className="mt-14 space-y-16">
            <section id="bali-zoo-products" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                BALI ZOO EXPERIENCES
              </h2>
              <div className="mt-8 space-y-14">{zooGroups.map(renderProductGroup)}</div>
            </section>

            <section id="bali-safari-products" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                BALI SAFARI & MARINE PARK EXPERIENCE
              </h2>
              <div className="mt-8 space-y-14">{safariGroups.map(renderProductGroup)}</div>
            </section>
          </div>
        </>
      ) : products.length > 0 ? (
        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((experience, index) => (
            <ExperienceCard
              key={experience.slug}
              exp={experience}
              priority={index === 0}
            />
          ))}
        </section>
      ) : (
        <p className="mt-10 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
          New experiences are being added to this category. Contact us on WhatsApp for a custom
          recommendation.
        </p>
      )}
    </main>
  );
}
