import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

chai.use(sinonChai)

describe('#app/router/with-router', () => {
  describe('`withRouter`', () => {
    it('is a function', () => {
      expect(withRouter)
        .to.be.a('function')
    })
  })
})
