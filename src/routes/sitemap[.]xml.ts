import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteConfig } from "@/config/site";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/experiences", changefreq: "weekly", priority: "0.9" },
          {
            path: "/bali-atv-adventure",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/bali-zoo",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/bali-zoo/bali-zoo-tickets",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/breakfast-with-orangutan",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/elephant-explorer",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/elephant-mud-fun",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/brunch-with-capybara",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/capybara-connection",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/behind-closed-doors",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/breakfast-with-orangutan-elephant-mud-fun",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/breakfast-with-orangutan-brunch-with-capybara",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/capybara-connection-behind-closed-doors",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-zoo/elephant-mud-fun-behind-closed-doors",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-marine-park",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/bali-safari-rhino-package",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-lion-package",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-night-safari",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/varuna-premium-bali",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-breakfast-with-lion",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-dragon-package",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/varuna-deluxe-bali",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-jungle-hopper-legend",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-safari-jungle-hopper",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/varuna-regular-bali",
            changefreq: "weekly",
            priority: "0.8",
          },
          {
            path: "/bali-buggy-adventure",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/bali-swing",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/bali-jeep-sunrise",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/bali-private-tours",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/nusa-penida-tours",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/about",
            changefreq: "yearly",
            priority: "0.5",
          },
          {
            path: "/contact",
            changefreq: "yearly",
            priority: "0.6",
          },
        ];

        const urls = entries.map((entry) => {
          const url = `${siteConfig.url}${entry.path}`;

          return [
            "  <url>",
            `    <loc>${url}</loc>`,
            entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
            entry.priority ? `    <priority>${entry.priority}</priority>` : null,
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n");
        });

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
