import {
  ERROR,
  CHANGE,
  SUBMIT,
  FETCH,
  STORE,
  QUERY,

  CHANGE_FULFILLED,
  SUBMIT_FULFILLED,
  FETCH_FULFILLED,
  STORE_FULFILLED,
  QUERY_FULFILLED,

  CHANGE_REJECTED,
  SUBMIT_REJECTED,
  FETCH_REJECTED,
  STORE_REJECTED,
  QUERY_REJECTED,

  changeRoute,
  submitRoute,
  fetchRoute,
  storeRoute,
  queryRoute,

  changeRouteFulfilled,
  submitRouteFulfilled,
  fetchRouteFulfilled,
  storeRouteFulfilled,
  queryRouteFulfilled,

  changeRouteRejected,
  submitRouteRejected,
  fetchRouteRejected,
  storeRouteRejected,
  queryRouteRejected,

  change,
  submit,
  fetch,
  store
} from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

const MOCK_ROUTE = {}
const MOCK_HISTORY = {}
const MOCK_RESPONSE = {}
const MOCK_ERROR = {}

describe('@modernpoacher/zashiki-react-redux/app/actions/zashiki', () => {
  describe('`ERROR`', () => {
    it('is defined', () => {
      expect(ERROR)
        .toBe('ZASHIKI_ERROR')
    })
  })

  describe('`CHANGE`', () => {
    it('is defined', () => {
      expect(CHANGE)
        .toBe('ZASHIKI_CHANGE')
    })
  })

  describe('`SUBMIT`', () => {
    it('is defined', () => {
      expect(SUBMIT)
        .toBe('ZASHIKI_SUBMIT')
    })
  })

  describe('`FETCH`', () => {
    it('is defined', () => {
      expect(FETCH)
        .toBe('ZASHIKI_FETCH')
    })
  })

  describe('`STORE`', () => {
    it('is defined', () => {
      expect(STORE)
        .toBe('ZASHIKI_STORE')
    })
  })

  describe('`QUERY`', () => {
    it('is defined', () => {
      expect(QUERY)
        .toBe('ZASHIKI_QUERY')
    })
  })

  describe('`CHANGE_FULFILLED`', () => {
    it('is defined', () => {
      expect(CHANGE_FULFILLED)
        .toBe('ZASHIKI_CHANGE_FULFILLED')
    })
  })

  describe('`SUBMIT_FULFILLED`', () => {
    it('is defined', () => {
      expect(SUBMIT_FULFILLED)
        .toBe('ZASHIKI_SUBMIT_FULFILLED')
    })
  })

  describe('`FETCH_FULFILLED`', () => {
    it('is defined', () => {
      expect(FETCH_FULFILLED)
        .toBe('ZASHIKI_FETCH_FULFILLED')
    })
  })

  describe('`STORE_FULFILLED`', () => {
    it('is defined', () => {
      expect(STORE_FULFILLED)
        .toBe('ZASHIKI_STORE_FULFILLED')
    })
  })

  describe('`QUERY_FULFILLED`', () => {
    it('is defined', () => {
      expect(QUERY_FULFILLED)
        .toBe('ZASHIKI_QUERY_FULFILLED')
    })
  })

  describe('`CHANGE_REJECTED`', () => {
    it('is defined', () => {
      expect(CHANGE_REJECTED)
        .toBe('ZASHIKI_CHANGE_REJECTED')
    })
  })

  describe('`SUBMIT_REJECTED`', () => {
    it('is defined', () => {
      expect(SUBMIT_REJECTED)
        .toBe('ZASHIKI_SUBMIT_REJECTED')
    })
  })

  describe('`FETCH_REJECTED`', () => {
    it('is defined', () => {
      expect(FETCH_REJECTED)
        .toBe('ZASHIKI_FETCH_REJECTED')
    })
  })

  describe('`STORE_REJECTED`', () => {
    it('is defined', () => {
      expect(STORE_REJECTED)
        .toBe('ZASHIKI_STORE_REJECTED')
    })
  })

  describe('`QUERY_REJECTED`', () => {
    it('is defined', () => {
      expect(QUERY_REJECTED)
        .toBe('ZASHIKI_QUERY_REJECTED')
    })
  })

  describe('`change`', () => {
    it('is defined', () => {
      expect(change)
        .toBeDefined()
    })
  })

  describe('`submit`', () => {
    it('is defined', () => {
      expect(submit)
        .toBeDefined()
    })
  })

  describe('`fetch`', () => {
    it('is defined', () => {
      expect(fetch)
        .toBeDefined()
    })
  })

  describe('`store`', () => {
    it('is defined', () => {
      expect(store)
        .toBeDefined()
    })
  })

  describe('`changeRoute`', () => {
    it('is defined', () => {
      expect(changeRoute)
        .toBeDefined()
    })
  })

  describe('`submitRoute`', () => {
    it('is defined', () => {
      expect(submitRoute)
        .toBeDefined()
    })
  })

  describe('`fetchRoute`', () => {
    it('is defined', () => {
      expect(fetchRoute)
        .toBeDefined()
    })
  })

  describe('`storeRoute`', () => {
    it('is defined', () => {
      expect(storeRoute)
        .toBeDefined()
    })
  })

  describe('`queryRoute`', () => {
    it('is defined', () => {
      expect(queryRoute)
        .toBeDefined()
    })
  })

  describe('`changeRouteFulfilled`', () => {
    it('is defined', () => {
      expect(changeRouteFulfilled)
        .toBeDefined()
    })
  })

  describe('`submitRouteFulfilled`', () => {
    it('is defined', () => {
      expect(submitRouteFulfilled)
        .toBeDefined()
    })
  })

  describe('`fetchRouteFulfilled`', () => {
    it('is defined', () => {
      expect(fetchRouteFulfilled)
        .toBeDefined()
    })
  })

  describe('`storeRouteFulfilled`', () => {
    it('is defined', () => {
      expect(storeRouteFulfilled)
        .toBeDefined()
    })
  })

  describe('`queryRouteFulfilled`', () => {
    it('is defined', () => {
      expect(queryRouteFulfilled)
        .toBeDefined()
    })
  })

  describe('`changeRouteRejected`', () => {
    it('is defined', () => {
      expect(changeRouteRejected)
        .toBeDefined()
    })
  })

  describe('`submitRouteRejected`', () => {
    it('is defined', () => {
      expect(submitRouteRejected)
        .toBeDefined()
    })
  })

  describe('`fetchRouteRejected`', () => {
    it('is defined', () => {
      expect(fetchRouteRejected)
        .toBeDefined()
    })
  })

  describe('`storeRouteRejected`', () => {
    it('is defined', () => {
      expect(storeRouteRejected)
        .toBeDefined()
    })
  })

  describe('`queryRouteRejected`', () => {
    it('is defined', () => {
      expect(queryRouteRejected)
        .toBeDefined()
    })
  })

  describe('`changeRoute()`', () => {
    it('returns the action', () => {
      expect(changeRoute(MOCK_ROUTE, MOCK_HISTORY))
        .toEqual({
          type: 'ZASHIKI_CHANGE',
          route: MOCK_ROUTE,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`submitRoute()`', () => {
    it('returns the action', () => {
      expect(submitRoute(MOCK_ROUTE, MOCK_HISTORY))
        .toEqual({
          type: 'ZASHIKI_SUBMIT',
          route: MOCK_ROUTE,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`fetchRoute()`', () => {
    it('returns the action', () => {
      expect(fetchRoute())
        .toEqual({
          type: 'ZASHIKI_FETCH'
        })
    })
  })

  describe('`storeRoute()`', () => {
    it('returns the action', () => {
      expect(storeRoute(MOCK_ROUTE, MOCK_HISTORY))
        .toEqual({
          type: 'ZASHIKI_STORE',
          route: MOCK_ROUTE,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`queryRoute()`', () => {
    it('returns the action', () => {
      expect(queryRoute())
        .toEqual({
          type: 'ZASHIKI_QUERY'
        })
    })
  })

  describe('`changeRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(changeRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'ZASHIKI_CHANGE_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`submitRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(submitRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'ZASHIKI_SUBMIT_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`fetchRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(fetchRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'ZASHIKI_FETCH_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`storeRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(storeRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'ZASHIKI_STORE_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`queryRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(queryRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'ZASHIKI_QUERY_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`changeRouteRejected()`', () => {
    it('returns the action', () => {
      expect(changeRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'ZASHIKI_CHANGE_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`submitRouteRejected()`', () => {
    it('returns the action', () => {
      expect(submitRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'ZASHIKI_SUBMIT_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`fetchRouteRejected()`', () => {
    it('returns the action', () => {
      expect(fetchRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'ZASHIKI_FETCH_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`storeRouteRejected()`', () => {
    it('returns the action', () => {
      expect(storeRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'ZASHIKI_STORE_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`queryRouteRejected()`', () => {
    it('returns the action', () => {
      expect(queryRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'ZASHIKI_QUERY_REJECTED',
          error: MOCK_ERROR
        })
    })
  })
})
