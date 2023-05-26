require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const {
  default: component
} = require('./index.jsx')

module.exports = component
