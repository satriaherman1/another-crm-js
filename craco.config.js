const path = require(`path`);
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: "src",
        }),
      ],
    },

    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
  },
};
