/**
 * Config base for projects using react.
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  settings: { react: { version: "detect" } },
  extends: require.resolve("./base.js"),
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:react/jsx-runtime",
        "prettier",
      ],
      plugins: ["react"],
      rules: {
        "react/function-component-definition": [
          "error",
          { namedComponents: "arrow-function" },
        ],
        "no-restricted-syntax": [
          "error",
          {
            selector: "LabeledStatement",
            message:
              "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
          },
          {
            selector: "WithStatement",
            message:
              "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
          },
        ],
      },
    },
    {
      files: ["*.{test,spec}.{j,t}s?(x)"],
      rules: {
        "no-param-reassign": ["error", { props: false }],
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
