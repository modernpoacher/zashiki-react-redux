import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title/stage'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title/stage', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
