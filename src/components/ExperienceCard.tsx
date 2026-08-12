import { Link } from "@tanstack/react-router";
import type { Experience } from "@/data/experiences";
import { WhatsAppButton } from "./WhatsAppButton";

export function ExperienceCard({ exp, priority = false }: { exp: Experience; priority?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link to={exp.path} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={exp.image}
          alt={exp.alt}
          width={1600}
          height={1000}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {exp.price}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold">
          <Link to={exp.path}>{exp.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{exp.short}</p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div>
            <dt className="font-semibold text-foreground/70">Location</dt>
            <dd>{exp.location}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/70">Duration</dt>
            <dd>{exp.duration}</dd>
          </div>
        </dl>

        <p className="mt-3 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Good for: {exp.suitableFor}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          <Link
            to={exp.path}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Experience
          </Link>
          <WhatsAppButton experience={exp.title} label="WhatsApp" variant="outline" className="px-4 py-2.5" />
        </div>
      </div>
    </article>
  );
}
