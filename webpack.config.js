const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "Home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      publicPath: "http://localhost:8083/",
    },

    // modify the webpack config however you'd like to by adding to this object
  });
};
