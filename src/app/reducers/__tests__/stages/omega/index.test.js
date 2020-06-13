import omegaReducer, {
  route,
  fetch,
  store,
  query,
  change,
  submit,

  fetchFulfilled,
  storeFulfilled,
  queryFulfilled,
  changeFulfilled,
  submitFulfilled,

  fetchRejected,
  storeRejected,
  queryRejected,
  changeRejected,
  submitRejected
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/omega'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/omega', () => ({
  ROUTE: 'MOCK ROUTE',
  FETCH: 'MOCK FETCH',
  STORE: 'MOCK STORE',
  QUERY: 'MOCK QUERY',
  CHANGE: 'MOCK CHANGE',
  SUBMIT: 'MOCK SUBMIT',

  FETCH_FULFILLED: 'MOCK FETCH FULFILLED',
  STORE_FULFILLED: 'MOCK STORE FULFILLED',
  QUERY_FULFILLED: 'MOCK QUERY FULFILLED',
  CHANGE_FULFILLED: 'MOCK CHANGE FULFILLED',
  SUBMIT_FULFILLED: 'MOCK SUBMIT FULFILLED',

  FETCH_REJECTED: 'MOCK FETCH REJECTED',
  STORE_REJECTED: 'MOCK STORE REJECTED',
  QUERY_REJECTED: 'MOCK QUERY REJECTED',
  CHANGE_REJECTED: 'MOCK CHANGE REJECTED',
  SUBMIT_REJECTED: 'MOCK SUBMIT REJECTED'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/embark', () => ({ ROUTE: 'MOCK EMBARK ROUTE' }))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/debark', () => ({ ROUTE: 'MOCK DEBARK ROUTE' }))

const DEFAULT = {
  status: 'MOCK PENDING'
}

describe('@modernpoacher/zashiki-react-redux/app/reducers/stages/omega', () => {
  describe('`omegaReducer`', () => {
    it('is defined', () => {
      expect(omegaReducer)
        .toBeDefined()
    })
  })

  describe('`route`', () => {
    it('is defined', () => {
      expect(route)
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

  describe('`omegaReducer()`', () => {
    describe('With parameters', () => {
      describe('The action `type` is `ROUTE`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK ROUTE', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `CHANGE`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK CHANGE', history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: { mockKey: 'MOCK VALUE' } } }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', resource: 'MOCK RESOURCE', response: { mockKey: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `SUBMIT`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK SUBMIT', route: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK PENDING', mockKey: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK FETCH', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `STORE`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK STORE', history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: 'MOCK RESPONSE' } }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', resource: 'MOCK RESOURCE' })
        })
      })

      describe('The action `type` is `QUERY`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK QUERY', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `CHANGE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK CHANGE FULFILLED', response: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockKey: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `SUBMIT_FULFILLED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK SUBMIT FULFILLED', response: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockKey: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH_FULFILLED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK FETCH FULFILLED', response: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockKey: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `STORE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK STORE FULFILLED', response: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockKey: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `QUERY_FULFILLED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK QUERY FULFILLED', response: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockKey: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `CHANGE_REJECTED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK CHANGE REJECTED', error: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockKey: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `SUBMIT_REJECTED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK SUBMIT REJECTED', error: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockKey: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `FETCH_REJECTED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK FETCH REJECTED', error: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockKey: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `STORE_REJECTED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK STORE REJECTED', error: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockKey: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `QUERY_REJECTED`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK QUERY REJECTED', error: { mockKey: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockKey: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `EMBARK_ROUTE`', () => {
        it('returns the state', () => {
          expect(omegaReducer(DEFAULT, { type: 'MOCK EMBARK ROUTE', redirect: 'MOCK REDIRECT' }))
            .toEqual({ ...DEFAULT, resource: 'MOCK REDIRECT' })
        })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with default values', () => {
        expect(omegaReducer())
          .toEqual(DEFAULT)
      })
    })
  })

  describe('`route()`', () => {
    it('returns the state', () => {
      expect(route({ ...DEFAULT, response: { mockStateKey: 'MOCK STATE VALUE' } }, { history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
        .toEqual({
          status: 'MOCK PENDING',
          history: 'MOCK HISTORY',
          redirect: 'MOCK REDIRECT',
          response: {
            mockStateKey: 'MOCK STATE VALUE'
          }
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

  describe('`change()`', () => {
    it('returns the state', () => {
      expect(change({ ...DEFAULT, response: { mockStateKey: 'MOCK STATE VALUE' } }, { history: 'MOCK HISTORY', route: { resource: 'MOCK RESOURCE', response: { mockKey: 'MOCK VALUE' } } }))
        .toEqual({
          status: 'MOCK PENDING',
          history: 'MOCK HISTORY',
          resource: 'MOCK RESOURCE',
          response: {
            mockStateKey: 'MOCK STATE VALUE',
            mockKey: 'MOCK VALUE'
          }
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

  describe('`fetchFulfilled()`', () => {
    it('returns the state', () => {
      expect(fetchFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK RESOLVED',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`storeFulfilled()`', () => {
    it('returns the state', () => {
      expect(storeFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK RESOLVED',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`queryFulfilled()`', () => {
    it('returns the state', () => {
      expect(queryFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockKey: 'MOCK VALUE' } }))
        .toEqual({
          status: 'MOCK RESOLVED',
          mockStateField: 'MOCK STATE VALUE',
          mockKey: 'MOCK VALUE'
        })
    })
  })

  describe('`changeFulfilled()`', () => {
    describe('`state` has `alpha`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, alpha: 'MOCK ALPHA' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK RESOLVED',
            alpha: 'MOCK ALPHA',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `definition`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, definition: 'MOCK DEFINITION' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK RESOLVED',
            definition: 'MOCK DEFINITION',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `gears`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, gears: 'MOCK GEARS' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK RESOLVED',
            gears: 'MOCK GEARS',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `resource`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, resource: 'MOCK RESOURCE' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK RESOLVED',
            resource: 'MOCK RESOURCE',
            mockKey: 'MOCK VALUE'
          })
      })
    })

    describe('`state` has `state`', () => {
      it('returns the state', () => {
        expect(submitFulfilled({ ...DEFAULT, state: 'MOCK STATE' }, { response: { mockKey: 'MOCK VALUE' } }))
          .toEqual({
            status: 'MOCK RESOLVED',
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
          status: 'MOCK RESOLVED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
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
            status: 'MOCK REJECTED',
            exception: {
              mockKey: 'MOCK VALUE'
            }
          })
      })
    })
  })
})
