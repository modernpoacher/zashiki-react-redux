import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/stages/debark'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark', () => {
  describe('`Debark`', () => {
    it('is a function', () => {
      expect(Debark)
        .to.be.a('function')
    })
  })
})
