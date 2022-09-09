import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import type { SystemStyleInterpolation } from "@chakra-ui/styled-system";
import type { PartsStyleInterpolation } from "@chakra-ui/theme-tools";

type Keys = keyof typeof parts.keys;

const baseStyleControl: SystemStyleInterpolation = {
  w: 3,
  h: 3,
  transitionProperty: "box-shadow",
  transitionDuration: "normal",
  border: "2px solid",
  borderRadius: "sm",
  borderColor: "inherit",
  color: "white",

  _checked: {
    bg: "accent.100",
    borderColor: "accent.100",
    color: "ui.100",

    _hover: {
      bg: "accent.60",
      borderColor: "accent.60",
    },

    _disabled: {
      borderColor: "ui.20",
      bg: "accent.20",
      color: "ui.20",
    },
  },

  _indeterminate: {
    bg: "accent.100",
    borderColor: "accent.100",
    color: "uix.100",
  },

  _disabled: {
    borderColor: "ui.20",
    color: "ui.20",
  },

  _focusVisible: {
    boxShadow: "outline",
  },

  _invalid: {
    borderColor: "system.danger.100",
  },
};

const baseStyleContainer = {
  _disabled: { cursor: "not-allowed" },
} as SystemStyleInterpolation;

const baseStyleLabel = {
  userSelect: "none",
  _disabled: { 
    opacity: 0.4 
  },
} as SystemStyleInterpolation;

const baseStyleIcon = {
  transitionProperty: "transform",
  transitionDuration: "normal",
} as SystemStyleInterpolation;

const baseStyle = {
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: baseStyleControl,
  label: baseStyleLabel,
} as PartsStyleInterpolation;

const sizes = {
  sm: {
    control: { 
      w: "3",
      h: "3", 
    },
    label: { 
      fontSize: "sm" 
    },
    icon: { 
      fontSize: "3xs" 
    },
  },
  md: {
    control: { 
      w: "4",
      h: "4", 
    },
    label: { 
      fontSize: "md" 
    },
    icon: { 
      fontSize: "2xs" 
    },
  },
  lg: {
    control: { 
      w: "5",
      h: "5",
    },
    label: { 
      fontSize: "lg" 
    },
    icon: { 
      fontSize: "2xs" 
    },
  },
};

export default {
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
};
