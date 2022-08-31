/**
 * Config base for projects using react with typescript.
 */

// eslint-disable-next-line unicorn/prevent-abbreviations
module.exports = {
  extends: [require.resolve("./react.js"), require.resolve("./typescript.js")],
  overrides: [
    {
      files: ["*.tsx"],
      extends: ["airbnb-typescript", "prettier"],
      rules: {
        "react/require-default-props": "off",
      },
    },
  ],
};
