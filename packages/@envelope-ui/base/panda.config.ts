import { defineConfig } from "@pandacss/dev";
import { envelopePreset } from "@envelope-ui/preset";

export default defineConfig({
  presets: [envelopePreset],
  include: ["./src/**/*.{ts,tsx,js,jsx}"],
  jsxFramework: "react",
  importMap: "@envelope-ui/styled",
});
