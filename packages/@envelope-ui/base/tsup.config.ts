import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: true,
  sourcemap: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: false,
  clean: false,
  treeshake: true,
  external: ["@/_generated/styled"],
  shims: true,
});
