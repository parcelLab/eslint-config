module.exports = {
  extends: ['./src/typescript.js'],
  ignorePatterns: ['test/fixtures/*'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'unicorn/prefer-module': 'off',
  },
};
