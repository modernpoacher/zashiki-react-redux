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
    it('is an object', () => {
      expect(embark)
        .to.be.a('module') // an('object')
    })
  })

  describe('`alpha`', () => {
    it('is an object', () => {
      expect(alpha)
        .to.be.a('module') // an('object')
    })
  })

  describe('`omega`', () => {
    it('is an object', () => {
      expect(omega)
        .to.be.a('module') // an('object')
    })
  })

  describe('`debark`', () => {
    it('is an object', () => {
      expect(debark)
        .to.be.a('module') // an('object')
    })
  })
})
