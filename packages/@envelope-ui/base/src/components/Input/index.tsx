import { HTMLStyledProps, styled } from "@/_generated/styled/jsx";
import { cva } from "@/_generated/styled/css";
import React, { createContext, useContext } from "react";

const InputContext = createContext<boolean | null>(null);

const base = {
  bg: "transparent",
  borderWidth: "0",
  w: "full",
  color: "ui.100",
  _placeholder: {
    color: "ui.60",
  },
};

const inputRecipe = cva({
  base,
  defaultVariants: {
    variant: "default",
    controlSize: "md",
  },
  variants: {
    variant: {
      unstyled: {},
      default: {
        borderRadius: "md",
        borderWidth: "1px",
        borderColor: "ui.20",
        borderStyle: "solid",
        _focusVisible: {
          borderColor: "ui.100",
        },
      },
    },
    controlSize: {
      none: {},
      sm: {
        px: "2",
        py: "1",
        textStyle: "paragraph.sm",
      },
      md: {
        px: "4",
        py: "2",
        textStyle: "paragraph.md",
      },
      lg: {
        px: "5",
        py: "3",
        textStyle: "paragraph.lg",
      },
    },
  },
});

const InputPrimitive = styled("input", inputRecipe);
const InputGroupPrimitive = styled("div", {
  defaultVariants: {
    variant: "default",
    controlSize: "md",
  },
  base: {
    ...base,
    display: "flex",
    alignItems: "center",
    px: "4",
    py: "2",
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "ui.20",
    borderStyle: "solid",
    _focusWithin: {
      borderColor: "ui.100",
    },
  },
  variants: {
    variant: {
      unstyled: {},
      default: {
        borderRadius: "md",
        borderWidth: "1px",
        borderColor: "ui.20",
        borderStyle: "solid",
        _focusVisible: {
          borderColor: "ui.100",
        },
      },
    },
    controlSize: {
      none: {},
      sm: {
        px: "2",
        py: "1",
        textStyle: "paragraph.sm",
      },
      md: {
        px: "4",
        py: "2",
        textStyle: "paragraph.md",
      },
      lg: {
        px: "5",
        py: "3",
        textStyle: "paragraph.lg",
      },
    },
  },
});

export type InputProps = Omit<HTMLStyledProps<"input">, "size"> & {
  size?: "sm" | "md" | "lg";
  variant?: "unstyled" | "default";
};
export type InputGroupProps = InputProps;

export const InputGroup = ({ children, ...rest }: InputGroupProps) => {
  return (
    <InputContext.Provider value={true}>
      <InputGroupPrimitive gap="2" {...rest}>
        {children}
      </InputGroupPrimitive>
    </InputContext.Provider>
  );
};

export const Input = ({ size, ...props }: InputProps) => {
  const context = useContext(InputContext);
  return (
    <InputPrimitive
      controlSize={context ? "none" : size}
      variant={context ? "unstyled" : "default"}
      {...props}
    />
  );
};
