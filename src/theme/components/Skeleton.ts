import { keyframes } from "@chakra-ui/system";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColor } from "@chakra-ui/theme-tools";

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

const baseStyle: SystemStyleFunction = (props) => {
  const defaultStartColor = "ui.5";
  const defaultEndColor = "ui.10";

  const { startColor = defaultStartColor, endColor = defaultEndColor, speed, theme } = props;

  const start = getColor(theme, startColor);
  const end = getColor(theme, endColor);

  return {
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: `${speed}s linear infinite alternate ${fade(start, end)}`,
  };
};

export default {
  baseStyle,
};
