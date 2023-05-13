module.exports = {
  bail: true,
  verbose: true,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?|mts?|jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'cjs'],
  transformIgnorePatterns: [
    '\\/(?!src)\\/',
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
