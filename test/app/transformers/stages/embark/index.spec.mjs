import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import transformer, {
  transformEmbark
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/embark', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transformer)
        .to.be.a('function')
    })
  })

  describe('`transformEmbark`', () => {
    it('is a function', () => {
      expect(transformEmbark)
        .to.be.a('function')
    })
  })
})
