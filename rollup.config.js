const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
const typescript = require("rollup-plugin-typescript2");

module.exports = {
  input: "src/index.tsx",
  output: [
    {
      dir: "./dist/cjs/",
      preserveModules: true,
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    },
    {
      dir: "./dist/esm/",
      preserveModules: true,
      format: "esm",
      sourcemap: true,
      exports: "auto",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};