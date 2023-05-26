import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki'

chai.use(sinonChai)

describe('#app/components/zashiki', () => {
  describe('`Zashiki`', () => {
    it('is a function', () => {
      expect(Zashiki)
        .to.be.a('function')
    })
  })
})
