import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/count'

chai.use(sinonChai)

describe('#app/components/stages/omega/count', () => {
  describe('`Count`', () => {
    it('is a function', () => {
      expect(Count)
        .to.be.a('function')
    })
  })
})
