const debug = require('debug')

const log = debug('zashiki-react-redux')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`zashiki` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
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
  '@babel/syntax-jsx',
  [
    'module-resolver', {
      alias: {
        /**
         *  Jest
         */
        'zashiki-react-redux/mocks/shinkansen-engine/components/gears': './src/app/components/__mocks__/shinkansen-engine/components/gears.mock.jsx'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!shinkansen|@sequencemedia\/react-render|@sequencemedia\/react-redux-render|@sequencemedia\/react-router-render|@sequencemedia\/react-router-redux-render|@modernpoacher\/isomorphic)/
    ]
  }
}
