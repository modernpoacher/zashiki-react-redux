import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/count', () => {
  describe('`Count`', () => {
    it('is a function', () => {
      expect(Count)
        .to.be.a('function')
    })
  })
})
