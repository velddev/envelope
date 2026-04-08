import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

export const tagVariants = cva(
  "rounded-md transition-all duration-200 cursor-pointer items-center justify-center flex",
  {
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
    variants: {
      variant: {
        solid: "bg-ui-5 text-ui-100",
        primary: "bg-pink-100 text-ui-light-100",
        secondary: "bg-yellow-100 text-ui-light-100",
        tertiary: "bg-ui-light-100 text-ui-dark-100",
        ghost: "bg-transparent text-ui-100",
        outline: "bg-transparent text-ui-100 border border-ui-20 rounded-md",
      },
      size: {
        sm: "font-body text-xs px-1",
        md: "font-body text-sm px-2 py-px",
        lg: "font-body text-base px-3 py-1",
        xl: "font-body text-lg px-4 py-2",
      },
    },
  }
);

export type TagProps = React.ComponentPropsWithRef<"span"> &
  VariantProps<typeof tagVariants> & Record<string, any>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, size }), className)}
        {...filterDomProps(props)}
      />
    );
  }
);
Tag.displayName = "Tag";
