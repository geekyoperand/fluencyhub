const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const images = require("next-images");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

let nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.node = { fs: "empty" };
    config.plugins = config.plugins || [];

    config.plugins = [...config.plugins];

    return config;
  }
};

module.exports = withPlugins(
  [
    images,
    {
      handleImages: ["jpeg", "png", "svg", "gif"],
      optimizeImages: true,
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 80
      },
      optipng: {
        optimizationLevel: 3
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3
      },
      svgo: {
        // enable/disable svgo plugins here
      }
    }
  ],
  nextConfig
);
