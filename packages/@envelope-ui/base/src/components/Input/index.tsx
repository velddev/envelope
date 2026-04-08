import React, { createContext, forwardRef, useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

const InputContext = createContext<boolean | null>(null);

const inputVariants = cva(
  "bg-transparent border-0 w-full text-ui-100 placeholder:text-ui-60 outline-none",
  {
    defaultVariants: {
      variant: "default",
      controlSize: "md",
    },
    variants: {
      variant: {
        unstyled: "",
        default:
          "rounded-md border border-solid border-ui-20 focus-visible:border-ui-100",
      },
      controlSize: {
        none: "",
        sm: "px-2 py-1 font-body text-sm",
        md: "px-4 py-2 font-body text-base",
        lg: "px-5 py-3 font-body text-lg",
      },
    },
  }
);

const inputGroupVariants = cva(
  "bg-transparent w-full text-ui-100 placeholder:text-ui-60 flex items-center px-4 py-2 rounded-md border border-solid border-ui-20 focus-within:border-ui-100 gap-2 outline-none",
  {
    defaultVariants: {
      variant: "default",
      controlSize: "md",
    },
    variants: {
      variant: {
        unstyled: "",
        default:
          "rounded-md border border-solid border-ui-20 focus-visible:border-ui-100",
      },
      controlSize: {
        none: "",
        sm: "px-2 py-1 font-body text-sm",
        md: "px-4 py-2 font-body text-base",
        lg: "px-5 py-3 font-body text-lg",
      },
    },
  }
);

type InputGroupProps = React.ComponentPropsWithRef<"div"> & Record<string, any>;

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <InputContext.Provider value={true}>
        <div
          ref={ref}
          className={cn(inputGroupVariants(), className)}
          {...filterDomProps(rest)}
        >
          {children}
        </div>
      </InputContext.Provider>
    );
  }
);
InputGroup.displayName = "InputGroup";

export type InputProps = {
  size?: "none" | "sm" | "md" | "lg";
  variant?: "unstyled" | "default";
} & Omit<React.ComponentPropsWithRef<"input">, "size"> & Record<string, any>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, variant, className, ...props }, ref) => {
    const context = useContext(InputContext);
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({
            controlSize: context ? "none" : (size as any) ?? "md",
            variant: context ? "unstyled" : variant ?? "default",
          }),
          className
        )}
        {...filterDomProps(props)}
      />
    );
  }
);
Input.displayName = "Input";
