import type { ColorMode } from "@chakra-ui/react";

const transparentize = (color: string, opacity: number) => {
  if (opacity >= 1) {
    return `rgb(${color})`;
  }

  return `rgba(${color}, ${opacity})`;
};

const getGrayColor = (colorMode: ColorMode, opacity: number) => {
  const color = colorMode === "dark" ? "255,255,255" : "0,0,0";
  return transparentize(color, opacity);
};

export const colors = {
  accent: {
    20: "rgba(46, 167, 230, 0.2)",
    40: "rgba(46, 167, 230, 0.4)",
    60: "rgba(46, 167, 230, 0.6)",
    80: "rgba(46, 167, 230, 0.8)",
    100: "rgba(46, 167, 230, 1.0)",
  },
  uiLight: {
    5: getGrayColor("light", 0.1),
    10: getGrayColor("light", 0.2),
    20: getGrayColor("light", 0.4),
    40: getGrayColor("light", 0.6),
    60: getGrayColor("light", 0.8),
    80: getGrayColor("light", 0.9),
    100: getGrayColor("light", 1.0),
  },
  uiDark: {
    5: getGrayColor("dark", 0.05),
    10: getGrayColor("dark", 0.1),
    20: getGrayColor("dark", 0.2),
    40: getGrayColor("dark", 0.4),
    60: getGrayColor("dark", 0.6),
    80: getGrayColor("dark", 0.8),
    100: getGrayColor("dark", 1.0),
  },
  system: {
    danger: {
      100: transparentize("238, 93, 93", 1.0),
      80: transparentize("238, 93, 93", 0.8),
      60: transparentize("238, 93, 93", 0.6),
      40: transparentize("238, 93, 93", 0.4),
      20: transparentize("238, 93, 93", 0.2),
      10: transparentize("238, 93, 93", 0.1),
      5: transparentize("238, 93, 93", 0.05),
    },
    info: {
      100: "#499DFF",
      80: transparentize("#499DFF", 0.8),
      60: transparentize("#499DFF", 0.6),
      40: transparentize("#499DFF", 0.4),
      20: transparentize("#499DFF", 0.2),
      10: transparentize("#499DFF", 0.1),
      5: transparentize("#499DFF", 0.05),
    },
    success: {
      100: "#33E03A",
      80: transparentize("#33E03A", 0.8),
      60: transparentize("#33E03A", 0.6),
      40: transparentize("#33E03A", 0.4),
      20: transparentize("#33E03A", 0.2),
      10: transparentize("#33E03A", 0.1),
      5: transparentize("#33E03A", 0.05),
    },
    warningLight: {
      100: transparentize("217, 111, 0", 1.0),
      80: transparentize("217, 111, 0", 0.9),
      60: transparentize("217, 111, 0", 0.8),
      40: transparentize("217, 111, 0", 0.6),
      20: transparentize("217, 111, 0", 0.4),
      10: transparentize("217, 111, 0", 0.2),
      5: transparentize("217, 111, 0", 0.1),
    },
    warningDark: {
      100: transparentize("255, 207, 83", 1.0),
      80: transparentize("255, 207, 83", 0.8),
      60: transparentize("255, 207, 83", 0.6),
      40: transparentize("255, 207, 83", 0.4),
      20: transparentize("255, 207, 83", 0.2),
      10: transparentize("255, 207, 83", 0.1),
      5: transparentize("255, 207, 83", 0.05),
    },
  },
  bgLight: "#fff",
  bgDark: "#141520",
  bg2Light: "#F2F2F2",
  bg2Dark: "#20212B",
};
