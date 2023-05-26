require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const {
  default: component
} = require('./component.jsx')

module.exports = component
