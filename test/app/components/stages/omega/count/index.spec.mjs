import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/count'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/count', () => {
  describe('`Count`', () => {
    it('is a function', () => {
      expect(Count)
        .to.be.a('function')
    })
  })
})
