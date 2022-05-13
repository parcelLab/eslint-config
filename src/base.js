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
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Define custom parcelLab rules
  },
};
