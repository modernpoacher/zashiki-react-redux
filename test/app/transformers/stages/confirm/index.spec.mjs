import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import transformer, {
  transformConfirm
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/confirm'

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/confirm', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transformer)
        .to.be.a('function')
    })
  })

  describe('`transformConfirm`', () => {
    it('is a function', () => {
      expect(transformConfirm)
        .to.be.a('function')
    })
  })
})
