import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage', () => {
  describe('`Stage`', () => {
    it('is a function', () => {
      expect(Stage)
        .to.be.a('function')
    })
  })
})
