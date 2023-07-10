import { definePreset } from "@pandacss/dev";

export const envelopePreset = definePreset({
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  utilities: {
    extend: {
      boxSize: {
        className: "boxsize",
        values: "spacing",
        transform(value) {
          return {
            width: value,
            height: value,
          };
        },
      },
      rounded: {
        className: "rounded",
        values: "radii",
        transform(value) {
          return {
            borderRadius: value,
          };
        },
      },
    },
  },
  theme: {
    extend: {
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      semanticTokens: {
        colors: {
          "ui.5": {
            value: { base: "{colors.uiLight.5}", _dark: "{colors.uiDark.5}" },
          },
          "ui.10": {
            value: { base: "{colors.uiLight.10}", _dark: "{colors.uiDark.10}" },
          },
          "ui.20": {
            value: { base: "{colors.uiLight.20}", _dark: "{colors.uiDark.20}" },
          },
          "ui.30": {
            value: { base: "{colors.uiLight.30}", _dark: "{colors.uiDark.30}" },
          },
          "ui.40": {
            value: { base: "{colors.uiLight.40}", _dark: "{colors.uiDark.40}" },
          },
          "ui.50": {
            value: { base: "{colors.uiLight.50}", _dark: "{colors.uiDark.50}" },
          },
          "ui.60": {
            value: { base: "{colors.uiLight.60}", _dark: "{colors.uiDark.60}" },
          },
          "ui.70": {
            value: { base: "{colors.uiLight.70}", _dark: "{colors.uiDark.70}" },
          },
          "ui.80": {
            value: { base: "{colors.uiLight.80}", _dark: "{colors.uiDark.80}" },
          },
          "ui.90": {
            value: { base: "{colors.uiLight.90}", _dark: "{colors.uiDark.90}" },
          },
          "ui.100": {
            value: {
              base: "{colors.uiLight.100}",
              _dark: "{colors.uiDark.100}",
            },
          },
        },
      },
      textStyles: {
        mono: {
          xs: {
            value: {
              fontFamily: "mono",
              fontSize: "12px",
            },
          },
          sm: {
            value: {
              fontFamily: "mono",
              fontSize: "14px",
            },
          },
          md: {
            value: {
              fontFamily: "mono",
              fontSize: "16px",
            },
          },
          lg: {
            value: {
              fontFamily: "mono",
              fontSize: "18px",
            },
          },
          xl: {
            value: {
              fontFamily: "mono",
              fontSize: "20px",
            },
          },
        },
        paragraph: {
          xs: {
            value: {
              fontFamily: "body",
              fontSize: "12px",
            },
          },
          sm: {
            value: {
              fontFamily: "body",
              fontSize: "14px",
            },
          },
          md: {
            value: {
              fontFamily: "body",
              fontSize: "16px",
            },
          },
          lg: {
            value: {
              fontFamily: "body",
              fontSize: "18px",
            },
          },
          xl: {
            value: {
              fontFamily: "body",
              fontSize: "20px",
            },
          },
        },
        label: {
          xs: {
            value: {
              fontFamily: "body",
              fontSize: "12px",
              fontWeight: "semibold",
            },
          },
          sm: {
            value: {
              fontFamily: "body",
              fontSize: "14px",
              fontWeight: "semibold",
            },
          },
          md: {
            value: {
              fontFamily: "body",
              fontSize: "16px",
              fontWeight: "semibold",
            },
          },
          lg: {
            value: {
              fontFamily: "body",
              fontSize: "18px",
              fontWeight: "semibold",
            },
          },
          xl: {
            value: {
              fontFamily: "body",
              fontSize: "20px",
              fontWeight: "semibold",
            },
          },
        },
        heading: {
          xs: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "24px",
              fontWeight: 800,
            },
          },
          sm: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "28px",
              fontWeight: 800,
            },
          },
          md: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "32px",
              fontWeight: 800,
            },
          },
          lg: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "36px",
              fontWeight: 800,
            },
          },
          xl: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "40px",
              fontWeight: 800,
            },
          },
        },
        display: {
          xs: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "40px",
              fontWeight: 900,
            },
          },
          sm: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "48px",
              fontWeight: 900,
            },
          },
          md: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: "48px",
            },
          },
          lg: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: "56px",
            },
          },
          xl: {
            value: {
              fontFamily: "var(--inter-font)",
              fontSize: "80px",
              fontWeight: 900,
              lineHeight: "64px",
            },
          },
        },
      },
      tokens: {
        colors: {
          pink: {
            100: { value: "rgb(255, 98, 145)" },
            80: { value: "rgba(255, 98, 145, 0.8)" },
            60: { value: "rgba(255, 98, 145, 0.6)" },
            40: { value: "rgba(255, 98, 145, 0.4)" },
            20: { value: "rgba(255, 98, 145, 0.2)" },
            10: { value: "rgba(255, 98, 145, 0.1)" },
          },
          purple: {
            100: { value: "rgb(155, 101, 223)" },
            80: { value: "rgba(155, 101, 223, 0.8)" },
            60: { value: "rgba(155, 101, 223, 0.6)" },
            40: { value: "rgba(155, 101, 223, 0.4)" },
            20: { value: "rgba(155, 101, 223, 0.2)" },
            10: { value: "rgba(155, 101, 223, 0.1)" },
          },
          yellow: {
            100: { value: "rgb(255, 194, 76)" },
            80: { value: "rgba(255, 194, 76, 0.8)" },
            60: { value: "rgba(255, 194, 76, 0.6)" },
            40: { value: "rgba(255, 194, 76, 0.4)" },
            20: { value: "rgba(255, 194, 76, 0.2)" },
            10: { value: "rgba(255, 194, 76, 0.1)" },
          },
          uiLight: {
            5: { value: "rgba(0,0,0,0.05)" },
            10: { value: "rgba(0,0,0,0.1)" },
            20: { value: "rgba(0,0,0,0.2)" },
            30: { value: "rgba(0,0,0,0.3)" },
            40: { value: "rgba(0,0,0,0.4)" },
            50: { value: "rgba(0,0,0,0.5)" },
            60: { value: "rgba(0,0,0,0.6)" },
            70: { value: "rgba(0,0,0,0.7)" },
            80: { value: "rgba(0,0,0,0.8)" },
            90: { value: "rgba(0,0,0,0.9)" },
            100: { value: "rgb(0,0,0)" },
          },
          uiDark: {
            5: { value: "rgba(255,255,255,0.05)" },
            10: { value: "rgba(255,255,255,0.1)" },
            20: { value: "rgba(255,255,255,0.2)" },
            30: { value: "rgba(255,255,255,0.3)" },
            40: { value: "rgba(255,255,255,0.4)" },
            50: { value: "rgba(255,255,255,0.5)" },
            60: { value: "rgba(255,255,255,0.6)" },
            70: { value: "rgba(255,255,255,0.7)" },
            80: { value: "rgba(255,255,255,0.8)" },
            90: { value: "rgba(255,255,255,0.9)" },
            100: { value: "rgb(255,255,255)" },
          },
        },
        fonts: {
          mono: { value: "Roboto Mono, sans-serif" },
          body: { value: "Inter, sans-serif" },
          heading: { value: "Inter, sans-serif" },
        },
      },
    },
  },
});
