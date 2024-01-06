import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
