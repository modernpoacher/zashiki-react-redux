import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Router from '@modernpoacher/zashiki-react-redux/app/router'

describe('@modernpoacher/zashiki-react-redux/app/router', () => {
  describe('`Router`', () => {
    it('is an object', () => {
      expect(Router)
        .to.be.an('object')
    })
  })
})
