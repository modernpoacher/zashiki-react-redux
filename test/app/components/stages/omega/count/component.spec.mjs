import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/count/component'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/count/component', () => {
  describe('`Count`', () => {
    it('is a function', () => {
      expect(Count)
        .to.be.a('function')
    })
  })
})
