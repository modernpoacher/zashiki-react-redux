import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha', () => {
  describe('`Alpha`', () => {
    it('is a function', () => {
      expect(Alpha)
        .to.be.a('function')
    })
  })
})
