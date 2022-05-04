module.exports = {
  extends: './index.js',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
