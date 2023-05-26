import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Router from '@modernpoacher/zashiki-react-redux/app/router'

chai.use(sinonChai)

describe('#app/router', () => {
  describe('`Router`', () => {
    it('is an object', () => {
      expect(Router)
        .to.be.an('object')
    })
  })
})
