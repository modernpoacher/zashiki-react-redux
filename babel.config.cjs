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
         *  Jest - Cogs
         */
        'shinkansen-cogs/cogs/checkbox': './node_modules/shinkansen-cogs/src/cogs/checkbox/index.cjs',
        'shinkansen-cogs/cogs/email': './node_modules/shinkansen-cogs/src/cogs/email/index.cjs',
        'shinkansen-cogs/cogs/number': './node_modules/shinkansen-cogs/src/cogs/number/index.cjs',
        'shinkansen-cogs/cogs/password': './node_modules/shinkansen-cogs/src/cogs/password/index.cjs',
        'shinkansen-cogs/cogs/radio': './node_modules/shinkansen-cogs/src/cogs/radio/index.cjs',
        'shinkansen-cogs/cogs/select': './node_modules/shinkansen-cogs/src/cogs/select/index.cjs',
        'shinkansen-cogs/cogs/text': './node_modules/shinkansen-cogs/src/cogs/text/index.cjs',
        'shinkansen-cogs/cogs/textarea': './node_modules/shinkansen-cogs/src/cogs/textarea/index.cjs',
        'shinkansen-cogs/cogs': './node_modules/shinkansen-cogs/src/cogs/index.cjs',
        'shinkansen-cogs/components/common/disabled': './node_modules/shinkansen-cogs/src/components/common/disabled/index.cjs',
        'shinkansen-cogs/components/common/readonly': './node_modules/shinkansen-cogs/src/components/common/readonly/index.cjs',
        'shinkansen-cogs/components/common/required': './node_modules/shinkansen-cogs/src/components/common/required/index.cjs',
        'shinkansen-cogs/components/common/text-content': './node_modules/shinkansen-cogs/src/components/common/text-content/index.cjs',
        'shinkansen-cogs/components/description/checkbox': './node_modules/shinkansen-cogs/src/components/description/checkbox/index.cjs',
        'shinkansen-cogs/components/description/email': './node_modules/shinkansen-cogs/src/components/description/email/index.cjs',
        'shinkansen-cogs/components/description/number': './node_modules/shinkansen-cogs/src/components/description/number/index.cjs',
        'shinkansen-cogs/components/description/password': './node_modules/shinkansen-cogs/src/components/description/password/index.cjs',
        'shinkansen-cogs/components/description/radio': './node_modules/shinkansen-cogs/src/components/description/radio/index.cjs',
        'shinkansen-cogs/components/description/select': './node_modules/shinkansen-cogs/src/components/description/select/index.cjs',
        'shinkansen-cogs/components/description/text': './node_modules/shinkansen-cogs/src/components/description/text/index.cjs',
        'shinkansen-cogs/components/description/textarea': './node_modules/shinkansen-cogs/src/components/description/textarea/index.cjs',
        'shinkansen-cogs/components/description': './node_modules/shinkansen-cogs/src/components/description/index.cjs',
        'shinkansen-cogs/components/error-message/checkbox': './node_modules/shinkansen-cogs/src/components/error-message/checkbox/index.cjs',
        'shinkansen-cogs/components/error-message/email': './node_modules/shinkansen-cogs/src/components/error-message/email/index.cjs',
        'shinkansen-cogs/components/error-message/number': './node_modules/shinkansen-cogs/src/components/error-message/number/index.cjs',
        'shinkansen-cogs/components/error-message/password': './node_modules/shinkansen-cogs/src/components/error-message/password/index.cjs',
        'shinkansen-cogs/components/error-message/radio': './node_modules/shinkansen-cogs/src/components/error-message/radio/index.cjs',
        'shinkansen-cogs/components/error-message/select': './node_modules/shinkansen-cogs/src/components/error-message/select/index.cjs',
        'shinkansen-cogs/components/error-message/text': './node_modules/shinkansen-cogs/src/components/error-message/text/index.cjs',
        'shinkansen-cogs/components/error-message/textarea': './node_modules/shinkansen-cogs/src/components/error-message/textarea/index.cjs',
        'shinkansen-cogs/components/error-message': './node_modules/shinkansen-cogs/src/components/error-message/index.cjs',
        'shinkansen-cogs/components/field/checkbox': './node_modules/shinkansen-cogs/src/components/field/checkbox/index.cjs',
        'shinkansen-cogs/components/field/email': './node_modules/shinkansen-cogs/src/components/field/email/index.cjs',
        'shinkansen-cogs/components/field/number': './node_modules/shinkansen-cogs/src/components/field/number/index.cjs',
        'shinkansen-cogs/components/field/password': './node_modules/shinkansen-cogs/src/components/field/password/index.cjs',
        'shinkansen-cogs/components/field/radio': './node_modules/shinkansen-cogs/src/components/field/radio/index.cjs',
        'shinkansen-cogs/components/field/select': './node_modules/shinkansen-cogs/src/components/field/select/index.cjs',
        'shinkansen-cogs/components/field/text': './node_modules/shinkansen-cogs/src/components/field/text/index.cjs',
        'shinkansen-cogs/components/field/textarea': './node_modules/shinkansen-cogs/src/components/field/textarea/index.cjs',
        'shinkansen-cogs/components/field': './node_modules/shinkansen-cogs/src/components/field/index.cjs',
        'shinkansen-cogs/components/title/checkbox': './node_modules/shinkansen-cogs/src/components/title/checkbox/index.cjs',
        'shinkansen-cogs/components/title/email': './node_modules/shinkansen-cogs/src/components/title/email/index.cjs',
        'shinkansen-cogs/components/title/number': './node_modules/shinkansen-cogs/src/components/title/number/index.cjs',
        'shinkansen-cogs/components/title/password': './node_modules/shinkansen-cogs/src/components/title/password/index.cjs',
        'shinkansen-cogs/components/title/radio': './node_modules/shinkansen-cogs/src/components/title/radio/index.cjs',
        'shinkansen-cogs/components/title/select': './node_modules/shinkansen-cogs/src/components/title/select/index.cjs',
        'shinkansen-cogs/components/title/text': './node_modules/shinkansen-cogs/src/components/title/text/index.cjs',
        'shinkansen-cogs/components/title/textarea': './node_modules/shinkansen-cogs/src/components/title/textarea/index.cjs',
        'shinkansen-cogs/components/title': './node_modules/shinkansen-cogs/src/components/title/index.cjs',
        'shinkansen-cogs/transformers/error-message': './node_modules/shinkansen-cogs/src/transformers/error-message/index.mjs',
        /**
         *  Jest - Sprockets
         */
        'shinkansen-sprockets/sprockets/check-answers': './node_modules/shinkansen-sprockets/src/sprockets/check-answers/index.cjs',
        'shinkansen-sprockets/sprockets/error-summary': './node_modules/shinkansen-sprockets/src/sprockets/error-summary/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset': './node_modules/shinkansen-sprockets/src/sprockets/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets': './node_modules/shinkansen-sprockets/src/sprockets/index.cjs',
        'shinkansen-sprockets/components/common/text-content': './node_modules/shinkansen-sprockets/src/components/common/text-content/index.cjs',
        'shinkansen-sprockets/components/description/fieldset': './node_modules/shinkansen-sprockets/src/components/description/fieldset/index.cjs',
        'shinkansen-sprockets/components/description': './node_modules/shinkansen-sprockets/src/components/description/index.cjs',
        'shinkansen-sprockets/components/error-message/fieldset': './node_modules/shinkansen-sprockets/src/components/error-message/fieldset/index.cjs',
        'shinkansen-sprockets/components/error-message': './node_modules/shinkansen-sprockets/src/components/error-message/index.cjs',
        'shinkansen-sprockets/components/group/check-answers/answer-title': './node_modules/shinkansen-sprockets/src/components/group/check-answers/answer-title.cjs',
        'shinkansen-sprockets/components/group/check-answers/answer-value': './node_modules/shinkansen-sprockets/src/components/group/check-answers/answer-value.cjs',
        'shinkansen-sprockets/components/group/check-answers/change-answer': './node_modules/shinkansen-sprockets/src/components/group/check-answers/change-answer.cjs',
        'shinkansen-sprockets/components/group/check-answers/visually-hidden-text': './node_modules/shinkansen-sprockets/src/components/group/check-answers/visually-hidden-text.cjs',
        'shinkansen-sprockets/components/group/check-answers': './node_modules/shinkansen-sprockets/src/components/group/check-answers/index.cjs',
        'shinkansen-sprockets/components/group/error-summary': './node_modules/shinkansen-sprockets/src/components/group/error-summary/index.cjs',
        'shinkansen-sprockets/components/group/fieldset': './node_modules/shinkansen-sprockets/src/components/group/fieldset/index.cjs',
        'shinkansen-sprockets/components/group': './node_modules/shinkansen-sprockets/src/components/group/index.cjs',
        'shinkansen-sprockets/components/title/check-answers': './node_modules/shinkansen-sprockets/src/components/title/check-answers/index.cjs',
        'shinkansen-sprockets/components/title/error-summary': './node_modules/shinkansen-sprockets/src/components/title/error-summary/index.cjs',
        'shinkansen-sprockets/components/title/fieldset': './node_modules/shinkansen-sprockets/src/components/title/fieldset/index.cjs',
        'shinkansen-sprockets/components/title': './node_modules/shinkansen-sprockets/src/components/title/index.cjs',
        'shinkansen-sprockets/transformers/check-answers': './node_modules/shinkansen-sprockets/src/transformers/check-answers/index.mjs',
        'shinkansen-sprockets/transformers/common': './node_modules/shinkansen-sprockets/src/transformers/common/index.mjs',
        'shinkansen-sprockets/transformers/error-message': './node_modules/shinkansen-sprockets/src/transformers/error-message/index.mjs',
        'shinkansen-sprockets/transformers/error-summary': './node_modules/shinkansen-sprockets/src/transformers/error-summary/index.mjs',
        /**
         *  Jest - Pinion
         */
        'shinkansen-pinion/components/sprockets/check-answers': './node_modules/shinkansen-pinion/src/components/sprockets/check-answers/index.cjs',
        'shinkansen-pinion/components/sprockets/error-summary': './node_modules/shinkansen-pinion/src/components/sprockets/error-summary/index.cjs',
        'shinkansen-pinion/components/sprockets/fieldset': './node_modules/shinkansen-pinion/src/components/sprockets/fieldset/index.cjs',
        'shinkansen-pinion/components/cogs/radio': './node_modules/shinkansen-pinion/src/components/cogs/radio/index.cjs',
        'shinkansen-pinion/components/cogs/select': './node_modules/shinkansen-pinion/src/components/cogs/select/index.cjs',
        'shinkansen-pinion/components/cogs/text': './node_modules/shinkansen-pinion/src/components/cogs/text/index.cjs',
        'shinkansen-pinion/components/cogs': './node_modules/shinkansen-pinion/src/components/cogs/index.mjs',
        'shinkansen-pinion/components': './node_modules/shinkansen-pinion/src/components/index.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-title': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-value-for-type-array': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-value-for-type-object': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-answer-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-any-of-selected-item-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-any-of-selected-items-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-change-answer': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-enum-selected-item-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-enum-selected-items-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-one-of-selected-item-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-one-of-selected-items-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/get-visually-hidden-text': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/index': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/to-answer-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-answer-title': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-answer-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-any-of-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-enum-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-field-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-one-of-value': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-array-answers': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-boolean-answer': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-null-answer': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-number-answer': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-object-answers': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers/transform-type-string-answer': './node_modules/shinkansen-pinion/src/transformers/check-answers.mjs',
        'shinkansen-pinion/transformers/check-answers': './node_modules/shinkansen-pinion/src/transformers/check-answers/index.mjs',
        'shinkansen-pinion/transformers/common/get-any-of': './node_modules/shinkansen-pinion/src/transformers/common/get-any-of.mjs',
        'shinkansen-pinion/transformers/common/get-component': './node_modules/shinkansen-pinion/src/transformers/common/get-component.mjs',
        'shinkansen-pinion/transformers/common/get-description': './node_modules/shinkansen-pinion/src/transformers/common/get-description.mjs',
        'shinkansen-pinion/transformers/common/get-elements-title': './node_modules/shinkansen-pinion/src/transformers/common/get-elements-title.mjs',
        'shinkansen-pinion/transformers/common/get-enum': './node_modules/shinkansen-pinion/src/transformers/common/get-enum.mjs',
        'shinkansen-pinion/transformers/common/get-field': './node_modules/shinkansen-pinion/src/transformers/common/get-field.mjs',
        'shinkansen-pinion/transformers/common/get-group': './node_modules/shinkansen-pinion/src/transformers/common/get-group.mjs',
        'shinkansen-pinion/transformers/common/get-one-of': './node_modules/shinkansen-pinion/src/transformers/common/get-one-of.mjs',
        'shinkansen-pinion/transformers/common/get-required': './node_modules/shinkansen-pinion/src/transformers/common/get-required.mjs',
        'shinkansen-pinion/transformers/common/get-resource-url': './node_modules/shinkansen-pinion/src/transformers/common/get-resource-url.mjs',
        'shinkansen-pinion/transformers/common/get-title': './node_modules/shinkansen-pinion/src/transformers/common/get-title.mjs',
        'shinkansen-pinion/transformers/common/get-type': './node_modules/shinkansen-pinion/src/transformers/common/get-type.mjs',
        'shinkansen-pinion/transformers/common/get-value': './node_modules/shinkansen-pinion/src/transformers/common/get-value.mjs',
        'shinkansen-pinion/transformers/common/has-any-of': './node_modules/shinkansen-pinion/src/transformers/common/has-any-of.mjs',
        'shinkansen-pinion/transformers/common/has-component': './node_modules/shinkansen-pinion/src/transformers/common/has-component.mjs',
        'shinkansen-pinion/transformers/common/has-description': './node_modules/shinkansen-pinion/src/transformers/common/has-description.mjs',
        'shinkansen-pinion/transformers/common/has-elements-title': './node_modules/shinkansen-pinion/src/transformers/common/has-elements-title.mjs',
        'shinkansen-pinion/transformers/common/has-enum': './node_modules/shinkansen-pinion/src/transformers/common/has-enum.mjs',
        'shinkansen-pinion/transformers/common/has-field': './node_modules/shinkansen-pinion/src/transformers/common/has-field.mjs',
        'shinkansen-pinion/transformers/common/has-one-of': './node_modules/shinkansen-pinion/src/transformers/common/has-one-of.mjs',
        'shinkansen-pinion/transformers/common/has-required': './node_modules/shinkansen-pinion/src/transformers/common/has-required.mjs',
        'shinkansen-pinion/transformers/common/has-title': './node_modules/shinkansen-pinion/src/transformers/common/has-title.mjs',
        'shinkansen-pinion/transformers/common/has-type': './node_modules/shinkansen-pinion/src/transformers/common/has-type.mjs',
        'shinkansen-pinion/transformers/common/has-value': './node_modules/shinkansen-pinion/src/transformers/common/has-value.mjs',
        'shinkansen-pinion/transformers/common/index': './node_modules/shinkansen-pinion/src/transformers/common/index.mjs',
        'shinkansen-pinion/transformers/common': './node_modules/shinkansen-pinion/src/transformers/common/index.mjs',
        'shinkansen-pinion/transformers/error-message': './node_modules/shinkansen-pinion/src/transformers/error-message/index.mjs',
        'shinkansen-pinion/transformers': './node_modules/shinkansen-pinion/src/transformers/index.mjs',
        'shinkansen-pinion/pinion': './node_modules/shinkansen-pinion/src/pinion/index.cjs',
        /**
         *  Jest - Rails
         */
        'shinkansen-rails': './node_modules/shinkansen-rails/src/index.mjs',
        /**
         *  Jest - Signals
         */
        'shinkansen-signals': './node_modules/shinkansen-signals/src/index.mjs',
        /**
         *  Jest - Engine
         */
        'shinkansen-engine/components/cogs': './node_modules/shinkansen-engine/src/components/cogs/index.cjs',
        'shinkansen-engine/components/sprockets': './node_modules/shinkansen-engine/src/components/sprockets/index.cjs',
        'shinkansen-engine/components/gears': './node_modules/shinkansen-engine/src/components/gears/index.cjs',
        'shinkansen-engine/components/pinion/check-answers': './node_modules/shinkansen-engine/src/components/pinion/check-answers/index.cjs',
        'shinkansen-engine/components/pinion/error-summary': './node_modules/shinkansen-engine/src/components/pinion/error-summary/index.cjs',
        'shinkansen-engine/components/pinion/fieldset': './node_modules/shinkansen-engine/src/components/pinion/fieldset/index.cjs',
        'shinkansen-engine/components/pinion': './node_modules/shinkansen-engine/src/components/pinion/index.cjs',
        'shinkansen-engine/components/pantograph': './node_modules/shinkansen-engine/src/components/pantograph/index.cjs',
        'shinkansen-engine/components/rails': './node_modules/shinkansen-engine/src/components/rails/index.cjs',
        'shinkansen-engine/components/relay': './node_modules/shinkansen-engine/src/components/relay/index.cjs',
        'shinkansen-engine/components/signals': './node_modules/shinkansen-engine/src/components/signals/index.cjs',
        'shinkansen-engine/transformers/pinion/check-answers': './node_modules/shinkansen-engine/src/transformers/pinion/check-answers/index.mjs',
        'shinkansen-engine/transformers/pinion/error-summary': './node_modules/shinkansen-engine/src/transformers/pinion/error-summary/index.mjs',
        'shinkansen-engine/transformers/transmission': './node_modules/shinkansen-engine/src/transformers/transmission/index.mjs',
        'shinkansen-engine/engine': './node_modules/shinkansen-engine/src/engine/index.cjs',
        'shinkansen-engine': './node_modules/shinkansen-engine/src/index.cjs',
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
