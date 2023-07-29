import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/title'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
