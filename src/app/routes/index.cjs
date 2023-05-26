require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen)/
  ]
})

const {
  default: routes
} = require('./index.jsx')

module.exports = routes
