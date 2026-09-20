import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  id?: string;
  question?: string;
  answer?: React.ReactNode;
  /** Shorthand question key for compatibility with experiences data */
  q?: string;
  /** Shorthand answer key for compatibility with experiences data */
  a?: React.ReactNode;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string;
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

/**
 * Reusable FAQ Accordion component built on top of Radix UI / shadcn Accordion.
 * Supports both standard `{ question, answer }` and shorthand `{ q, a }` items.
 */
export function FaqAccordion({
  items,
  type = "single",
  collapsible = true,
  defaultValue,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
}: FaqAccordionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  // Radix Accordion type guard handling
  const accordionProps =
    type === "multiple"
      ? ({
          type: "multiple",
          defaultValue: defaultValue ? [defaultValue] : undefined,
        } as const)
      : ({
          type: "single",
          collapsible,
          defaultValue,
        } as const);

  return (
    <Accordion
      {...accordionProps}
      className={cn(
        "w-full divide-y divide-border rounded-2xl border border-border bg-card",
        className,
      )}
    >
      {items.map((item, index) => {
        const itemKey = item.id || `faq-${index}`;
        const questionText = item.question ?? item.q ?? "";
        const answerContent = item.answer ?? item.a ?? null;

        return (
          <AccordionItem
            key={itemKey}
            value={itemKey}
            className={cn("border-b-0 px-5 sm:px-6", itemClassName)}
          >
            <AccordionTrigger
              className={cn(
                "py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline hover:text-primary transition-colors",
                triggerClassName,
              )}
            >
              {questionText}
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
                contentClassName,
              )}
            >
              {answerContent}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
