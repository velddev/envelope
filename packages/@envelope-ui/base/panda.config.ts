import { defineConfig } from "@pandacss/dev";
import { envelopePreset } from "@envelope-ui/preset";

export default defineConfig({
  presets: [envelopePreset],
  jsxFramework: "react",
  outdir: "./src/_generated/styled",
});
