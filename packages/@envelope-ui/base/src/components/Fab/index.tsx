import React, { forwardRef } from "react";
import { Button } from "../Button";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

type FabProps = React.ComponentPropsWithRef<"button"> & {
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "outline";
} & Record<string, any>;

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <Button
        variant={variant}
        className={cn(
          "shadow-lg w-16 h-16 rounded-full fixed right-4 bottom-4",
          className
        )}
        ref={ref}
        {...filterDomProps(props)}
      >
        {props.children}
      </Button>
    );
  }
);
Fab.displayName = "Fab";
