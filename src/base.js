/**
 * Custom config base for all projects.
 */

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ["unicorn", "promise"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  rules: {
    "promise/catch-or-return": ["error", { allowFinally: true }],
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      { allowList: { args: true, env: true, err: true, prod: true } },
    ],
  },
  overrides: [
    {
      /**
       * Relax rules in config files
       */
      files: [
        "**/{commitlint,jest}.config.{j,t}s?(x)",
        "**/webpack.*.{j,t}s",
        "**/typedoc.js",
        "**/.eslintrc.js",
        "**/.stylelintrc.js",
      ],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
