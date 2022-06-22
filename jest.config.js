const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(uuid)/)"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/mocks/fileMock.ts",
  },
};
module.exports = config;
