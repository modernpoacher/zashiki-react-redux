import { expect } from 'chai'

import reducer, {
  change,
  changeFulfilled,
  changeRejected,
  fetch,
  fetchFulfilled,
  fetchRejected,
  query,
  queryFulfilled,
  queryRejected,
  store,
  storeFulfilled,
  storeRejected,
  submit,
  submitFulfilled,
  submitRejected
} from '@modernpoacher/zashiki-react-redux/app/reducers/zashiki'

describe('@modernpoacher/zashiki-react-redux/app/reducers/zashiki', () => {
  describe('`reducer`', () => {
    it('is a function', () => {
      expect(reducer)
        .to.be.a('function')
    })
  })

  describe('`change`', () => {
    it('is a function', () => {
      expect(change)
        .to.be.a('function')
    })
  })

  describe('`changeFulfilled`', () => {
    it('is a function', () => {
      expect(changeFulfilled)
        .to.be.a('function')
    })
  })

  describe('`changeRejected`', () => {
    it('is a function', () => {
      expect(changeRejected)
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

  describe('`query`', () => {
    it('is a function', () => {
      expect(query)
        .to.be.a('function')
    })
  })

  describe('`queryFulfilled`', () => {
    it('is a function', () => {
      expect(queryFulfilled)
        .to.be.a('function')
    })
  })

  describe('`queryRejected`', () => {
    it('is a function', () => {
      expect(queryRejected)
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
