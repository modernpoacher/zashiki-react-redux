import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Stage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage', () => {
  describe('`Stage`', () => {
    it('is a function', () => {
      expect(Stage)
        .to.be.a('function')
    })
  })
})
