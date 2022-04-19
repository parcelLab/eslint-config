module.exports = {
  extends: './index.js',
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-array-callback-reference': 'off',
  },
};
