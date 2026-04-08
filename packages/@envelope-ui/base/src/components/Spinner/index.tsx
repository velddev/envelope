import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

const spinnerVariants = cva(
  "rounded-full animate-spin border-solid border-current border-l-transparent inline-block",
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        xs: "w-3 h-3 border-2",
        sm: "w-4 h-4 border-2",
        md: "w-5 h-5 border-[3px]",
        lg: "w-8 h-8 border-4",
        xl: "w-10 h-10 border-[5px]",
      },
    },
  }
);

export type SpinnerProps = React.ComponentPropsWithRef<"span"> &
  VariantProps<typeof spinnerVariants> & Record<string, any>;

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(spinnerVariants({ size }), className)}
        {...filterDomProps(props)}
      />
    );
  }
);
Spinner.displayName = "Spinner";
