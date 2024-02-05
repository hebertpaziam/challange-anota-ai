module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  moduleNameMapper: {
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "^environment$": "<rootDir>/src/environments/environment.ts",
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { allowSyntheticDefaultImports: true }],
    "^.+\\.js$": "babel-jest",
  },
};
