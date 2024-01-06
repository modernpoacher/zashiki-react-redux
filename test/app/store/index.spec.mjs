import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Store from '@modernpoacher/zashiki-react-redux/app/store'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/store', () => {
  describe('`Store`', () => {
    it('is a function', () => {
      expect(Store)
        .to.be.a('function')
    })
  })
})
