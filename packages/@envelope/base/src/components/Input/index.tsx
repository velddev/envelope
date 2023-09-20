import { HTMLStyledProps, styled, Flex, FlexProps } from "@envelope/styled/jsx";
import { cva } from "@envelope/styled/css";
import React, { createContext, forwardRef, useContext } from "react";

const InputContext = createContext(null);

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
        p: "2",
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
      sm: {
        p: "1",
        textStyle: "paragraph.sm",
      },
      md: {
        p: "2",
        textStyle: "paragraph.md",
      },
      lg: {
        p: "3",
        textStyle: "paragraph.lg",
      },
    },
  },
});

const InputPrimitive = styled("input", inputRecipe);
const InputGroupPrimitive = styled("div", {
  base: {
    ...base,
    display: "flex",
    alignItems: "center",
    px: "4",
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "ui.20",
    borderStyle: "solid",
    _focusWithin: {
      borderColor: "ui.100",
    },
  },
});

type InputGroupProps = HTMLStyledProps<"div">;

export const InputGroup = ({ children, ...rest }: InputGroupProps) => {
  return (
    <InputContext.Provider value={true}>
      <InputGroupPrimitive gap="2" {...rest}>
        {children}
      </InputGroupPrimitive>
    </InputContext.Provider>
  );
};

export const Input = forwardRef<HTMLInputElement, HTMLStyledProps<"input">>(function InputBase(
  { ...props },
  ref,
) {
  const context = useContext(InputContext);
  return <InputPrimitive ref={ref} variant={context ? "unstyled" : "default"} {...props} />;
});
