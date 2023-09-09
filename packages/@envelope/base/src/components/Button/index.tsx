import { styled } from "@envelope/styled/jsx";

export const Button = styled("button", {
  base: {
    borderRadius: "md",
    transition: "all 0.2s ease-in-out",
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
        bg: "pink.100",
        color: "uiLight.100",
        _hover: {
          bg: "pink.60",
        },
      },
      secondary: {
        bg: "yellow.100",
        color: "uiLight.100",
        _hover: {
          bg: "yellow.60",
        },
      },
      tertiary: {
        bg: "uiLight.100",
        color: "uiDark.100",
        _hover: {
          bg: "uiLight.60",
        },
      },
      ghost: {
        bg: "transparent",
        color: "ui.100",
        _hover: {
          bg: "ui.5",
        },
      },
      outline: {
        bg: "transparent",
        color: "ui.100",
        borderWidth: "1px",
        borderColor: "ui.20",
        borderRadius: "md",
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
        py: "1",
      },
      md: {
        h: "10",
        textStyle: "label.md",
        px: "4",
        py: "1",
      },
      lg: {
        h: "12",
        textStyle: "label.lg",
        px: "6",
        py: "2",
      },
      xl: {
        h: "14",
        textStyle: "label.lg",
        px: "8",
        py: "3",
      },
    },
  },
});
