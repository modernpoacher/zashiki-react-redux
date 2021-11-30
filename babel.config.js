const debug = require('debug')

const log = debug('zashiki-react-redux')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`zashiki-react-redux` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: '16.13.0',
        browsers: [
          'last 2 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      /*
       *  Required! For `browsers`
       */
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/proposal-export-default-from',
  [
    'module-resolver', {
      root: ['./src'],
      cwd: 'babelrc',
      alias: {
        '@modernpoacher/zashiki-react-redux': './src'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
