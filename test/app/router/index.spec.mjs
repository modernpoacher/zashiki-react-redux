import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Router from '@modernpoacher/zashiki-react-redux/app/router'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/router', () => {
  describe('`Router`', () => {
    it('is an object', () => {
      expect(Router)
        .to.be.an('object')
    })
  })
})
