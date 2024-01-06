import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Gears from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears/component'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/gears/component', () => {
  describe('`Gears`', () => {
    it('is a function', () => {
      expect(Gears)
        .to.be.a('function')
    })
  })
})
