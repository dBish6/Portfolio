// const cssnano = require("cssnano");
// const postcssPresetEnv = require("postcss-preset-env");
// // const postcssPxToRem = require("postcss-pxtorem");

// module.exports = {
//   plugins: [
//     // cssnano({
//     //   preset: "default",
//     // }),
//     postcssPresetEnv({
//       stage: 3,
//       features: {
//         "nesting-rules": true,
//       },
//       // autoprefixer: { grid: true },
//     }),
//     // postcssPxToRem({
//     //   propList: ["*"],
//     // }),
//   ],
// };

module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        stage: 3,
        features: {
          "nesting-rules": true,
          "custom-properties": false,
        },
        autoprefixer: { grid: true },
      },
    ],
    // ["postcss-pxtorem", { propList: ["*"] }],
    [
      "cssnano",
      {
        preset: "default",
      },
    ],
    // [
    //   "postcss-mixins",
    //   {
    //     mixinsDir: path.join(__dirname, "src/styles/mixins"),
    //   },
    // ],
  ],
};
