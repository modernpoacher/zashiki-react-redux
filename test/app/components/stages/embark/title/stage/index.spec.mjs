import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/stage'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/title/stage', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
