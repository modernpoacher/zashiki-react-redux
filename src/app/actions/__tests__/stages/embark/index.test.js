import {
  ROUTE,
  SUBMIT,
  FETCH,
  STORE,

  SUBMIT_FULFILLED,
  FETCH_FULFILLED,
  STORE_FULFILLED,

  SUBMIT_REJECTED,
  FETCH_REJECTED,
  STORE_REJECTED,

  embarkRoute,

  submitRoute,
  fetchRoute,
  storeRoute,

  submitRouteFulfilled,
  fetchRouteFulfilled,
  storeRouteFulfilled,

  submitRouteRejected,
  fetchRouteRejected,
  storeRouteRejected,

  submit,
  fetch,
  store
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

jest.mock('shinkansen-pantograph', () => ({
  Pantograph: {
    EMBARK: {
      ROUTE: 'MOCK ROUTE',
      CHANGE: 'MOCK CHANGE',
      SUBMIT: 'MOCK SUBMIT',
      FETCH: 'MOCK FETCH',
      STORE: 'MOCK STORE',
      QUERY: 'MOCK QUERY'
    }
  }
}))

const MOCK_REDIRECT = {}
const MOCK_ROUTE = {}
const MOCK_HISTORY = {}
const MOCK_RESPONSE = {}
const MOCK_ERROR = {}

describe('@modernpoacher/zashiki-react-redux/app/actions/stages/embark', () => {
  describe('`ROUTE`', () => {
    it('is defined', () => {
      expect(ROUTE)
        .toBe('MOCK ROUTE')
    })
  })

  describe('`SUBMIT`', () => {
    it('is defined', () => {
      expect(SUBMIT)
        .toBe('MOCK SUBMIT')
    })
  })

  describe('`FETCH`', () => {
    it('is defined', () => {
      expect(FETCH)
        .toBe('MOCK FETCH')
    })
  })

  describe('`STORE`', () => {
    it('is defined', () => {
      expect(STORE)
        .toBe('MOCK STORE')
    })
  })

  describe('`SUBMIT_FULFILLED`', () => {
    it('is defined', () => {
      expect(SUBMIT_FULFILLED)
        .toBe('MOCK SUBMIT_FULFILLED')
    })
  })

  describe('`FETCH_FULFILLED`', () => {
    it('is defined', () => {
      expect(FETCH_FULFILLED)
        .toBe('MOCK FETCH_FULFILLED')
    })
  })

  describe('`STORE_FULFILLED`', () => {
    it('is defined', () => {
      expect(STORE_FULFILLED)
        .toBe('MOCK STORE_FULFILLED')
    })
  })

  describe('`SUBMIT_REJECTED`', () => {
    it('is defined', () => {
      expect(SUBMIT_REJECTED)
        .toBe('MOCK SUBMIT_REJECTED')
    })
  })

  describe('`FETCH_REJECTED`', () => {
    it('is defined', () => {
      expect(FETCH_REJECTED)
        .toBe('MOCK FETCH_REJECTED')
    })
  })

  describe('`STORE_REJECTED`', () => {
    it('is defined', () => {
      expect(STORE_REJECTED)
        .toBe('MOCK STORE_REJECTED')
    })
  })

  describe('`embarkRoute`', () => {
    it('is defined', () => {
      expect(embarkRoute)
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

  describe('`embarkRoute()`', () => {
    it('returns the action', () => {
      expect(embarkRoute(MOCK_REDIRECT, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK ROUTE',
          redirect: MOCK_REDIRECT,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`submitRoute()`', () => {
    it('returns the action', () => {
      expect(submitRoute(MOCK_ROUTE, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK SUBMIT',
          route: MOCK_ROUTE,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`fetchRoute()`', () => {
    it('returns the action', () => {
      expect(fetchRoute())
        .toEqual({
          type: 'MOCK FETCH'
        })
    })
  })

  describe('`storeRoute()`', () => {
    it('returns the action', () => {
      expect(storeRoute(MOCK_ROUTE, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK STORE',
          route: MOCK_ROUTE,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`submitRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(submitRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'MOCK SUBMIT_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`fetchRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(fetchRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'MOCK FETCH_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`storeRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(storeRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'MOCK STORE_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`submitRouteRejected()`', () => {
    it('returns the action', () => {
      expect(submitRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'MOCK SUBMIT_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`fetchRouteRejected()`', () => {
    it('returns the action', () => {
      expect(fetchRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'MOCK FETCH_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`storeRouteRejected()`', () => {
    it('returns the action', () => {
      expect(storeRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'MOCK STORE_REJECTED',
          error: MOCK_ERROR
        })
    })
  })
})
