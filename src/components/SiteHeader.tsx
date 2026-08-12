import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";

const nav = [
  { to: "/bali-atv-adventure", label: "Bali ATV" },
  { to: "/bali-zoo", label: "Bali Zoo" },
  { to: "/bali-safari-marine-park", label: "Bali Safari" },
  { to: "/bali-buggy-adventure", label: "Bali Buggy" },
  { to: "/bali-swing", label: "Bali Swing" },
  { to: "/bali-private-tours", label: "Private Tours" },
  { to: "/nusa-penida-tours", label: "Nusa Penida" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            Bali Activities & Tours
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {nav.slice(0, 7).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton label="Book via WhatsApp" className="px-4 py-2" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="container-page grid gap-1 py-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
