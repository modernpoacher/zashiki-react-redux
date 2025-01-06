import {
  expect
} from 'chai'

import reducer, {
  initialise,
  route,
  fetch,
  fetchFulfilled,
  fetchRejected,
  store,
  storeFulfilled,
  storeRejected,
  submit,
  submitFulfilled,
  submitRejected
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/confirm'

describe('@modernpoacher/zashiki-react-redux/app/reducers/stages/confirm', () => {
  describe('`reducer`', () => {
    it('is a function', () => {
      expect(reducer)
        .to.be.a('function')
    })
  })

  describe('`initialise`', () => {
    it('is a function', () => {
      expect(initialise)
        .to.be.a('function')
    })
  })

  describe('`route`', () => {
    it('is a function', () => {
      expect(route)
        .to.be.a('function')
    })
  })

  describe('`fetch`', () => {
    it('is a function', () => {
      expect(fetch)
        .to.be.a('function')
    })
  })

  describe('`fetchFulfilled`', () => {
    it('is a function', () => {
      expect(fetchFulfilled)
        .to.be.a('function')
    })
  })

  describe('`fetchRejected`', () => {
    it('is a function', () => {
      expect(fetchRejected)
        .to.be.a('function')
    })
  })

  describe('`store`', () => {
    it('is a function', () => {
      expect(store)
        .to.be.a('function')
    })
  })

  describe('`storeFulfilled`', () => {
    it('is a function', () => {
      expect(storeFulfilled)
        .to.be.a('function')
    })
  })

  describe('`storeRejected`', () => {
    it('is a function', () => {
      expect(storeRejected)
        .to.be.a('function')
    })
  })

  describe('`submit`', () => {
    it('is a function', () => {
      expect(submit)
        .to.be.a('function')
    })
  })

  describe('`submitFulfilled`', () => {
    it('is a function', () => {
      expect(submitFulfilled)
        .to.be.a('function')
    })
  })

  describe('`submitRejected`', () => {
    it('is a function', () => {
      expect(submitRejected)
        .to.be.a('function')
    })
  })
})
