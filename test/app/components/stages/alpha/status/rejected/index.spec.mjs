import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/rejected'

chai.use(sinonChai)

describe('#app/components/stages/alpha/status/rejected', () => {
  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })
})
