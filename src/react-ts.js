/**
 * Config base for projects using react with typescript.
 */

module.exports = {
  extends: [require.resolve("./react.js"), require.resolve("./typescript.js")],
  overrides: [
    {
      files: ["*.ts?(x)"],
      extends: ["@kesills/airbnb-typescript", "plugin:prettier/recommended"],
      rules: {
        "@stylistic/indent": "off",
        "@stylistic/quotes": "off",
        "react/require-default-props": "off",
      },
    },
  ],
};
