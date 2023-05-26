import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Pending from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/status/pending'

chai.use(sinonChai)

describe('#app/components/stages/omega/status/pending', () => {
  describe('`Pending`', () => {
    it('is a function', () => {
      expect(Pending)
        .to.be.a('function')
    })
  })
})
