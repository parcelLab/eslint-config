/**
 * Config base for projects using react with typescript.
 */

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
