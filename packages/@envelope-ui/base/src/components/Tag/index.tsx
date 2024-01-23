import { styled } from "@envelope-ui/styled/jsx";

export const Tag = styled("span", {
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
      },
      primary: {
        bg: "pink.100",
        color: "uiLight.100",
      },
      secondary: {
        bg: "yellow.100",
        color: "uiLight.100",
      },
      tertiary: {
        bg: "uiLight.100",
        color: "uiDark.100",
      },
      ghost: {
        bg: "transparent",
        color: "ui.100",
      },
      outline: {
        bg: "transparent",
        color: "ui.100",
        borderWidth: "1px",
        borderColor: "ui.20",
        borderRadius: "md",
      },
    },
    size: {
      sm: {
        textStyle: "paragraph.xs",
        px: "1",
      },
      md: {
        textStyle: "paragraph.sm",
        px: "2",
        py: "1px",
      },
      lg: {
        textStyle: "paragraph.md",
        px: "3",
        py: "1",
      },
      xl: {
        textStyle: "paragraph.lg",
        px: "4",
        py: "2",
      },
    },
  },
});
