import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/component'

chai.use(sinonChai)

describe('#app/components/stages/confirm/component', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
