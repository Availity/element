const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.base.json');

module.exports = {
  setupFiles: ['../../jest.polyfills.global.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  globalSetup: '../../jest.setup.global.js',
  transform: {
    '^.+\\.(ts|tsx|js|html)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  preset: '../../jest.preset.js',
  testEnvironment: 'jest-environment-jsdom-global',
  globals: {
    jsdom: true,
  },
  coverageReporters: ['json-summary'],
  moduleNameMapper: {
    uuid: require.resolve('uuid'),
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/../../' }),
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};
