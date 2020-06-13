import debarkReducer, {
  route,
  fetch,
  store,
  submit,

  fetchFulfilled,
  storeFulfilled,
  submitFulfilled,

  fetchRejected,
  storeRejected,
  submitRejected
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/debark'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/debark', () => ({
  ROUTE: 'MOCK ROUTE',
  FETCH: 'MOCK FETCH',
  STORE: 'MOCK STORE',
  SUBMIT: 'MOCK SUBMIT',

  FETCH_FULFILLED: 'MOCK FETCH FULFILLED',
  STORE_FULFILLED: 'MOCK STORE FULFILLED',
  SUBMIT_FULFILLED: 'MOCK SUBMIT FULFILLED',

  FETCH_REJECTED: 'MOCK FETCH REJECTED',
  STORE_REJECTED: 'MOCK STORE REJECTED',
  SUBMIT_REJECTED: 'MOCK SUBMIT REJECTED'
 }))

const DEFAULT = {
  status: 'MOCK PENDING'
}

describe('@modernpoacher/zashiki-react-redux/app/reducers/stages/debark', () => {
  describe('`debarkReducer`', () => {
    it('is defined', () => {
      expect(debarkReducer)
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

  describe('`submitRejected`', () => {
    it('is defined', () => {
      expect(submitRejected)
        .toBeDefined()
    })
  })

  describe('`debarkReducer()`', () => {
    describe('With parameters', () => {
      describe('The action `type` is `ROUTE`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK ROUTE', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `SUBMIT`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK SUBMIT', debark: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK PENDING', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK FETCH', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `STORE`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK STORE', history: 'MOCK HISTORY', route: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK PENDING', history: 'MOCK HISTORY', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `SUBMIT_FULFILLED`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK SUBMIT FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH_FULFILLED`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK FETCH FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `STORE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK STORE FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `SUBMIT_REJECTED`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK SUBMIT REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `FETCH_REJECTED`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK FETCH REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `STORE_REJECTED`', () => {
        it('returns the state', () => {
          expect(debarkReducer(DEFAULT, { type: 'MOCK STORE REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with default values', () => {
        expect(debarkReducer())
          .toEqual(DEFAULT)
      })
    })
  })

  describe('`route()`', () => {
    it('returns the state', () => {
      expect(route({ ...DEFAULT, mockField: 'MOCK VALUE' }, { history: 'MOCK HISTORY', redirect: 'MOCK REDIRECT' }))
        .toEqual({
          status: 'MOCK PENDING',
          mockField: 'MOCK VALUE',
          history: 'MOCK HISTORY',
          redirect: 'MOCK REDIRECT'
        })
    })
  })

  describe('`fetch()`', () => {
    it('returns the state', () => {
      expect(fetch({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { mockActionField: 'MOCK ACTION VALUE' }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`store()`', () => {
    it('returns the state', () => {
      expect(store({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { history: 'MOCK HISTORY', route: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          history: 'MOCK HISTORY',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`submit()`', () => {
    it('returns the state', () => {
      expect(submit({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { history: 'MOCK HISTORY', debark: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          history: 'MOCK HISTORY',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`fetchFulfilled()`', () => {
    it('returns the state', () => {
      expect(fetchFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK RESOLVED',
          mockStateField: 'MOCK STATE VALUE',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`storeFulfilled()`', () => {
    it('returns the state', () => {
      expect(storeFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK RESOLVED',
          mockStateField: 'MOCK STATE VALUE',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`submitFulfilled()`', () => {
    it('returns the state', () => {
      expect(submitFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK RESOLVED',
          mockStateField: 'MOCK STATE VALUE',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`fetchRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(fetchRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            history: 'MOCK HISTORY',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(fetchRejected(DEFAULT, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })
  })

  describe('`storeRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(storeRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            history: 'MOCK HISTORY',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(storeRejected(DEFAULT, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })
  })

  describe('`submitRejected()`', () => {
    describe('`state` has `history`', () => {
      it('returns the state', () => {
        expect(submitRejected({ ...DEFAULT, history: 'MOCK HISTORY' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            history: 'MOCK HISTORY',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `history`', () => {
      it('returns the state', () => {
        expect(submitRejected(DEFAULT, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })
  })

})
