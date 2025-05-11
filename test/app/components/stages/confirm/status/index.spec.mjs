import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import {
  Resolved,
  Rejected,
  Pending
} from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/status', () => {
  describe('`Resolved`', () => {
    it('is a function', () => {
      expect(Resolved)
        .to.be.a('function')
    })
  })

  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })

  describe('`Pending`', () => {
    it('is a function', () => {
      expect(Pending)
        .to.be.a('function')
    })
  })
})
