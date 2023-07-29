import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/component'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/component', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
