import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Resolved from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/title/status/resolved'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/title/status/resolved', () => {
  describe('`Resolved`', () => {
    it('is a function', () => {
      expect(Resolved)
        .to.be.a('function')
    })
  })
})
