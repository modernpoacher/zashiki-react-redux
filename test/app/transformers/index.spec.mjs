import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import {
  stages,
  transformError,
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

describe('@modernpoacher/zashiki-react-redux/app/transformers', () => {
  describe('`stages`', () => {
    it('is an object', () => {
      expect(stages)
        .to.be.an('object')
    })
  })

  describe('`transformError`', () => {
    it('is a function', () => {
      expect(transformError)
        .to.be.a('function')
    })
  })

  describe('`transformRejected`', () => {
    it('is a function', () => {
      expect(transformRejected)
        .to.be.a('function')
    })
  })
})
