import { styled } from "../../../styled-system/jsx";

export const Button = styled("button", {
  base: {
    borderRadius: "md",
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
  variants: {
    variant: {
      solid: {
        bg: "ui.5",
        color: "ui.100",
        _hover: {
          bg: "ui.10",
        },
      },
      primary: {
        bg: "accent.100",
        color: "uiLight.100",
        _hover: {
          bg: "accent.60",
        },
      },
      ghost: {
        bg: "transparent",
        color: "ui.100",
        _hover: {
          bg: "ui.5",
        },
      },
    },
    size: {
      sm: {
        h: "8",
        textStyle: "label.sm",
        px: "2",
      },
      md: {
        h: "10",
        textStyle: "label.md",
        px: "4",
      },
      lg: {
        h: "12",
        textStyle: "label.lg",
        px: "6",
      },
    },
  },
});
