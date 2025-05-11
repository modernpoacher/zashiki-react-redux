import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Embark from '@modernpoacher/zashiki-react-redux/app/components/stages/embark'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark', () => {
  describe('`Embark`', () => {
    it('is a function', () => {
      expect(Embark)
        .to.be.a('function')
    })
  })
})
