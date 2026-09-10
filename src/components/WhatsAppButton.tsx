import { MessageCircle } from "lucide-react";
import type { ReactNode, MouseEvent } from "react";
import { siteConfig, whatsappLink, trackEvent, type WhatsAppMessageInput } from "@/config/site";
import { cn } from "@/lib/utils";

export interface WhatsAppButtonProps extends WhatsAppMessageInput {
  label?: string;
  variant?: "primary" | "outline" | "secondary" | "ghost";
  className?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function WhatsAppButton({
  experience,
  message,
  date,
  guests,
  pickup,
  label = "Book via WhatsApp",
  variant = "primary",
  className,
  children,
  onClick,
}: WhatsAppButtonProps) {
  const href = whatsappLink({
    experience,
    message,
    date,
    guests,
    pickup,
  });

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackEvent("whatsapp_click", {
      experience: experience ?? "general",
      label,
    });
    onClick?.(e);
  };

  const variantStyles = {
    primary: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-sm",
    outline:
      "border border-border bg-background text-foreground hover:bg-muted hover:text-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "text-foreground hover:bg-muted",
  }[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
        variantStyles,
        className,
      )}
    >
      <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
      <span>{children ?? label}</span>
    </a>
  );
}

export interface FloatingWhatsAppProps {
  message?: string;
  className?: string;
}

export function FloatingWhatsApp({ message, className }: FloatingWhatsAppProps = {}) {
  const href = whatsappLink(message ? { message } : {});

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      experience: "floating",
      label: "Floating WhatsApp",
    });
  };

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
        onClick={handleClick}
        className={cn(
          "fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-all duration-200 hover:scale-105 hover:bg-whatsapp/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2",
          className,
        )}
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </aside>
  );
}
