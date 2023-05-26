import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Gears from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears'

chai.use(sinonChai)

describe('#app/components/stages/alpha/gears', () => {
  describe('`Gears`', () => {
    it('is a function', () => {
      expect(Gears)
        .to.be.a('function')
    })
  })
})
