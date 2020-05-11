const path = require("path");

module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testRegex: "\\.test\\.tsx$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: true,
    },
  },
};
