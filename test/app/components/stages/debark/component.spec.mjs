import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Debark from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/component'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/component', () => {
  describe('`Debark`', () => {
    it('is a function', () => {
      expect(Debark)
        .to.be.a('function')
    })
  })
})
