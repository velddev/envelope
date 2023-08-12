import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: true,
  sourcemap: true,
  dts: true,
  clean: true,
  treeshake: true,
});
