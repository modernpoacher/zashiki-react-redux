import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm'

chai.use(sinonChai)

describe('#app/components/navigation/stages/confirm', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
