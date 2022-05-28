module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // used for not need to import react lib in all files
      },
    ],
  ],
};
