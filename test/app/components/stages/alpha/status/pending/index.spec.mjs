import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Pending from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/pending'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/status/pending', () => {
  describe('`Pending`', () => {
    it('is a function', () => {
      expect(Pending)
        .to.be.a('function')
    })
  })
})
