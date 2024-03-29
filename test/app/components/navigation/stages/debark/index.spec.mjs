import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/debark', () => {
  describe('`Debark`', () => {
    it('is a function', () => {
      expect(Debark)
        .to.be.a('function')
    })
  })
})
