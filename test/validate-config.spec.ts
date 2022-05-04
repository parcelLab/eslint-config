import { ESLint } from 'eslint';

function getErrors(configFile: string, filePatterns: string[]) {
  const cli = new ESLint({
    overrideConfigFile: configFile,
  });

  return cli.lintFiles(filePatterns);
}

describe('Validate ESLint configs', () => {
  [
    ['javascript.js', 'test/fixtures/jsfile.js'],
    ['jest.js', 'test/fixtures/jestfile.js'],
    ['react.js', 'test/fixtures/reactfile.tsx'],
    ['typescript.js', 'test/fixtures/tsfile.ts'],
  ].forEach(([configFile, lintFile]) => {
    it(`load config ${configFile} in ESLint to validate ${lintFile}`, async () => {
      const results = await getErrors('src/'+configFile, [lintFile]);
      expect(results[0].messages).toEqual([]);
    });
  });
});
