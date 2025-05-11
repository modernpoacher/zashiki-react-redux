import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Pending from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/pending'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/status/pending', () => {
  describe('`Pending`', () => {
    it('is a function', () => {
      expect(Pending)
        .to.be.a('function')
    })
  })
})
