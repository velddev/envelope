import { defineConfig } from "tsup";

export default defineConfig({
  name: "@envelope-ui/base",
  entry: ["src/index.tsx", "src/client.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  minify: true,
  external: ["@/_generated/styled", "react", "react-dom"],
});
