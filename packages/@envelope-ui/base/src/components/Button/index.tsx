import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { Spinner } from "../Spinner";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

export const buttonVariants = cva(
  "whitespace-nowrap rounded-md transition-all duration-200 items-center justify-center flex select-none gap-2",
  {
    defaultVariants: {
      size: "md",
      variant: "solid",
      isLoading: false,
    },
    variants: {
      variant: {
        solid: "bg-ui-5 text-ui-100 hover:bg-ui-10",
        primary: "bg-pink-100 text-ui-light-100 hover:bg-pink-60",
        secondary: "bg-yellow-100 text-ui-light-100 hover:bg-yellow-60",
        tertiary: "bg-ui-light-100 text-ui-dark-100 hover:bg-ui-light-60",
        ghost: "bg-transparent text-ui-100 hover:bg-ui-5",
        outline:
          "bg-transparent text-ui-100 border border-ui-60 rounded-md hover:bg-ui-5",
      },
      size: {
        sm: "h-8 font-body text-sm font-semibold px-2 py-1",
        md: "h-10 font-body text-base font-semibold px-4 py-1",
        lg: "h-12 font-body text-lg font-semibold px-6 py-2",
        xl: "h-14 font-body text-lg font-semibold px-8 py-3",
      },
      isLoading: {
        true: "opacity-50 cursor-wait",
        false: "opacity-100 cursor-pointer",
      },
    },
  }
);

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonVariants> & Record<string, any>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, isLoading }),
          "disabled:cursor-not-allowed",
          className
        )}
        {...filterDomProps(rest)}
      >
        <span
          className={cn(
            "flex items-center gap-2",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        >
          {children}
        </span>
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner size={size} />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

/** @deprecated Use `buttonVariants` instead */
export const buttonRecipe = buttonVariants;

export * from "./group";
