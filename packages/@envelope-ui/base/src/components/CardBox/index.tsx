import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type CardBoxProps = React.ComponentPropsWithRef<"div"> & Record<string, any>;

export const CardBox = forwardRef<HTMLDivElement, CardBoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border border-solid border-ui-20 rounded-lg p-4", className)}
        {...filterDomProps(props)}
      />
    );
  }
);
CardBox.displayName = "CardBox";
