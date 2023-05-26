import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  Rejected,
  Resolved,
  Pending
} from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title/status'

chai.use(sinonChai)

describe('#app/components/stages/alpha/title/status', () => {
  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })

  describe('`Resolved`', () => {
    it('is a function', () => {
      expect(Resolved)
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
