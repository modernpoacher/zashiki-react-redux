import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/rejected'

chai.use(sinonChai)

describe('#app/components/stages/omega/status/rejected', () => {
  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })
})