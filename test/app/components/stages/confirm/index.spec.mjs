import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
