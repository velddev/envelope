import { envelopePreset } from "@envelope-ui/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/preset-panda", envelopePreset],

  // Whether to use css reset
  preflight: true,

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: ".",
});
