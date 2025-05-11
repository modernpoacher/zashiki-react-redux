import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import withRouter from '@modernpoacher/zashiki-react-redux/app/router/with-router'

describe('@modernpoacher/zashiki-react-redux/app/router/with-router', () => {
  describe('`withRouter`', () => {
    it('is a function', () => {
      expect(withRouter)
        .to.be.a('function')
    })
  })
})
