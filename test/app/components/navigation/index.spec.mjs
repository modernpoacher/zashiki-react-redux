import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Navigation from '@modernpoacher/zashiki-react-redux/app/components/navigation'

describe('@modernpoacher/zashiki-react-redux/app/components/navigation', () => {
  describe('`Navigation`', () => {
    it('is a function', () => {
      expect(Navigation)
        .to.be.a('function')
    })
  })
})
