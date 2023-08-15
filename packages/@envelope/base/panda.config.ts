import { defineConfig } from "@pandacss/dev";
import { envelopePreset } from "@envelope/preset";

export default defineConfig({
  presets: [envelopePreset],
  jsxFramework: "react",
  emitPackage: true,
  outdir: "@envelope/styled",
});
