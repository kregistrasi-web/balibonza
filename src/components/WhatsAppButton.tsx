import { whatsappLink, trackEvent } from "@/config/site";

type Props = {
  experience?: string | undefined;
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors min-h-11";

const variants = {
  solid: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90",
  outline: "border border-whatsapp text-whatsapp hover:bg-whatsapp/10",
  ghost: "text-whatsapp hover:bg-whatsapp/10",
};

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.9 9.9 0 0 0 4.86 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 18.17h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.24 8.24 0 1 1 6.96 3.83Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06a6.74 6.74 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.55-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02s.87 2.34.99 2.5c.13.17 1.71 2.6 4.14 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function WhatsAppButton({
  experience,
  label = "Book via WhatsApp",
  className = "",
  variant = "solid",
}: Props) {
  return (
    <a
      href={whatsappLink(experience ? { experience } : {})}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { experience: experience ?? "general" })}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { experience: "floating" })}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">Book via WhatsApp</span>
    </a>
  );
}
