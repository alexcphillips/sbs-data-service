module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  testMatch: ["**/*.spec.ts"],
  verbose: true,
};
