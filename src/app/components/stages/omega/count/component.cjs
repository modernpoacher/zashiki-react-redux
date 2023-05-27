require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const {
  default: component
} = require('./component.jsx')

module.exports = component
