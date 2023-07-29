import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/title/status/rejected'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/title/status/rejected', () => {
  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })
})
