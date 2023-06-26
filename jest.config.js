module.exports = {
    // preset: 'jest-preset-angular',
    // setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    // testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    // collectCoverage: true,
    // coverageReporters: ['html', 'lcov', 'text-summary'],
    // coverageDirectory: '<rootDir>/coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json',
      },
    },
  };