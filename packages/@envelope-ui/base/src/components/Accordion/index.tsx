"use client";
import * as RadixAccordion from "@radix-ui/react-accordion";
import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

export const Accordion = forwardRef<
  HTMLDivElement,
  (RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps) & Record<string, any>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Root ref={ref} className={cn(className)} {...filterDomProps(props) as any} />
));
Accordion.displayName = "Accordion";

type AccordionHeaderProps = RadixAccordion.AccordionHeaderProps &
  React.ComponentPropsWithRef<"h3"> & Record<string, any>;

export const AccordionHeader = forwardRef<HTMLHeadingElement, AccordionHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <RadixAccordion.Header ref={ref} className={cn(className)} {...filterDomProps(rest) as any}>
        <RadixAccordion.Trigger>{children}</RadixAccordion.Trigger>
      </RadixAccordion.Header>
    );
  }
);
AccordionHeader.displayName = "AccordionHeader";

export const AccordionItem = forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionItemProps & Record<string, any>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Item ref={ref} className={cn(className)} {...filterDomProps(props) as any} />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionContent = forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionContentProps & Record<string, any>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={cn(
      "data-[state=open]:animate-accordion-expand data-[state=closed]:animate-accordion-collapse",
      className
    )}
    {...filterDomProps(props)}
  />
));
AccordionContent.displayName = "AccordionContent";
