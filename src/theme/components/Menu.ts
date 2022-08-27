import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleObject, SystemStyleObject } from "@chakra-ui/styled-system";

const baseStyleList: SystemStyleObject = {
  bg: "bg",
};

const baseStyleItem: SystemStyleObject = {
  _hover: {
    bg: "ui.5",
  },
  _focus: {
    bg: "ui.5",
  },
  _active: {
    bg: "ui.10",
  },
  _expanded: {
    bg: "ui.5",
  },
};

const baseStyleGroupTitle: SystemStyleObject = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
};

const baseStyleCommand: SystemStyleObject = {
  opacity: 0.6,
};

const baseStyleDivider: SystemStyleObject = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6,
};

const baseStyleButton: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "normal",
};

const baseStyle: PartsStyleObject<typeof parts> = {
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider,
};

export default {
  parts: parts.keys,
  baseStyle,
};
