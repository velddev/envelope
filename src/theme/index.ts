import { Dict } from "@chakra-ui/utils";

import breakpoints from "./breakpoints";
import components from "./components";
import { colors } from "./colors";
import sizes from "./foundations/sizes";
import { space } from "./foundations/space";
import textStyles from "./foundations/textStyles";

export { extendTheme } from "./utils";

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
        "uix.5": {
          default: "uiDark.5",
          _dark: "uiLight.5",
        },
        "uix.10": {
          default: "uiDark.10",
          _dark: "uiLight.10",
        },
        "uix.20": {
          default: "uiDark.20",
          _dark: "uiLight.20",
        },
        "uix.40": {
          default: "uiDark.40",
          _dark: "uiLight.40",
        },
        "uix.60": {
          default: "uiDark.60",
          _dark: "uiLight.60",
        },
        "uix.80": {
          default: "uiDark.80",
          _dark: "uiLight.80",
        },
        "uix.100": {
          default: "uiDark.100",
          _dark: "uiLight.100",
        },
        "system.warning.5": {
          default: "system.warningLight.5",
          _dark: "system.warningDark.5",
        },
        "system.warning.10": {
          default: "system.warningLight.10",
          _dark: "system.warningDark.10",
        },
        "system.warning.20": {
          default: "system.warningLight.20",
          _dark: "system.warningDark.20",
        },
        "system.warning.40": {
          default: "system.warningLight.40",
          _dark: "system.warningDark.40",
        },
        "system.warning.60": {
          default: "system.warningLight.60",
          _dark: "system.warningDark.60",
        },
        "system.warning.80": {
          default: "system.warningLight.80",
          _dark: "system.warningDark.80",
        },
        "system.warning.100": {
          default: "system.warningLight.100",
          _dark: "system.warningDark.100",
        },
        bg: {
          default: "bgLight.100",
          _dark: "bgDark.100",
        },
        "bg.5": {
          default: "bgLight.5",
          _dark: "bgDark.5",
        },
        "bg.10": {
          default: "bgLight.10",
          _dark: "bgDark.10",
        },
        "bg.20": {
          default: "bgLight.20",
          _dark: "bgDark.20",
        },
        "bg.40": {
          default: "bgLight.40",
          _dark: "bgDark.40",
        },
        "bg.60": {
          default: "bgLight.60",
          _dark: "bgDark.60",
        },
        "bg.80": {
          default: "bgLight.80",
          _dark: "bgDark.80",
        },
        "bg.100": {
          default: "bgLight.100",
          _dark: "bgDark.100",
        },
        bg2: {
          default: "bg2Light",
          _dark: "bg2Dark",
        },
      },
    },
    colors,
    components,
    config: {
      cssVarPrefix: "miki",
    },
    sizes,
    space,
    styles: {
      global: (props) => ({
        body: {
          bg: "bg",
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
      heading: "Poppins, Arial, Helvetica, sans-serif",
      body: "Arial, Helvetica, sans-serif",
      mono: "'JetBrains Mono', Consolas, monospace",
    },
    textStyles,
  };
};
