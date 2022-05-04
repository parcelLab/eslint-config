module.exports = {
  extends: [
    './src/javascript.js',
    './src/jest.js',
    './src/react.js',
    './src/typescript.js',
  ].map((path) => require.resolve(path)),
};
