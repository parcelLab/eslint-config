import { ESLint } from 'eslint';
import { exec } from 'node:child_process';

function execPromise(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

async function lintFile(configFile: string, fileToLint: string) {
  const lintResult = await execPromise(`eslint \
    --format=json \
    --config ${configFile} \
    ${fileToLint}`);

  return JSON.parse(String(lintResult)) as ESLint.LintResult[];
}

describe('Validate ESLint configs', () => {
  [
    ['javascript.js', 'test/fixtures/jsfile.js'],
    ['typescript.js', 'test/fixtures/tsfile.ts'],
    ['react.js', 'test/fixtures/reactfile.jsx'],
    ['react-typescript.js', 'test/fixtures/reactfile.tsx'],
    ['jest.js', 'test/fixtures/jestfile.test.js'],
  ].forEach(([lintConfigFile, fileToLint]) => {
    it(`load config ${lintConfigFile} in ESLint to validate ${fileToLint}`, async () => {
      const results = await lintFile(lintConfigFile, fileToLint);
      results.forEach((result) => {
        result.messages.forEach((message) => {
          expect(message.severity).toBeLessThanOrEqual(1);
        });
      });
    });
  });
});
