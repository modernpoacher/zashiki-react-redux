import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/rejected'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status/rejected', () => {
  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })
})
