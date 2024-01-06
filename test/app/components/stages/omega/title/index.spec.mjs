import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
