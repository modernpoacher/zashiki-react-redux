import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/embark'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/embark', () => {
  describe('`Embark`', () => {
    it('is a function', () => {
      expect(Embark)
        .to.be.a('function')
    })
  })
})
