"use client";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { styled, HTMLStyledProps } from "@/_generated/styled/jsx";
import React from "react";

type AccordionHeaderProps = RadixAccordion.AccordionHeaderProps & HTMLStyledProps<"h3">;
export const AccordionHeaderPrimitive = styled(RadixAccordion.Header);

export const Accordion = styled(RadixAccordion.Root);
export const AccordionHeader = ({ children, ...rest }: AccordionHeaderProps) => {
  return (
    <AccordionHeaderPrimitive {...rest}>
      <RadixAccordion.Trigger>{children}</RadixAccordion.Trigger>
    </AccordionHeaderPrimitive>
  );
};
export const AccordionItem = styled(RadixAccordion.Item);
export const AccordionContent = styled(RadixAccordion.Content, {
  base: {
    "&[data-state='open']": {
      animation: "accordionExpand 0.2s ease-in-out",
    },
    "&[data-state='closed']": {
      animation: "accordionCollapse 0.2s ease-in-out",
    },
  },
});
