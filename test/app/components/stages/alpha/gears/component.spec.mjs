import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Gears from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears/component'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears/component', () => {
  describe('`Gears`', () => {
    it('is a function', () => {
      expect(Gears)
        .to.be.a('function')
    })
  })
})
