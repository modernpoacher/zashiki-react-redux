import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark', () => {
  describe('`Debark`', () => {
    it('is a function', () => {
      expect(Debark)
        .to.be.a('function')
    })
  })
})
