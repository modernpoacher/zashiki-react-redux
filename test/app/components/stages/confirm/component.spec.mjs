import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
