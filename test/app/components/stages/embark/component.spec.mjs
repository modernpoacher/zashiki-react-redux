import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/component'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/component', () => {
  describe('`Embark`', () => {
    it('is a function', () => {
      expect(Embark)
        .to.be.a('function')
    })
  })
})
