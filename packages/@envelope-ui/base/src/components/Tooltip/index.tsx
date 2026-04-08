import React, { ReactNode, forwardRef } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type TooltipProps = React.ComponentPropsWithRef<"div"> &
  RadixTooltip.TooltipContentProps & {
    value: ReactNode;
    showArrow?: boolean;
    delay?: number;
  } & Record<string, any>;

export const Tooltip = ({ children, value, showArrow, delay, className, ...rest }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={delay || 500}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={8}
            className={cn(
              "bg-bg-100 text-ui-100 rounded-md border border-solid border-ui-10 p-2 shadow-md",
              "data-[side=top]:animate-slide-down data-[side=bottom]:animate-slide-up",
              "data-[side=left]:animate-slide-right data-[side=right]:animate-slide-left",
              className
            )}
            {...filterDomProps(rest)}
          >
            {value}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
