import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/embark'

chai.use(sinonChai)

describe('#app/components/stages/embark/embark', () => {
  describe('`Embark`', () => {
    it('is a function', () => {
      expect(Embark)
        .to.be.a('function')
    })
  })
})
