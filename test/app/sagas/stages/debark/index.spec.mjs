import {
  expect
} from 'chai'

import '#zashiki-react-redux/debug'

import {
  watchDebarkFetch,
  watchDebarkRoute,
  watchDebarkStore,
  watchDebarkSubmit
} from '@modernpoacher/zashiki-react-redux/app/sagas/stages/debark'

describe('@modernpoacher/zashiki-react-redux/app/sagas/stages/debark', () => {
  describe('`watchDebarkFetch`', () => {
    it('is a function', () => {
      expect(watchDebarkFetch)
        .to.be.a('function')
    })
  })

  describe('`watchDebarkRoute`', () => {
    it('is a function', () => {
      expect(watchDebarkRoute)
        .to.be.a('function')
    })
  })

  describe('`watchDebarkStore`', () => {
    it('is a function', () => {
      expect(watchDebarkStore)
        .to.be.a('function')
    })
  })

  describe('`watchDebarkSubmit`', () => {
    it('is a function', () => {
      expect(watchDebarkSubmit)
        .to.be.a('function')
    })
  })
})
