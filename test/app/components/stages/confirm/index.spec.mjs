import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm'

chai.use(sinonChai)

describe('#app/components/stages/confirm', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
