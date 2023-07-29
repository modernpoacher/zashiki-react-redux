import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega', () => {
  describe('`Omega`', () => {
    it('is a function', () => {
      expect(Omega)
        .to.be.a('function')
    })
  })
})
