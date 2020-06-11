import alphaReducer, {
  route,
  change,
  submit,
  fetch,
  store,
  query,

  changeFulfilled,
  submitFulfilled,
  fetchFulfilled,
  storeFulfilled,
  queryFulfilled,

  changeRejected,
  submitRejected,
  fetchRejected,
  storeRejected,
  queryRejected
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/alpha'

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  PENDING: 'MOCK PENDING',
  FAILURE: 'MOCK FAILURE',
  COMPLETE: 'MOCK COMPLETE'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/alpha', () => ({
  ROUTE: 'MOCK ROUTE',
  CHANGE: 'MOCK CHANGE',
  SUBMIT: 'MOCK SUBMIT',
  FETCH: 'MOCK FETCH',
  STORE: 'MOCK STORE',
  QUERY: 'MOCK QUERY',

  CHANGE_FULFILLED: 'MOCK CHANGE FULFILLED',
  SUBMIT_FULFILLED: 'MOCK SUBMIT FULFILLED',
  FETCH_FULFILLED: 'MOCK FETCH FULFILLED',
  STORE_FULFILLED: 'MOCK STORE FULFILLED',
  QUERY_FULFILLED: 'MOCK QUERY FULFILLED',

  CHANGE_REJECTED: 'MOCK CHANGE REJECTED',
  SUBMIT_REJECTED: 'MOCK SUBMIT REJECTED',
  FETCH_REJECTED: 'MOCK FETCH REJECTED',
  STORE_REJECTED: 'MOCK STORE REJECTED',
  QUERY_REJECTED: 'MOCK QUERY REJECTED'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/embark', () => ({ ROUTE: 'MOCK EMBARK ROUTE' }))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/debark', () => ({ ROUTE: 'MOCK DEBARK ROUTE' }))

const DEFAULT = {
  status: 'MOCK PENDING'
}

describe('@modernpoacher/zashiki-react-redux/app/reducers/stages/alpha', () => {
  describe('`alphaReducer`', () => {
    it('is defined', () => {
      expect(alphaReducer)
        .toBeDefined()
    })
  })

  describe('`route`', () => {
    it('is defined', () => {
      expect(route)
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

  describe('`query`', () => {
    it('is defined', () => {
      expect(query)
        .toBeDefined()
    })
  })

  describe('`changeFulfilled`', () => {
    it('is defined', () => {
      expect(changeFulfilled)
        .toBeDefined()
    })
  })

  describe('`submitFulfilled`', () => {
    it('is defined', () => {
      expect(submitFulfilled)
        .toBeDefined()
    })
  })

  describe('`fetchFulfilled`', () => {
    it('is defined', () => {
      expect(fetchFulfilled)
        .toBeDefined()
    })
  })

  describe('`storeFulfilled`', () => {
    it('is defined', () => {
      expect(storeFulfilled)
        .toBeDefined()
    })
  })

  describe('`queryFulfilled`', () => {
    it('is defined', () => {
      expect(queryFulfilled)
        .toBeDefined()
    })
  })

  describe('`changeRejected`', () => {
    it('is defined', () => {
      expect(changeRejected)
        .toBeDefined()
    })
  })

  describe('`submitRejected`', () => {
    it('is defined', () => {
      expect(submitRejected)
        .toBeDefined()
    })
  })

  describe('`fetchRejected`', () => {
    it('is defined', () => {
      expect(fetchRejected)
        .toBeDefined()
    })
  })

  describe('`storeRejected`', () => {
    it('is defined', () => {
      expect(storeRejected)
        .toBeDefined()
    })
  })

  describe('`queryRejected`', () => {
    it('is defined', () => {
      expect(queryRejected)
        .toBeDefined()
    })
  })

  describe('`alphaReducer()`', () => {
    describe('With parameters', () => {
      describe('The action `type` is `ROUTE`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK ROUTE', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ ...DEFAULT, history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `CHANGE`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK CHANGE', history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: 'MOCK RESPONSE' } }))
            .toEqual({ ...DEFAULT, history: 'MOCK HISTORY', omega: [] })
        })
      })

      describe('The action `type` is `SUBMIT`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK SUBMIT', route: { mockField: 'MOCK VALUE' } }))
            .toEqual({ ...DEFAULT, mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK FETCH', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ ...DEFAULT, history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `STORE`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK STORE', history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: 'MOCK RESPONSE' } }))
            .toEqual({ ...DEFAULT, history: 'MOCK HISTORY', resource: 'MOCK RESOURCE' })
        })
      })

      describe('The action `type` is `QUERY`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK QUERY', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ ...DEFAULT, history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `CHANGE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK CHANGE FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ ...DEFAULT, mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `SUBMIT_FULFILLED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK SUBMIT FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ ...DEFAULT, mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH_FULFILLED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK FETCH FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ ...DEFAULT, mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `STORE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK STORE FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ ...DEFAULT, mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `QUERY_FULFILLED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK QUERY FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ ...DEFAULT, mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `CHANGE_REJECTED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK CHANGE REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK FAILURE', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `SUBMIT_REJECTED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK SUBMIT REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK FAILURE', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `FETCH_REJECTED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK FETCH REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK FAILURE', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `STORE_REJECTED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK STORE REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK FAILURE', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `QUERY_REJECTED`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK QUERY REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK FAILURE', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `EMBARK_ROUTE`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK EMBARK ROUTE', redirect: 'MOCK REDIRECT' }))
            .toEqual({ ...DEFAULT, resource: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `DEBARK_ROUTE`', () => {
        it('returns the state', () => {
          expect(alphaReducer(DEFAULT, { type: 'MOCK DEBARK ROUTE' }))
            .toEqual({ ...DEFAULT, status: 'MOCK COMPLETE' })
        })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with default values', () => {
        expect(alphaReducer())
          .toEqual(DEFAULT)
      })
    })
  })

  describe('`route()`', () => {
    it('returns the state', () => {
      expect(route({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          history: 'MOCK HISTORY',
          redirect: 'MOCK REDIRECT'
        })
    })
  })

  describe('`fetch()`', () => {
    it('returns the state', () => {
      expect(fetch({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { mockKey: 'MOCK VALUE' }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`store()`', () => {
    it('returns the state', () => {
      expect(store({ ...DEFAULT, response: 'MOCK STATE RESPONSE' }, { history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: 'MOCK RESPONSE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          response: 'MOCK STATE RESPONSE',
          history: 'MOCK HISTORY',
          resource: 'MOCK RESOURCE'
        })
    })
  })

  describe('`change()`', () => {
    it('returns the state', () => {
      expect(change({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: 'MOCK RESPONSE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          history: 'MOCK HISTORY',
          omega: []
        })
    })
  })

  describe('`submit()`', () => {
    it('returns the state', () => {
      expect(submit({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { history: 'MOCK HISTORY', route: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          history: 'MOCK HISTORY',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`query()`', () => {
    it('returns the state', () => {
      expect(query({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { mockKey: 'MOCK VALUE' }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`fetchFulfilled()`', () => {
    it('returns the state', () => {
      expect(fetchFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`storeFulfilled()`', () => {
    it('returns the state', () => {
      expect(storeFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`queryFulfilled()`', () => {
    it('returns the state', () => {
      expect(queryFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`changeFulfilled()`', () => {
    describe('`state` has `omega`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, omega: 'MOCK OMEGA' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK PENDING',
            omega: 'MOCK OMEGA',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `definitions`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, definitions: 'MOCK DEFINITIONS' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK PENDING',
            definitions: 'MOCK DEFINITIONS',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `gears`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, gears: 'MOCK GEARS' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK PENDING',
            gears: 'MOCK GEARS',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `resource`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, resource: 'MOCK RESOURCE' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK PENDING',
            resource: 'MOCK RESOURCE',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `state`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, state: 'MOCK STATE' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK PENDING',
            state: 'MOCK STATE',
            mockKey: 'MOCK VALUE'
          })
      })
    })
  })

  describe('`submitFulfilled()`', () => {
    it('returns the state', () => {
      expect(submitFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`fetchRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(fetchRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            history: 'MOCK HISTORY',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(fetchRejected(DEFAULT, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })
  })

  describe('`storeRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(storeRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            history: 'MOCK HISTORY',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(storeRejected(DEFAULT, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })
  })

  describe('`queryRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(queryRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            history: 'MOCK HISTORY',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(queryRejected(DEFAULT, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })
  })

  describe('`changeRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(changeRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            history: 'MOCK HISTORY',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(changeRejected(DEFAULT, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })
  })

  describe('`submitRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(submitRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            history: 'MOCK HISTORY',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(submitRejected(DEFAULT, { error: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })
  })
})
