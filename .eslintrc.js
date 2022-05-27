module.exports = {
  extends: ['./src/typescript.js'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'unicorn/prefer-module': 'off',
  },
};
