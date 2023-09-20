import { styled } from "@envelope/styled/jsx";

export const Spinner = styled("span", {
  base: {
    borderRadius: "full",
    animation: "spin 0.6s linear infinite",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "currentColor",
    borderLeftColor: "transparent",
    display: "inline-block",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      xs: {
        w: "3",
        h: "3",
        borderWidth: "2px",
      },
      sm: {
        w: "4",
        h: "4",
        borderWidth: "2px",
      },
      md: {
        w: "5",
        h: "5",
        borderWidth: "3px",
      },
      lg: {
        w: "8",
        h: "8",
        borderWidth: "4px",
      },
      xl: {
        w: "10",
        h: "10",
        borderWidth: "5px",
      },
    },
  },
});
