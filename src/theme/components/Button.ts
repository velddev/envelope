const dangerVariant = {
  bg: "system.danger.100",
  color: "black",
  _hover: {
    bg: "system.danger.80",
    _disabled: {
      bg: "system.danger.80",
    },
  },
  _active: {
    bg: "system.danger.60",
  },
  _disabled: {
    bg: "system.danger.60",
  },
};

const primaryVariant = {
  bg: "accent.100",
  color: "black",
  _hover: {
    bg: "accent.80",
    _disabled: {
      bg: "accent.80",
    },
  },
  _active: {
    bg: "accent.60",
  },
  _disabled: {
    bg: "accent.60",
  },
};

const solidVariant = {
  bg: "ui.5",
  _hover: {
    bg: "ui.10",
  },
  _active: {
    bg: "ui.20",
  },
};

const ghostVariant = {
  bg: "transparent",
  _hover: {
    bg: "ui.5",
  },
  _active: {
    bg: "ui.10",
  },
};

export default {
  variants: {
    ghost: ghostVariant,
    solid: solidVariant,
    primary: primaryVariant,
    danger: dangerVariant,
  },
};
