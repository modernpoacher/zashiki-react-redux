import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import IndexPage from '@modernpoacher/zashiki-react-redux/app/components/navigation/index-page'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components/navigation/index-page', () => {
  describe('`IndexPage`', () => {
    it('is a function', () => {
      expect(IndexPage)
        .to.be.a('function')
    })
  })
})
