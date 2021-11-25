import type { ColorMode } from "@chakra-ui/react";

const getGrayColor = (colorMode: ColorMode, opacity: number) => {
  const color = colorMode === "dark" ? "255,255,255" : "0,0,0";

  if (opacity >= 1) {
    return `rgb(${color})`;
  }

  return `rgba(${color}, ${opacity})`;
};

export const colors = (colorMode: ColorMode) => ({
  accent: {
    20: "rgba(46, 167, 230, 0.2)",
    40: "rgba(46, 167, 230, 0.4)",
    60: "rgba(46, 167, 230, 0.6)",
    80: "rgba(46, 167, 230, 0.8)",
    100: "rgba(46, 167, 230, 1.0)",
  },
  ui: {
    5: getGrayColor(colorMode, 0.05),
    10: getGrayColor(colorMode, 0.1),
    20: getGrayColor(colorMode, 0.2),
    40: getGrayColor(colorMode, 0.4),
    60: getGrayColor(colorMode, 0.6),
    80: getGrayColor(colorMode, 0.8),
    100: getGrayColor(colorMode, 1.0),
  },
  bg: colorMode === "light" ? "#fff" : "#141520",
  bg2: colorMode === "light" ? "#e6e8eb" : "#323452",
});
