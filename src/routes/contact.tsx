import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageHead } from "@/lib/seo";
import { siteConfig, whatsappLink, trackEvent } from "@/config/site";
import { experiences } from "@/data/experiences";

const pageTitle = "Contact BaliBonza | Book Your Bali Experience";

const pageDescription =
  "Contact BaliBonza on WhatsApp, email or social media to book Bali activities, private tours, transfers and Nusa Penida trips.";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: pageTitle,
      description: pageDescription,
      path: "/contact",
    }),
  component: ContactPage,
});

function findExperienceByInput(input: string) {
  const query = input.trim().toLowerCase();

  if (!query) return undefined;

  return experiences.find((e) =>
    e.title.toLowerCase().includes(query),
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    experience: "",
    date: "",
    guests: "",
    pickup: "",
  });

  const selectedExperience = useMemo(
    () => findExperienceByInput(form.experience),
    [form.experience],
  );

  const whatsappMessage = selectedExperience?.whatsappText;

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((current) => ({
        ...current,
        [key]: e.target.value,
      }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("contact_form_submit", {
      experience: form.experience,
    });

    window.open(
      whatsappLink({
        experience: form.experience,
        date: form.date,
        guests: form.guests,
        pickup: form.pickup,
        ...(whatsappMessage ? { message: whatsappMessage } : {}),
      }),
      "_blank",
      "noopener",
    );
  };

  const field =
    "mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <h1 className="mt-6 font-display text-4xl font-semibold">
        Contact {siteConfig.name}
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Tell us what you&apos;d like to do in Bali and we&apos;ll reply with
        availability and the total price.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={field}
              value={form.name}
              onChange={set("name")}
            />
          </div>

          <div>
            <label htmlFor="experience" className="text-sm font-medium">
              Experience
            </label>

            <input
              id="experience"
              name="experience"
              type="text"
              placeholder="e.g. Bali ATV Adventure"
              className={field}
              value={form.experience}
              onChange={set("experience")}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                className={field}
                value={form.date}
                onChange={set("date")}
              />
            </div>

            <div>
              <label htmlFor="guests" className="text-sm font-medium">
                Number of guests
              </label>

              <input
                id="guests"
                name="guests"
                inputMode="numeric"
                className={field}
                value={form.guests}
                onChange={set("guests")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="pickup" className="text-sm font-medium">
              Hotel / pickup location
            </label>

            <input
              id="pickup"
              name="pickup"
              type="text"
              autoComplete="street-address"
              className={field}
              value={form.pickup}
              onChange={set("pickup")}
            />
          </div>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            Book Your Bali Experience
          </button>

          <p className="text-xs text-muted-foreground">
            Sending opens WhatsApp with your details pre-filled.
          </p>
        </form>

        <aside className="space-y-4 rounded-2xl border border-border bg-card p-6 text-sm">
          <div>
            <h2 className="font-display text-lg font-semibold">
              Reach us
            </h2>

            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  href={whatsappLink(
                    whatsappMessage ? { message: whatsappMessage } : {},
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>

              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Service area</h3>

            <p className="mt-1 text-muted-foreground">
              {siteConfig.serviceArea}
            </p>
          </div>

          <WhatsAppButton
            className="w-full"
            message={whatsappMessage}
          />
        </aside>
      </div>
    </div>
  );
}import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { pageHead } from "@/lib/seo";
import { siteConfig, whatsappLink, trackEvent } from "@/config/site";
import { experiences } from "@/data/experiences";

const pageTitle = "Contact BaliBonza | Book Your Bali Experience";

const pageDescription =
  "Contact BaliBonza on WhatsApp, email or social media to book Bali activities, private tours, transfers and Nusa Penida trips.";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: pageTitle,
      description: pageDescription,
      path: "/contact",
    }),
  component: ContactPage,
});

function findExperienceByInput(input: string) {
  const query = input.trim().toLowerCase();

  if (!query) return undefined;

  return experiences.find((e) =>
    e.title.toLowerCase().includes(query),
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    experience: "",
    date: "",
    guests: "",
    pickup: "",
  });

  const selectedExperience = useMemo(
    () => findExperienceByInput(form.experience),
    [form.experience],
  );

  const whatsappMessage = selectedExperience?.whatsappText;

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((current) => ({
        ...current,
        [key]: e.target.value,
      }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("contact_form_submit", {
      experience: form.experience,
    });

    window.open(
      whatsappLink({
        experience: form.experience,
        date: form.date,
        guests: form.guests,
        pickup: form.pickup,
        ...(whatsappMessage ? { message: whatsappMessage } : {}),
      }),
      "_blank",
      "noopener",
    );
  };

  const field =
    "mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <h1 className="mt-6 font-display text-4xl font-semibold">
        Contact {siteConfig.name}
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Tell us what you&apos;d like to do in Bali and we&apos;ll reply with
        availability and the total price.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={field}
              value={form.name}
              onChange={set("name")}
            />
          </div>

          <div>
            <label htmlFor="experience" className="text-sm font-medium">
              Experience
            </label>

            <input
              id="experience"
              name="experience"
              type="text"
              placeholder="e.g. Bali ATV Adventure"
              className={field}
              value={form.experience}
              onChange={set("experience")}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                className={field}
                value={form.date}
                onChange={set("date")}
              />
            </div>

            <div>
              <label htmlFor="guests" className="text-sm font-medium">
                Number of guests
              </label>

              <input
                id="guests"
                name="guests"
                inputMode="numeric"
                className={field}
                value={form.guests}
                onChange={set("guests")}
              />
            </div>
          </div>

          <div>
            <label htmlFor="pickup" className="text-sm font-medium">
              Hotel / pickup location
            </label>

            <input
              id="pickup"
              name="pickup"
              type="text"
              autoComplete="street-address"
              className={field}
              value={form.pickup}
              onChange={set("pickup")}
            />
          </div>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            Book Your Bali Experience
          </button>

          <p className="text-xs text-muted-foreground">
            Sending opens WhatsApp with your details pre-filled.
          </p>
        </form>

        <aside className="space-y-4 rounded-2xl border border-border bg-card p-6 text-sm">
          <div>
            <h2 className="font-display text-lg font-semibold">
              Reach us
            </h2>

            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a
                  href={whatsappLink(
                    whatsappMessage ? { message: whatsappMessage } : {},
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>

              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Service area</h3>

            <p className="mt-1 text-muted-foreground">
              {siteConfig.serviceArea}
            </p>
          </div>

          <WhatsAppButton
            className="w-full"
            message={whatsappMessage}
          />
        </aside>
      </div>
    </div>
  );
}