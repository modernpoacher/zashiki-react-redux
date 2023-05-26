import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/embark'

chai.use(sinonChai)

describe('#app/components/navigation/stages/embark', () => {
  describe('`Embark`', () => {
    it('is a function', () => {
      expect(Embark)
        .to.be.a('function')
    })
  })
})