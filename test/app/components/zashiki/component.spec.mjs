import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/zashiki/component', () => {
  describe('`Zashiki`', () => {
    it('is a function', () => {
      expect(Zashiki)
        .to.be.a('function')
    })
  })
})
