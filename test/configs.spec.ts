import { ESLint } from "eslint";
import { exec } from "node:child_process";

function execPromise(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, _) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

async function lintFile(configFile: string, fileToLint: string) {
  const lintResult = await execPromise(`eslint \
    --format=json \
    --config ${configFile} \
    --no-ignore \
    ${fileToLint}`);

  return JSON.parse(String(lintResult)) as ESLint.LintResult[];
}

describe("Validate ESLint configs", () => {
  test.each([
    ["./index.js", "test/fixtures/jsfile.js"],
    ["./src/jest.js", "test/fixtures/jestfile.test.js"],
    ["./src/playwright.js", "test/fixtures/playwright-test.js"],
    ["./src/react-testing-library.js", "test/fixtures/react.test.js"],
    ["./src/react-ts.js", "test/fixtures/react-file.tsx"],
    ["./src/react.js", "test/fixtures/react-file.jsx"],
    ["./src/storybook.js", "test/fixtures/button.stories.tsx"],
    ["./src/typescript.js", "test/fixtures/tsfile.ts"],
  ])(
    "load config %s in ESLint to validate %s",
    async (lintConfigFile, fileToLint) => {
      const results = await lintFile(lintConfigFile, fileToLint);
      for (const result of results) {
        for (const message of result.messages) {
          expect(message.severity).toBeLessThanOrEqual(1);
        }
      }
    }
  );
});
