import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count'

chai.use(sinonChai)

describe('#app/components/stages/alpha/count', () => {
  describe('`Count`', () => {
    it('is a function', () => {
      expect(Count)
        .to.be.a('function')
    })
  })
})