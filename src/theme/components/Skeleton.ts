import { keyframes } from "@chakra-ui/system";
import { cssVar, SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColor } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleFunction = (props) => {
  const defaultStartColor = "ui.5";
  const defaultEndColor = "ui.10";

  const { startColor = defaultStartColor, endColor = defaultEndColor, theme } = props;

  const start = getColor(theme, startColor);
  const end = getColor(theme, endColor);

  const frames = keyframes({
    to: {
      backgroundPosition: "right -40px top 0",
    },
  });

  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    backgroundPosition: "left -40px top 0",
    animation: `${frames} 1s ease infinite`,
    backgroundImage: `linear-gradient(
      90deg, 
      ${start}, 
      ${end},
      ${start}
    );`,
  };
};

export default {
  baseStyle,
};
