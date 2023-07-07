import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full",
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start",
  },
  td: {
    textAlign: "start",
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium",
  },
});

const numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
});

const variantSimple = definePartsStyle((props) => {
  return {
    th: {
      color: "ui.60",
      borderBottom: "1px",
      borderColor: "ui.20",
      ...numericStyles,
    },
    td: {
      borderBottom: "1px",
      borderColor: "ui.20",
      ...numericStyles,
    },
    caption: {
      color: mode("gray.600", "gray.100")(props),
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const variantStripe = definePartsStyle((props) => {
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: "ui.20",
      ...numericStyles,
    },
    td: {
      borderBottom: "1px",
      borderColor: "ui.20",
      ...numericStyles,
    },
    caption: {
      color: mode("gray.600", "gray.100")(props),
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: "ui.20",
          },
          td: {
            borderColor: "ui.20",
          },
        },
      },
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({}),
};

const sizes = {
  sm: definePartsStyle({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4",
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs",
    },
  }),
  md: definePartsStyle({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5",
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm",
    },
  }),
  lg: definePartsStyle({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm",
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6",
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md",
    },
  }),
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray",
  },
});
