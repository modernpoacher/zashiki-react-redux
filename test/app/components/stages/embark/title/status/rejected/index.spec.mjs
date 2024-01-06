import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Rejected from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/status/rejected'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/status/rejected', () => {
  describe('`Rejected`', () => {
    it('is a function', () => {
      expect(Rejected)
        .to.be.a('function')
    })
  })
})
