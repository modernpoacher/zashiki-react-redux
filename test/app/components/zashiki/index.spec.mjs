import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki'

describe('@modernpoacher/zashiki-react-redux/app/components/zashiki', () => {
  describe('`Zashiki`', () => {
    it('is a function', () => {
      expect(Zashiki)
        .to.be.a('function')
    })
  })
})
