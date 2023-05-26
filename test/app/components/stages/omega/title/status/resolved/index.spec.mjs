import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title/status/resolved'

chai.use(sinonChai)

describe('#app/components/stages/omega/title/status/resolved', () => {
  describe('`Resolved`', () => {
    it('is a function', () => {
      expect(Resolved)
        .to.be.a('function')
    })
  })
})
