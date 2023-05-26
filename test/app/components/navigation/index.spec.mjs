import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Navigation from '@modernpoacher/zashiki-react-redux/app/components/navigation'

chai.use(sinonChai)

describe('#app/components/navigation', () => {
  describe('`Navigation`', () => {
    it('is a function', () => {
      expect(Navigation)
        .to.be.a('function')
    })
  })
})
