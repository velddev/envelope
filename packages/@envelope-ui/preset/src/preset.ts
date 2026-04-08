import { definePreset } from "@pandacss/dev";

export const envelopePreset = definePreset({
  name: "envelope",
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
      keyframes: {
        accordionExpand: {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        accordionCollapse: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: 0,
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(2px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-2px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(2px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(-2px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideUpFull: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideDownFull: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideLeftFull: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideRightFull: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      semanticTokens: {
        colors: {
          "primary.50": {
            value: {
              base: "{colors.blue.50}",
              _dark: "{colors.blue.50}",
            },
          },
          "primary.100": {
            value: {
              base: "{colors.blue.100}",
              _dark: "{colors.blue.100}",
            },
          },
          "primary.200": {
            value: {
              base: "{colors.blue.200}",
              _dark: "{colors.blue.200}",
            },
          },
          "primary.300": {
            value: {
              base: "{colors.blue.300}",
              _dark: "{colors.blue.300}",
            },
          },
          "primary.400": {
            value: {
              base: "{colors.blue.400}",
              _dark: "{colors.blue.400}",
            },
          },
          "primary.500": {
            value: {
              base: "{colors.blue.500}",
              _dark: "{colors.blue.500}",
            },
          },
          "primary.600": {
            value: {
              base: "{colors.blue.600}",
              _dark: "{colors.blue.600}",
            },
          },
          "primary.700": {
            value: {
              base: "{colors.blue.700}",
              _dark: "{colors.blue.700}",
            },
          },
          "primary.800": {
            value: {
              base: "{colors.blue.800}",
              _dark: "{colors.blue.800}",
            },
          },
          "primary.900": {
            value: {
              base: "{colors.blue.900}",
              _dark: "{colors.blue.900}",
            },
          },
          "primary.950": {
            value: {
              base: "{colors.blue.950}",
              _dark: "{colors.blue.950}",
            },
          },
          ui: {
            value: {
              base: "{colors.uiLight.100}",
              _dark: "{colors.uiDark.100}",
            },
          },
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
          uix: {
            value: {
              base: "{colors.uiDark.100}",
              _dark: "{colors.uiLight.100}",
            },
          },
          "uix.5": {
            value: { base: "{colors.uiDark.5}", _dark: "{colors.uiLight.5}" },
          },
          "uix.10": {
            value: { base: "{colors.uiDark.10}", _dark: "{colors.uiLight.10}" },
          },
          "uix.20": {
            value: { base: "{colors.uiDark.20}", _dark: "{colors.uiLight.20}" },
          },
          "uix.30": {
            value: { base: "{colors.uiDark.30}", _dark: "{colors.uiLight.30}" },
          },
          "uix.40": {
            value: { base: "{colors.uiDark.40}", _dark: "{colors.uiLight.40}" },
          },
          "uix.50": {
            value: { base: "{colors.uiDark.50}", _dark: "{colors.uiLight.50}" },
          },
          "uix.60": {
            value: { base: "{colors.uiDark.60}", _dark: "{colors.uiLight.60}" },
          },
          "uix.70": {
            value: { base: "{colors.uiDark.70}", _dark: "{colors.uiLight.70}" },
          },
          "uix.80": {
            value: { base: "{colors.uiDark.80}", _dark: "{colors.uiLight.80}" },
          },
          "uix.90": {
            value: { base: "{colors.uiDark.90}", _dark: "{colors.uiLight.90}" },
          },
          "uix.100": {
            value: {
              base: "{colors.uiDark.100}",
              _dark: "{colors.uiLight.100}",
            },
          },
          bg: {
            value: {
              base: "{colors.bgLight.100}",
              _dark: "{colors.bgDark.100}",
            },
          },
          "bg.5": {
            value: { base: "{colors.bgLight.5}", _dark: "{colors.bgDark.5}" },
          },
          "bg.10": {
            value: { base: "{colors.bgLight.10}", _dark: "{colors.bgDark.10}" },
          },
          "bg.20": {
            value: { base: "{colors.bgLight.20}", _dark: "{colors.bgDark.20}" },
          },
          "bg.30": {
            value: { base: "{colors.bgLight.30}", _dark: "{colors.bgDark.30}" },
          },
          "bg.40": {
            value: { base: "{colors.bgLight.40}", _dark: "{colors.bgDark.40}" },
          },
          "bg.50": {
            value: { base: "{colors.bgLight.50}", _dark: "{colors.bgDark.50}" },
          },
          "bg.60": {
            value: { base: "{colors.bgLight.60}", _dark: "{colors.bgDark.60}" },
          },
          "bg.70": {
            value: { base: "{colors.bgLight.70}", _dark: "{colors.bgDark.70}" },
          },
          "bg.80": {
            value: { base: "{colors.bgLight.80}", _dark: "{colors.bgDark.80}" },
          },
          "bg.90": {
            value: { base: "{colors.bgLight.90}", _dark: "{colors.bgDark.90}" },
          },
          "bg.100": {
            value: {
              base: "{colors.bgLight.100}",
              _dark: "{colors.bgDark.100}",
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
              fontFamily: "heading",
              fontSize: "24px",
              fontWeight: 800,
            },
          },
          sm: {
            value: {
              fontFamily: "heading",
              fontSize: "28px",
              fontWeight: 800,
            },
          },
          md: {
            value: {
              fontFamily: "heading",
              fontSize: "32px",
              fontWeight: 800,
            },
          },
          lg: {
            value: {
              fontFamily: "heading",
              fontSize: "36px",
              fontWeight: 800,
            },
          },
          xl: {
            value: {
              fontFamily: "heading",
              fontSize: "40px",
              fontWeight: 800,
            },
          },
        },
        display: {
          xs: {
            value: {
              fontFamily: "heading",
              fontSize: "40px",
              fontWeight: 900,
            },
          },
          sm: {
            value: {
              fontFamily: "heading",
              fontSize: "48px",
              fontWeight: 900,
            },
          },
          md: {
            value: {
              fontFamily: "heading",
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: "48px",
            },
          },
          lg: {
            value: {
              fontFamily: "heading",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: "56px",
            },
          },
          xl: {
            value: {
              fontFamily: "heading",
              fontSize: "80px",
              fontWeight: 900,
              lineHeight: "64px",
            },
          },
        },
      },
      tokens: {
        borders: {
          subtle: {
            value: {
              color: "{colors.ui.20}",
              style: "solid",
              width: "1px",
            },
          },
          solid: {
            value: {
              color: "{colors.ui.100}",
              style: "solid",
              width: "1px",
            },
          },
        },
        colors: {
          red: {
            100: { value: "rgb(238, 93, 93)" },
            80: { value: "rgba(238, 93, 93, 0.8)" },
            60: { value: "rgba(238, 93, 93, 0.6)" },
            40: { value: "rgba(238, 93, 93, 0.4)" },
            20: { value: "rgba(238, 93, 93, 0.2)" },
            10: { value: "rgba(238, 93, 93, 0.1)" },
          },
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
            100: { value: "rgb(255, 227, 164)" },
            80: { value: "rgba(255, 227, 164, 0.8)" },
            60: { value: "rgba(255, 227, 164, 0.6)" },
            40: { value: "rgba(255, 227, 164, 0.4)" },
            20: { value: "rgba(255, 227, 164, 0.2)" },
            10: { value: "rgba(255, 227, 164, 0.1)" },
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
          bgLight: {
            100: { value: "rgb(255, 255, 255)" },
            80: { value: "rgba(255, 255, 255, 0.8)" },
            60: { value: "rgba(255, 255, 255, 0.6)" },
            40: { value: "rgba(255, 255, 255, 0.4)" },
            20: { value: "rgba(255, 255, 255, 0.2)" },
            10: { value: "rgba(255, 255, 255, 0.1)" },
            5: { value: "rgba(255, 255, 255, 0.05)" },
          },
          bgDark: {
            100: { value: "rgb(22, 22, 24)" },
            90: { value: "rgba(22, 22, 24, 0.9)" },
            80: { value: "rgba(22, 22, 24, 0.8)" },
            70: { value: "rgba(22, 22, 24, 0.7)" },
            60: { value: "rgba(22, 22, 24, 0.6)" },
            50: { value: "rgba(22, 22, 24, 0.5)" },
            40: { value: "rgba(22, 22, 24, 0.4)" },
            30: { value: "rgba(22, 22, 24, 0.3)" },
            20: { value: "rgba(22, 22, 24, 0.2)" },
            10: { value: "rgba(22, 22, 24, 0.1)" },
            5: { value: "rgba(22, 22, 24, 0.05)" },
          },
          bg2Light: {
            100: { value: "rgb(242, 242, 242)" },
            90: { value: "rgba(242, 242, 242, 0.9)" },
            80: { value: "rgba(242, 242, 242, 0.8)" },
            70: { value: "rgba(242, 242, 242, 0.7)" },
            60: { value: "rgba(242, 242, 242, 0.6)" },
            50: { value: "rgba(242, 242, 242, 0.5)" },
            40: { value: "rgba(242, 242, 242, 0.4)" },
            30: { value: "rgba(242, 242, 242, 0.3)" },
            20: { value: "rgba(242, 242, 242, 0.2)" },
            10: { value: "rgba(242, 242, 242, 0.1)" },
            5: { value: "rgba(242, 242, 242, 0.05)" },
          },
          bg2Dark: {
            100: { value: "rgb(32, 33, 43)" },
            80: { value: "rgba(32, 33, 43, 0.8)" },
            60: { value: "rgba(32, 33, 43, 0.6)" },
            40: { value: "rgba(32, 33, 43, 0.4)" },
            20: { value: "rgba(32, 33, 43, 0.2)" },
            10: { value: "rgba(32, 33, 43, 0.1)" },
            5: { value: "rgba(32, 33, 43, 0.05)" },
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
2;
