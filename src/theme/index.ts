import { ColorMode, extendTheme } from "@chakra-ui/react";

import breakpoints from "./breakpoints";
import components from "./components";
import { colors } from "./colors";
import { Dict } from "@chakra-ui/utils";

export const getTheme = (colorMode: ColorMode): Dict => {
  return extendTheme({
    breakpoints,
    colors: colors(colorMode),
    components,
    config: {
      cssVarPrefix: "miki",
    },
    styles: {
      global: {
        body: {
          bg: "bg",
        },
        "&::-webkit-calendar-picker-indicator": {
          filter: colorMode == "light" ? undefined : "invert(1)",
        },
        "::-webkit-scrollbar": {
          w: "3",
          h: "3",
        },

        "::-webkit-scrollbar-track": {
          bg: "bg",
        },

        "::-webkit-scrollbar-thumb": {
          borderRadius: "full",
          bg: "ui.10",
        },

        "::-webkit-scrollbar-thumb:hover": {
          bg: "ui.10",
        },
      },
    },
    fonts: {
      heading: "Poppins",
    },
    textStyles: {
      paragraph: {
        sm: {
          fontSize: "14px",
        },
        md: {
          fontSize: "16px",
        },
        lg: {
          fontSize: "18px",
        },
      },
      label: {
        sm: {
          fontSize: "16px",
          fontWeight: "semibold",
        },
        md: {
          fontSize: "20px",
          fontWeight: "semibold",
        },
        lg: {
          fontSize: "24px",
          fontWeight: "semibold",
        },
      },
      heading: {
        sm: {
          fontFamily: "heading",
          fontSize: "24px",
          fontWeight: "semibold",
        },
        md: {
          fontFamily: "heading",
          fontSize: "36px",
          fontWeight: "semibold",
        },
        lg: {
          fontFamily: "heading",
          fontSize: "48px",
          fontWeight: "semibold",
        },
      },
    },
  });
};
