import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Store from '@modernpoacher/zashiki-react-redux/app/store'

describe('@modernpoacher/zashiki-react-redux/app/store', () => {
  describe('`Store`', () => {
    it('is a function', () => {
      expect(Store)
        .to.be.a('function')
    })
  })
})
