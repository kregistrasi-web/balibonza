/**
 * Central configuration for BaliBonza.
 * Update contact details, social links and tracking IDs here only.
 */

export const siteConfig = {
  name: "BaliBonza",
  tagline: "Bali Activities, Adventures & Private Tours",
  description:
    "Book Bali ATV, Bali Zoo, Bali Safari, buggy adventures, Bali Swing, private tours and Nusa Penida trips with a local Bali team.",
  // TODO: replace with the real WhatsApp number in international format (digits only)
  whatsappNumber: "",
  email: "",
  social: {
    instagram: "https://instagram.com/balibonza",
    facebook: "https://www.facebook.com/",
    youtube: "", // add only when the official URL is provided
  },
  serviceArea: "Bali, Indonesia — including Ubud, Kuta, Seminyak, Canggu, Nusa Dua and Sanur",
  // Analytics — leave empty until real IDs are supplied. No placeholder IDs.
  analytics: {
    ga4MeasurementId: "",
    gtmContainerId: "",
    metaPixelId: "",
    searchConsoleVerification: "",
  },
} as const;

export type WhatsAppMessageInput = {
  experience?: string;
  date?: string;
  guests?: string;
  pickup?: string;
};

export function buildWhatsAppMessage({
  experience = "",
  date = "",
  guests = "",
  pickup = "",
}: WhatsAppMessageInput = {}) {
  return [
    `Hello ${siteConfig.name},`,
    "",
    "I would like to book:",
    "",
    `Experience: ${experience}`,
    `Date: ${date}`,
    `Number of guests: ${guests}`,
    `Hotel / pickup location: ${pickup}`,
    "",
    "Please send me availability and the total price.",
  ].join("\n");
}

export function whatsappLink(input: WhatsAppMessageInput = {}) {
  const text = encodeURIComponent(buildWhatsAppMessage(input));
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Lightweight conversion tracking hook — no-ops until analytics IDs are configured. */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; fbq?: (...a: unknown[]) => void };
  w.dataLayer?.push({ event, ...params });
  w.fbq?.("trackCustom", event, params);
}
