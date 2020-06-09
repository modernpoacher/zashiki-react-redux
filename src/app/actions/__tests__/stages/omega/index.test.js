import {
  ROUTE,
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

  omegaRoute,

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
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/omega'

jest.mock('shinkansen-engine/lib/components/pantograph', () => ({
  OMEGA: {
    ROUTE: 'MOCK ROUTE',
    CHANGE: 'MOCK CHANGE',
    SUBMIT: 'MOCK SUBMIT',
    FETCH: 'MOCK FETCH',
    STORE: 'MOCK STORE',
    QUERY: 'MOCK QUERY'
  }
}))

describe('@modernpoacher/zashiki-react-redux/app/actions/stages/omega', () => {
  const MOCK_REDIRECT = {}
  const MOCK_ROUTE = {}
  const MOCK_HISTORY = {}
  const MOCK_RESOURCE = {}
  const MOCK_RESPONSE = {}
  const MOCK_ERROR = {}

  describe('`ROUTE`', () => {
    it('is defined', () => {
      expect(ROUTE)
        .toBe('MOCK ROUTE')
    })
  })

  describe('`CHANGE`', () => {
    it('is defined', () => {
      expect(CHANGE)
        .toBe('MOCK CHANGE')
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

  describe('`QUERY`', () => {
    it('is defined', () => {
      expect(QUERY)
        .toBe('MOCK QUERY')
    })
  })

  describe('`CHANGE_FULFILLED`', () => {
    it('is defined', () => {
      expect(CHANGE_FULFILLED)
        .toBe('MOCK CHANGE_FULFILLED')
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

  describe('`QUERY_FULFILLED`', () => {
    it('is defined', () => {
      expect(QUERY_FULFILLED)
        .toBe('MOCK QUERY_FULFILLED')
    })
  })

  describe('`CHANGE_REJECTED`', () => {
    it('is defined', () => {
      expect(CHANGE_REJECTED)
        .toBe('MOCK CHANGE_REJECTED')
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

  describe('`QUERY_REJECTED`', () => {
    it('is defined', () => {
      expect(QUERY_REJECTED)
        .toBe('MOCK QUERY_REJECTED')
    })
  })

  describe('`omegaRoute`', () => {
    it('is defined', () => {
      expect(omegaRoute)
        .toBeDefined()
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

  describe('`omegaRoute()`', () => {
    it('returns the action', () => {
      expect(omegaRoute(MOCK_REDIRECT, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK ROUTE',
          redirect: MOCK_REDIRECT,
          history: MOCK_HISTORY
        })
    })
  })

  describe('`changeRoute()`', () => {
    it('returns the action', () => {
      expect(changeRoute(MOCK_ROUTE, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK CHANGE',
          route: MOCK_ROUTE,
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

  describe('`queryRoute()`', () => {
    it('returns the action', () => {
      expect(queryRoute())
        .toEqual({
          type: 'MOCK QUERY'
        })
    })
  })

  describe('`changeRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(changeRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'MOCK CHANGE_FULFILLED',
          response: MOCK_RESPONSE
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

  describe('`queryRouteFulfilled()`', () => {
    it('returns the action', () => {
      expect(queryRouteFulfilled(MOCK_RESPONSE))
        .toEqual({
          type: 'MOCK QUERY_FULFILLED',
          response: MOCK_RESPONSE
        })
    })
  })

  describe('`changeRouteRejected()`', () => {
    it('returns the action', () => {
      expect(changeRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'MOCK CHANGE_REJECTED',
          error: MOCK_ERROR
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

  describe('`queryRouteRejected()`', () => {
    it('returns the action', () => {
      expect(queryRouteRejected(MOCK_ERROR))
        .toEqual({
          type: 'MOCK QUERY_REJECTED',
          error: MOCK_ERROR
        })
    })
  })

  describe('`change()`', () => {
    it('returns the `changeRoute` action', () => {
      const MOCK_RESOURCE = {}

      expect(change(MOCK_RESOURCE, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK CHANGE',
          route: {
            resource: MOCK_RESOURCE
          },
          history: MOCK_HISTORY
        })
    })
  })

  describe('`submit()`', () => {
    it('returns the `submitRoute` action', () => {
      expect(submit(MOCK_RESOURCE, MOCK_RESPONSE, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK SUBMIT',
          route: {
            resource: MOCK_RESOURCE,
            response: MOCK_RESPONSE
          },
          history: MOCK_HISTORY
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
      expect(store(MOCK_RESOURCE, MOCK_RESPONSE, MOCK_HISTORY))
        .toEqual({
          type: 'MOCK STORE',
          route: {
            resource: MOCK_RESOURCE,
            response: MOCK_RESPONSE
          },
          history: MOCK_HISTORY
        })
    })
  })
})
