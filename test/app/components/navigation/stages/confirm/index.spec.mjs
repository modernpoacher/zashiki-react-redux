import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Confirm from '@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/stages/confirm', () => {
  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
