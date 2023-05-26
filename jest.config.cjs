module.exports = {
  bail: true,
  verbose: true,
  rootDir: '.',
  roots: [
    './src'
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?|jsx?)$',
  testPathIgnorePatterns: ['.*\\.mock\\.jsx$'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'cjs'],
  transformIgnorePatterns: [
    '/node_modules\\/(?!shinkansen-cogs)\\/',
    '/node_modules\\/(?!shinkansen-sprockets)\\/',
    '/node_modules\\/(?!shinkansen-gears)\\/',
    '/node_modules\\/(?!shinkansen-pinion)\\/',
    '/node_modules\\/(?!shinkansen-rails)\\/',
    '/node_modules\\/(?!shinkansen-signals)\\/',
    '/node_modules\\/(?!shinkansen-pantograph)\\/',
    '/node_modules\\/(?!shinkansen-transmission)\\/',
    '/node_modules\\/(?!shinkansen-engine)\\/'
  ]
}
