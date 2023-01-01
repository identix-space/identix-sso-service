import packageJson from './package.json';

export default {
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testTimeout: 30_000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  displayName: {
    name: packageJson.name,
    color: 'blue',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
