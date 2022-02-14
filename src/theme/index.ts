import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

import breakpoints from "./breakpoints";
import components from "./components";
import { colors } from "./colors";

export const getTheme = (): Dict => {
  return {
    breakpoints,
    semanticTokens: {
      colors: {
        "ui.5": {
          default: "uiLight.5",
          _dark: "uiDark.5",
        },
        "ui.10": {
          default: "uiLight.10",
          _dark: "uiDark.10",
        },
        "ui.20": {
          default: "uiLight.20",
          _dark: "uiDark.20",
        },
        "ui.40": {
          default: "uiLight.40",
          _dark: "uiDark.40",
        },
        "ui.60": {
          default: "uiLight.60",
          _dark: "uiDark.60",
        },
        "ui.80": {
          default: "uiLight.80",
          _dark: "uiDark.80",
        },
        "ui.100": {
          default: "uiLight.100",
          _dark: "uiDark.100",
        },
        bg: {
          default: "bgLight",
          _dark: "bgDark",
        },
        bg2: {
          default: "bgLight2",
          _dark: "bgDark2",
        },
      },
    },
    colors,
    components,
    config: {
      cssVarPrefix: "miki",
    },
    styles: {
      global: (props) => ({
        body: {
          bg: "bg",
        },
        "&::-webkit-calendar-picker-indicator": {
          filter: mode(undefined, "invert(1)")(props),
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
      }),
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
      display: {
        md: {
          fontFamily: "heading",
          fontSize: "58px",
          fontWeight: "black",
          lineHeight: "48px",
        },
      },
    },
  };
};
