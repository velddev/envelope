const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../src/stories/**/*.@(stories|story).@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  typescript: {
    reactDocgen: "react-docgen-typescript-loader",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = config.resolve.plugins || [];

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    );

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
      "@": path.resolve(__dirname, "../"),
    };

    return config
  }
}