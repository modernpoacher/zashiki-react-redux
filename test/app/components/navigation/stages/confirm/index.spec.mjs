import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm'

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
