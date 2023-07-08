const transparentize = (color: string, opacity: number) => {
  if (opacity >= 1) {
    return `rgb(${color})`;
  }

  return `rgba(${color}, ${opacity})`;
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
    5: transparentize("0,0,0", 0.1),
    10: transparentize("0,0,0", 0.2),
    20: transparentize("0,0,0", 0.4),
    40: transparentize("0,0,0", 0.6),
    60: transparentize("0,0,0", 0.8),
    80: transparentize("0,0,0", 0.9),
    100: transparentize("0,0,0", 1.0),
  },
  uiDark: {
    5: transparentize("255,255,255", 0.05),
    10: transparentize("255,255,255", 0.1),
    20: transparentize("255,255,255", 0.2),
    40: transparentize("255,255,255", 0.4),
    60: transparentize("255,255,255", 0.6),
    80: transparentize("255,255,255", 0.8),
    100: transparentize("255,255,255", 1.0),
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
  bgLight: {
    100: transparentize("255, 255, 255", 1.0),
    80: transparentize("255, 255, 255", 0.8),
    60: transparentize("255, 255, 255", 0.6),
    40: transparentize("255, 255, 255", 0.4),
    20: transparentize("255, 255, 255", 0.2),
    10: transparentize("255, 255, 255", 0.1),
    5: transparentize("255, 255, 255", 0.05),
  },
  bgDark: {
    100: transparentize("22, 22, 24", 1.0),
    80: transparentize("22, 22, 24", 0.8),
    60: transparentize("22, 22, 24", 0.6),
    40: transparentize("22, 22, 24", 0.4),
    20: transparentize("22, 22, 24", 0.2),
    10: transparentize("22, 22, 24", 0.1),
    5: transparentize("22, 22, 24", 0.05),
  },
  bg2Light: {
    100: "rgb(242, 242, 242)",
    80: "rgba(242, 242, 242, 0.8)",
    60: "rgba(242, 242, 242, 0.6)",
    40: "rgba(242, 242, 242, 0.4)",
    20: "rgba(242, 242, 242, 0.2)",
    10: "rgba(242, 242, 242, 0.1)",
    5: "rgba(242, 242, 242, 0.05)",
  },
  bg2Dark: {
    100: "rgb(32, 33, 43)",
    80: "rgba(32, 33, 43, 0.8)",
    60: "rgba(32, 33, 43, 0.6)",
    40: "rgba(32, 33, 43, 0.4)",
    20: "rgba(32, 33, 43, 0.2)",
    10: "rgba(32, 33, 43, 0.1)",
    5: "rgba(32, 33, 43, 0.05)",
  },
};
