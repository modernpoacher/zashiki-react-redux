import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Alpha from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/alpha', () => {
  describe('`Alpha`', () => {
    it('is a function', () => {
      expect(Alpha)
        .to.be.a('function')
    })
  })
})
