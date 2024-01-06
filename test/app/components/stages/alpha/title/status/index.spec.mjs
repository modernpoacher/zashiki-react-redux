import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  Rejected,
  Resolved,
  Pending
} from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title/status'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title/status', () => {
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
