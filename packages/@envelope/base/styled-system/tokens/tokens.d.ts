/* eslint-disable */
export type Token = "colors.pink.10" | "colors.pink.20" | "colors.pink.40" | "colors.pink.60" | "colors.pink.80" | "colors.pink.100" | "colors.purple.10" | "colors.purple.20" | "colors.purple.40" | "colors.purple.60" | "colors.purple.80" | "colors.purple.100" | "colors.yellow.10" | "colors.yellow.20" | "colors.yellow.40" | "colors.yellow.60" | "colors.yellow.80" | "colors.yellow.100" | "colors.uiLight.5" | "colors.uiLight.10" | "colors.uiLight.20" | "colors.uiLight.30" | "colors.uiLight.40" | "colors.uiLight.50" | "colors.uiLight.60" | "colors.uiLight.70" | "colors.uiLight.80" | "colors.uiLight.90" | "colors.uiLight.100" | "colors.uiDark.5" | "colors.uiDark.10" | "colors.uiDark.20" | "colors.uiDark.30" | "colors.uiDark.40" | "colors.uiDark.50" | "colors.uiDark.60" | "colors.uiDark.70" | "colors.uiDark.80" | "colors.uiDark.90" | "colors.uiDark.100" | "fonts.mono" | "fonts.body" | "fonts.heading" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.ui.5" | "colors.ui.10" | "colors.ui.20" | "colors.ui.30" | "colors.ui.40" | "colors.ui.50" | "colors.ui.60" | "colors.ui.70" | "colors.ui.80" | "colors.ui.90" | "colors.ui.100" | "colors.colorPalette.10" | "colors.colorPalette.20" | "colors.colorPalette.40" | "colors.colorPalette.60" | "colors.colorPalette.80" | "colors.colorPalette.100" | "colors.colorPalette.5" | "colors.colorPalette.30" | "colors.colorPalette.50" | "colors.colorPalette.70" | "colors.colorPalette.90"

export type ColorPalette = "pink" | "purple" | "yellow" | "uiLight" | "uiDark"

export type ColorToken = "pink.10" | "pink.20" | "pink.40" | "pink.60" | "pink.80" | "pink.100" | "purple.10" | "purple.20" | "purple.40" | "purple.60" | "purple.80" | "purple.100" | "yellow.10" | "yellow.20" | "yellow.40" | "yellow.60" | "yellow.80" | "yellow.100" | "uiLight.5" | "uiLight.10" | "uiLight.20" | "uiLight.30" | "uiLight.40" | "uiLight.50" | "uiLight.60" | "uiLight.70" | "uiLight.80" | "uiLight.90" | "uiLight.100" | "uiDark.5" | "uiDark.10" | "uiDark.20" | "uiDark.30" | "uiDark.40" | "uiDark.50" | "uiDark.60" | "uiDark.70" | "uiDark.80" | "uiDark.90" | "uiDark.100" | "ui.5" | "ui.10" | "ui.20" | "ui.30" | "ui.40" | "ui.50" | "ui.60" | "ui.70" | "ui.80" | "ui.90" | "ui.100" | "colorPalette.10" | "colorPalette.20" | "colorPalette.40" | "colorPalette.60" | "colorPalette.80" | "colorPalette.100" | "colorPalette.5" | "colorPalette.30" | "colorPalette.50" | "colorPalette.70" | "colorPalette.90"

export type FontToken = "mono" | "body" | "heading"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type Tokens = {
		colors: ColorToken
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"