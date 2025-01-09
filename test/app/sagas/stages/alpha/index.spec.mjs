import {
  expect
} from 'chai'

import {
  watchAlphaFetch,
  watchAlphaMount,
  watchAlphaQuery,
  watchAlphaRoute,
  watchAlphaStore,
  watchAlphaSubmit
} from '@modernpoacher/zashiki-react-redux/app/sagas/stages/alpha'

describe('@modernpoacher/zashiki-react-redux/app/sagas/stages/alpha', () => {
  describe('`watchAlphaFetch`', () => {
    it('is a function', () => {
      expect(watchAlphaFetch)
        .to.be.a('function')
    })
  })

  describe('`watchAlphaMount`', () => {
    it('is a function', () => {
      expect(watchAlphaMount)
        .to.be.a('function')
    })
  })

  describe('`watchAlphaQuery`', () => {
    it('is a function', () => {
      expect(watchAlphaQuery)
        .to.be.a('function')
    })
  })

  describe('`watchAlphaRoute`', () => {
    it('is a function', () => {
      expect(watchAlphaRoute)
        .to.be.a('function')
    })
  })

  describe('`watchAlphaStore`', () => {
    it('is a function', () => {
      expect(watchAlphaStore)
        .to.be.a('function')
    })
  })

  describe('`watchAlphaSubmit`', () => {
    it('is a function', () => {
      expect(watchAlphaSubmit)
        .to.be.a('function')
    })
  })
})
