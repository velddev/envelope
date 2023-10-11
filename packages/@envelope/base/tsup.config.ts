import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: true,
  sourcemap: true,
  dts: true,
  minify: true,
  clean: false,
  treeshake: true,
});
