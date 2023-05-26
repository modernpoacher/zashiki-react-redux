import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega'

chai.use(sinonChai)

describe('#app/components/stages/omega', () => {
  describe('`Omega`', () => {
    it('is a function', () => {
      expect(Omega)
        .to.be.a('function')
    })
  })
})
