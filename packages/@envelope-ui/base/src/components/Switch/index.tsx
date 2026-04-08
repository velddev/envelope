import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Root, Thumb } from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";
import { filterDomProps } from "../../utils/filterDomProps";

const switchRootVariants = cva(
  "bg-ui-10 px-1 shrink-0 rounded-full data-[state=checked]:bg-pink-100",
  {
    variants: {
      size: {
        sm: "w-8 h-5",
        md: "w-10 h-6",
        lg: "w-12 h-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchThumbVariants = cva(
  "block rounded-full bg-ui-dark-100 transition-transform duration-200",
  {
    variants: {
      size: {
        sm: "w-4 h-4 data-[state=checked]:translate-x-2",
        md: "w-5 h-5 data-[state=checked]:translate-x-3",
        lg: "w-6 h-6 data-[state=checked]:translate-x-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type SwitchProps = {
  isChecked?: boolean;
  value?: string | boolean;
  onChange: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
} & Omit<React.ComponentPropsWithRef<"button">, "onChange"> & Record<string, any>;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ isChecked, value, onChange, size, className, ...props }, ref) => {
    const checkValue = isChecked || Boolean(value);

    return (
      <Root
        ref={ref}
        checked={checkValue}
        onClick={() => onChange(!checkValue)}
        className={cn(switchRootVariants({ size }), className)}
        {...filterDomProps(props)}
      >
        <Thumb className={switchThumbVariants({ size })} />
      </Root>
    );
  }
);
Switch.displayName = "Switch";
