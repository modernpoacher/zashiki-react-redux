import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import {
  embark,
  alpha,
  omega,
  debark
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages'

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages', () => {
  describe('`embark`', () => {
    it('is a module', () => {
      expect(embark)
        .to.be.a('module')
    })
  })

  describe('`alpha`', () => {
    it('is a module', () => {
      expect(alpha)
        .to.be.a('module')
    })
  })

  describe('`omega`', () => {
    it('is a module', () => {
      expect(omega)
        .to.be.a('module')
    })
  })

  describe('`debark`', () => {
    it('is a module', () => {
      expect(debark)
        .to.be.a('module')
    })
  })
})
