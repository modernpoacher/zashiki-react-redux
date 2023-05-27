import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/component'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/component', () => {
  describe('`Omega`', () => {
    it('is a function', () => {
      expect(Omega)
        .to.be.a('function')
    })
  })
})
