import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Routes from '@modernpoacher/zashiki-react-redux/app/routes'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/routes', () => {
  describe('`Routes`', () => {
    it('is an object', () => {
      expect(Routes)
        .to.be.an('object')
    })
  })
})
