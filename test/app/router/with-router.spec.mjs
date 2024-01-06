import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/router/with-router', () => {
  describe('`withRouter`', () => {
    it('is a function', () => {
      expect(withRouter)
        .to.be.a('function')
    })
  })
})
