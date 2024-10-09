const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path'); // Import the path module

const config = getDefaultConfig(__dirname ? __dirname : path.resolve());

module.exports = withNativeWind(config, { input: './styles/global.css' });
