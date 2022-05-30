/**
 * Custom config base for all projects.
 */

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['unicorn', 'prettier', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'unicorn/no-array-for-each': 'off', // conflict with no-restricted-syntax
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      { allowList: { args: true, env: true, prod: true } },
    ],
  },
  overrides: [
    {
      /**
       * Relax rules in config files
       */
      files: [
        '**/{commitlint,jest}.config.{j,t}s?(x)',
        '**/webpack.*.{j,t}s',
        '**/typedoc.js',
        '**/.eslintrc.js',
        '**/.stylelintrc.js',
      ],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
