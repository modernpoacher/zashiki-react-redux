import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/zashiki/component', () => {
  describe('`Zashiki`', () => {
    it('is a function', () => {
      expect(Zashiki)
        .to.be.a('function')
    })
  })
})
