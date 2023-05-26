require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen)/
  ]
})

const {
  default: component
} = require('./with-router.jsx')

module.exports = component
