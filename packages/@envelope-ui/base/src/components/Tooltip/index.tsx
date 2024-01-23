import React, { ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { styled, HTMLStyledProps } from "@envelope-ui/styled/jsx";

const TooltipContent = styled(RadixTooltip.Content, {
  base: {
    bg: "bg.100",
    color: "ui.100",
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "ui.10",
    borderStyle: "solid",
    p: "2",
    boxShadow: "md",
    "&[data-side='top']": {
      animation: "slideDown 0.2s ease-in-out",
    },
    "&[data-side='bottom']": {
      animation: "slideUp 0.2s ease-in-out",
    },
    "&[data-side='left']": {
      animation: "slideRight 0.2s ease-in-out",
    },
    "&[data-side='right']": {
      animation: "slideLeft 0.2s ease-in-out",
    },
  },
});

type TooltipProps = HTMLStyledProps<"div"> &
  RadixTooltip.TooltipContentProps & {
    value: ReactNode;
    showArrow?: boolean;
    delay?: number;
  };

export const Tooltip = ({ children, value, showArrow, delay, ...rest }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={delay || 500}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={8} {...rest}>
            {value}
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
