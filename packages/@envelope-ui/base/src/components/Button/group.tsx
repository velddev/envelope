import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

const buttonGroupVariants = cva("flex", {
  defaultVariants: {
    buttonDirection: "horizontal",
  },
  variants: {
    buttonDirection: {
      horizontal:
        "flex-row [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-r-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-l-none [&>*:last-child]:rounded-r-md",
      vertical:
        "flex-col [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-b-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-md",
    },
  },
});

export type ButtonGroupProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof buttonGroupVariants> & Record<string, any>;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, buttonDirection, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(buttonGroupVariants({ buttonDirection }), className)}
        {...filterDomProps(props)}
      />
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";
