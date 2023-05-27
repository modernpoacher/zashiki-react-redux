import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Store from '@modernpoacher/zashiki-react-redux/app/store'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/store', () => {
  describe('`Store`', () => {
    it('is a function', () => {
      expect(Store)
        .to.be.a('function')
    })
  })
})
