import { defineConfig } from "@pandacss/dev";
import { envelopePreset } from "@envelope/styled-system";

export default defineConfig({
  presets: ["@pandacss/dev/presets", envelopePreset],
  jsxFramework: "react",
});
