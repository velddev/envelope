import { ColorMode, extendTheme } from "@chakra-ui/react";

import breakpoints from "./breakpoints";
import components from "./components";
import { colors } from "./colors";
import { Dict } from "@chakra-ui/utils";

export const getTheme = (colorMode: ColorMode): Dict =>
  extendTheme({
    breakpoints,
    colors: colors(colorMode),
    components,
    config: {
      cssVarPrefix: "miki",
    },
    styles: {
      global: {
        body: {
          bg: colorMode === "light" ? "white" : "#141520",
        },
        "&::-webkit-calendar-picker-indicator": {
          filter: colorMode == "light" ? undefined : "invert(1)",
        },
        "::-webkit-scrollbar": {
          w: "3",
          h: "3",
        },

        "::-webkit-scrollbar-track": {
          borderRadius: "full",
          background: "var(--miki-colors-ui-5)",
        },

        "::-webkit-scrollbar-thumb": {
          borderRadius: "full",
          background: "var(--miki-colors-ui-10)",
        },

        "::-webkit-scrollbar-thumb:hover": {
          background: "var(--miki-colors-ui-10)",
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
