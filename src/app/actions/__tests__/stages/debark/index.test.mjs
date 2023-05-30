import {
  ROUTE,
  FETCH,
  STORE,
  SUBMIT,

  FETCH_FULFILLED,
  STORE_FULFILLED,
  SUBMIT_FULFILLED,

  FETCH_REJECTED,
  STORE_REJECTED,
  SUBMIT_REJECTED,

  debarkRoute,

  fetchRoute,
  storeRoute,
  submitState,

  fetchRouteFulfilled,
  storeRouteFulfilled,
  submitStateFulfilled,

  fetchRouteRejected,
  storeRouteRejected,
  submitStateRejected,

  fetch,
  store,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/debark'

jest.mock('shinkansen-engine/components/pantograph', () => ({
  DEBARK: {
    ROUTE: 'MOCK ROUTE',
    FETCH: 'MOCK FETCH',
    STORE: 'MOCK STORE',
    SUBMIT: 'MOCK SUBMIT'
  }
}))

describe('@modernpoacher/zashiki-react-redux/app/actions/stages/debark', () => {
  const MOCK_REDIRECT = {}
  const MOCK_ROUTE = {}
  const MOCK_ROUTER = {}
  const MOCK_RESPONSE = {}
  const MOCK_ERROR = {}

  describe('`ROUTE`', () => {
    it('is defined', () => {
      expect(ROUTE)
        .toBe('MOCK ROUTE')
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

  describe('`SUBMIT`', () => {
    it('is defined', () => {
      expect(SUBMIT)
        .toBe('MOCK SUBMIT')
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

  describe('`SUBMIT_FULFILLED`', () => {
    it('is defined', () => {
      expect(SUBMIT_FULFILLED)
        .toBe('MOCK SUBMIT_FULFILLED')
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

  describe('`SUBMIT_REJECTED`', () => {
    it('is defined', () => {
      expect(SUBMIT_REJECTED)
        .toBe('MOCK SUBMIT_REJECTED')
    })
  })

  describe('`debarkRoute`', () => {
    it('is defined', () => {
      expect(debarkRoute)
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

  describe('`submit`', () => {
    it('is defined', () => {
      expect(submit)
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

  describe('`submitState`', () => {
    it('is defined', () => {
      expect(submitState)
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

  describe('`submitStateFulfilled`', () => {
    it('is defined', () => {
      expect(submitStateFulfilled)
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

  describe('`submitStateRejected`', () => {
    it('is defined', () => {
      expect(submitStateRejected)
        .toBeDefined()
    })
  })

  describe('`debarkRoute()`', () => {
    it('returns the action', () => {
      expect(debarkRoute(MOCK_REDIRECT, MOCK_ROUTER))
        .toEqual({
          type: 'MOCK ROUTE',
          redirect: MOCK_REDIRECT,
          router: MOCK_ROUTER
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
      expect(storeRoute(MOCK_ROUTE, MOCK_ROUTER))
        .toEqual({
          type: 'MOCK STORE',
          route: MOCK_ROUTE,
          router: MOCK_ROUTER
        })
    })
  })

  describe('`submitState()`', () => {
    it('returns the action', () => {
      expect(submitState(MOCK_ROUTE, MOCK_ROUTER))
        .toEqual({
          type: 'MOCK SUBMIT',
          debark: MOCK_ROUTE,
          router: MOCK_ROUTER
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

  describe('`submitStateFulfilled()`', () => {
    it('returns the action', () => {
      expect(submitStateFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'MOCK SUBMIT_FULFILLED',
          response: MOCK_RESPONSE
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

  describe('`submitStateRejected()`', () => {
    it('returns the action', () => {
      expect(submitStateRejected(MOCK_ERROR))
        .toEqual({
          type: 'MOCK SUBMIT_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`fetch()`', () => {
    it('returns the `fetchRoute` action', () => {
      expect(fetch())
        .toEqual({
          type: 'MOCK FETCH'
        })
    })
  })

  describe('`store()`', () => {
    it('returns the `storeRoute` action', () => {
      expect(store(MOCK_RESPONSE, MOCK_ROUTER))
        .toEqual({
          type: 'MOCK STORE',
          route: {
            response: MOCK_RESPONSE
          },
          router: MOCK_ROUTER
        })
    })
  })

  describe('`submit()`', () => {
    it('returns the `submitState` action', () => {
      expect(submit(MOCK_ROUTE, MOCK_ROUTER))
        .toEqual({
          type: 'MOCK SUBMIT',
          debark: MOCK_ROUTE,
          router: MOCK_ROUTER
        })
    })
  })
})
