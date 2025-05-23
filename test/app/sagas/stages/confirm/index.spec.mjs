import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import {
  watchConfirmFetch,
  watchConfirmRoute,
  watchConfirmStore,
  watchConfirmSubmit
} from '@modernpoacher/zashiki-react-redux/app/sagas/stages/confirm'

describe('@modernpoacher/zashiki-react-redux/app/sagas/stages/confirm', () => {
  describe('`watchConfirmFetch`', () => {
    it('is a function', () => {
      expect(watchConfirmFetch)
        .to.be.a('function')
    })
  })

  describe('`watchConfirmRoute`', () => {
    it('is a function', () => {
      expect(watchConfirmRoute)
        .to.be.a('function')
    })
  })

  describe('`watchConfirmStore`', () => {
    it('is a function', () => {
      expect(watchConfirmStore)
        .to.be.a('function')
    })
  })

  describe('`watchConfirmSubmit`', () => {
    it('is a function', () => {
      expect(watchConfirmSubmit)
        .to.be.a('function')
    })
  })
})
