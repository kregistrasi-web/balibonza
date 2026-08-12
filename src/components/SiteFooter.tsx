import { Link } from "@tanstack/react-router";
import { siteConfig, whatsappLink, trackEvent } from "@/config/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/experiences", label: "Experiences" },
  { to: "/bali-atv-adventure", label: "Bali ATV" },
  { to: "/bali-zoo", label: "Bali Zoo" },
  { to: "/bali-safari-marine-park", label: "Bali Safari" },
  { to: "/bali-buggy-adventure", label: "Bali Buggy" },
  { to: "/bali-swing", label: "Bali Swing" },
  { to: "/bali-private-tours", label: "Private Tours" },
  { to: "/nusa-penida-tours", label: "Nusa Penida" },
  { to: "/contact", label: "Contact" },
] as const;

const popular = [
  { to: "/bali-atv-adventure", label: "Bali ATV Adventure" },
  { to: "/bali-zoo", label: "Bali Zoo" },
  { to: "/bali-safari-marine-park", label: "Bali Safari & Marine Park" },
  { to: "/bali-buggy-adventure", label: "Bali Buggy Adventure" },
  { to: "/bali-swing", label: "Bali Swing" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-surface text-surface-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-surface-foreground/70">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-surface-foreground/70">{siteConfig.serviceArea}</p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-surface-foreground/75">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-surface-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Popular experiences">
          <h2 className="text-sm font-semibold uppercase tracking-wider">Popular Experiences</h2>
          <ul className="mt-4 space-y-2 text-sm text-surface-foreground/75">
            {popular.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-surface-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-surface-foreground/75">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { experience: "footer" })}
                className="hover:text-surface-foreground"
              >
                WhatsApp
              </a>
            </li>
            {siteConfig.email && (
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => trackEvent("email_click")}
                  className="hover:text-surface-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            )}
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-surface-foreground"
              >
                Instagram @kitkat_bali
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-surface-foreground"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-surface-foreground/60">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2">
            {siteConfig.name} is an independent Bali travel and booking service. Bali Zoo, Bali
            Safari &amp; Marine Park and other attractions are operated by their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
