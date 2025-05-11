import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/confirm/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
