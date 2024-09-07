import { cva } from "@/_generated/styled/css";
import { styled } from "@/_generated/styled/jsx";

const buttonGroupRecipe = cva({
  base: {
    display: "flex",
  },
  defaultVariants: {
    buttonDirection: "horizontal",
  },
  variants: {
    buttonDirection: {
      horizontal: {
        flexDirection: "row",
        "& > *:not(:first-child):not(:last-child)": {
          rounded: "0",
        },
        "& > *:first-child": {
          roundedRight: "0",
          roundedLeft: "md",
        },
        "& > *:last-child": {
          roundedLeft: "0",
          roundedRight: "md",
        },
      },
      vertical: {
        flexDirection: "column",
        "& > *:not(:first-child):not(:last-child)": {
          rounded: "0",
        },
        "& > *:first-child": {
          roundedBottom: "0",
          roundedTop: "md",
        },
        "& > *:last-child": {
          roundedTop: "0",
          roundedBottom: "md",
        },
      },
    },
  },
});

export const ButtonGroup = styled("div", buttonGroupRecipe);
