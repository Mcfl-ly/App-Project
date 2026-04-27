const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Adiciona a extensão 'db' à lista existente de extensões de assets
config.resolver.assetExts = [...config.resolver.assetExts, "db"];

module.exports = config;
