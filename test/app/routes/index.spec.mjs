import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Routes from '@modernpoacher/zashiki-react-redux/app/routes'

describe('@modernpoacher/zashiki-react-redux/app/routes', () => {
  describe('`Routes`', () => {
    it('is an object', () => {
      expect(Routes)
        .to.be.an('object')
    })
  })
})
