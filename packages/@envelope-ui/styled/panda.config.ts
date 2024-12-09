import { envelopePreset } from "@envelope-ui/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  presets: ["@pandacss/preset-panda", envelopePreset],

  jsxFramework: "react",

  // The output directory for your css system
  outdir: ".",
});
