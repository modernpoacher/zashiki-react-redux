import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Navigation from '@modernpoacher/zashiki-react-redux/app/components/navigation'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/navigation', () => {
  describe('`Navigation`', () => {
    it('is a function', () => {
      expect(Navigation)
        .to.be.a('function')
    })
  })
})
