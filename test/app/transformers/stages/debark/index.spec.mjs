import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import transformer, {
  transformDebark,
  transformOmega,
  transformRoute
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/debark'

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/debark', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transformer)
        .to.be.a('function')
    })
  })

  describe('`transformDebark`', () => {
    it('is a function', () => {
      expect(transformDebark)
        .to.be.a('function')
    })
  })

  describe('`transformOmega`', () => {
    it('is a function', () => {
      expect(transformOmega)
        .to.be.a('function')
    })
  })

  describe('`transformRoute`', () => {
    it('is a function', () => {
      expect(transformRoute)
        .to.be.a('function')
    })
  })
})
