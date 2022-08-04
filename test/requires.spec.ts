/* eslint-disable @typescript-eslint/no-unsafe-return */
test("all entry points parse", () => {
  expect(() => require("..")).not.toThrow();
  expect(() => require("../src/base")).not.toThrow();
  expect(() => require("../src/jest")).not.toThrow();
  expect(() => require("../src/playwright")).not.toThrow();
  expect(() => require("../src/react-testing-library")).not.toThrow();
  expect(() => require("../src/react-ts")).not.toThrow();
  expect(() => require("../src/react")).not.toThrow();
  expect(() => require("../src/storybook")).not.toThrow();
  expect(() => require("../src/typescript")).not.toThrow();
});
