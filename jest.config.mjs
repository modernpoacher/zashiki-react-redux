export default {
  bail: true,
  verbose: true,
  rootDir: '.',
  roots: [
    './src'
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(mjs?|jsx?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules\\/(?!shinkansen-cogs)\\/',
    '/node_modules\\/(?!shinkansen-sprockets)\\/',
    '/node_modules\\/(?!shinkansen-gears)\\/',
    '/node_modules\\/(?!shinkansen-pinion)\\/',
    '/node_modules\\/(?!shinkansen-rails)\\/',
    '/node_modules\\/(?!shinkansen-signals)\\/',
    '/node_modules\\/(?!shinkansen-pantograph)\\/',
    '/node_modules\\/(?!shinkansen-transmission)\\/',
    '/node_modules\\/(?!shinkansen-engine)\\/',
    '/node_modules\\/(?!react-component-instance)\\/',
    '/node_modules\\/(?!react-component-snapshot)\\/',
    '/node_modules\\/(?!react-component-name)\\/'
  ],
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.before-each.mjs',
    '<rootDir>/jest.after-each.mjs'
  ]
}
