const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// 👇 ADD SVG SUPPORT
config.transformer.babelTransformerPath =
  require.resolve("react-native-svg-transformer");

// 👇 TELL METRO SVG IS SOURCE, NOT ASSET
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg",
);
config.resolver.sourceExts.push("svg");

module.exports = withNativeWind(config, { input: "./global.css" });
