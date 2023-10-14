import { defineConfig } from "@pandacss/dev";
import { envelopePreset } from "@envelope-ui/preset";

export default defineConfig({
  presets: [envelopePreset],
  jsxFramework: "react",
  emitPackage: true,
  outdir: "@envelope-ui/styled",
});
