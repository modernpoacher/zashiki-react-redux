import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Token from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/token'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/token', () => {
  describe('`Token`', () => {
    it('is a function', () => {
      expect(Token)
        .to.be.a('function')
    })
  })
})
