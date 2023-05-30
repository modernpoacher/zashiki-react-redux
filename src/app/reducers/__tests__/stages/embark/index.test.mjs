import embarkReducer, {
  route,
  fetch,
  store,
  change,
  submit,

  fetchFulfilled,
  storeFulfilled,
  changeFulfilled,
  submitFulfilled,

  fetchRejected,
  storeRejected,
  changeRejected,
  submitRejected
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/embark'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  RESOLVED: 'MOCK RESOLVED',
  REJECTED: 'MOCK REJECTED',
  PENDING: 'MOCK PENDING'
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/actions/stages/embark', () => ({
  ROUTE: 'MOCK ROUTE',
  FETCH: 'MOCK FETCH',
  STORE: 'MOCK STORE',
  CHANGE: 'MOCK CHANGE',
  SUBMIT: 'MOCK SUBMIT',

  FETCH_FULFILLED: 'MOCK FETCH FULFILLED',
  STORE_FULFILLED: 'MOCK STORE FULFILLED',
  CHANGE_FULFILLED: 'MOCK CHANGE FULFILLED',
  SUBMIT_FULFILLED: 'MOCK SUBMIT FULFILLED',

  FETCH_REJECTED: 'MOCK FETCH REJECTED',
  STORE_REJECTED: 'MOCK STORE REJECTED',
  CHANGE_REJECTED: 'MOCK CHANGE REJECTED',
  SUBMIT_REJECTED: 'MOCK SUBMIT REJECTED'
}))

const DEFAULT = {
  status: 'MOCK PENDING'
}

describe('@modernpoacher/zashiki-react-redux/app/reducers/stages/embark', () => {
  describe('`embarkReducer`', () => {
    it('is defined', () => {
      expect(embarkReducer)
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

  describe('`submitFulfilled`', () => {
    it('is defined', () => {
      expect(submitFulfilled)
        .toBeDefined()
    })
  })

  describe('`changeFulfilled`', () => {
    it('is defined', () => {
      expect(changeFulfilled)
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

  describe('`embarkReducer()`', () => {
    describe('With parameters', () => {
      describe('The action `type` is `ROUTE`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK ROUTE', router: 'MOCK ROUTER', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', router: 'MOCK ROUTER', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `FETCH`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK FETCH', router: 'MOCK ROUTER', redirect: 'MOCK REDIRECT' }))
            .toEqual({ status: 'MOCK PENDING', router: 'MOCK ROUTER', redirect: 'MOCK REDIRECT' })
        })
      })

      describe('The action `type` is `STORE`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK STORE', router: 'MOCK ROUTER', route: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK PENDING', router: 'MOCK ROUTER', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `CHANGE`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK CHANGE', embark: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK PENDING', response: { mockField: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `SUBMIT`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK SUBMIT', embark: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK PENDING', response: { mockField: 'MOCK VALUE' } })
        })
      })

      describe('The action `type` is `FETCH_FULFILLED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK FETCH FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `STORE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK STORE FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `CHANGE_FULFILLED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK CHANGE FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `SUBMIT_FULFILLED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK SUBMIT FULFILLED', response: { mockField: 'MOCK VALUE' } }))
            .toEqual({ status: 'MOCK RESOLVED', mockField: 'MOCK VALUE' })
        })
      })

      describe('The action `type` is `FETCH_REJECTED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK FETCH REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `STORE_REJECTED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK STORE REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `CHANGE_REJECTED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK CHANGE REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })

      describe('The action `type` is `SUBMIT_REJECTED`', () => {
        it('returns the state', () => {
          expect(embarkReducer({ ...DEFAULT }, { type: 'MOCK SUBMIT REJECTED', error: { mockField: 'MOCK FIELD' } }))
            .toEqual({ status: 'MOCK REJECTED', exception: { mockField: 'MOCK FIELD' } })
        })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with default values', () => {
        expect(embarkReducer())
          .toEqual(DEFAULT)
      })
    })
  })

  describe('`route()`', () => {
    it('returns the state', () => {
      expect(route({ ...DEFAULT, mockField: 'MOCK VALUE' }, { router: 'MOCK ROUTER', redirect: 'MOCK REDIRECT' }))
        .toEqual({
          status: 'MOCK PENDING',
          mockField: 'MOCK VALUE',
          router: 'MOCK ROUTER',
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
      expect(store({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { router: 'MOCK ROUTER', route: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          router: 'MOCK ROUTER',
          mockActionField: 'MOCK ACTION VALUE'
        })
    })
  })

  describe('`change()`', () => {
    it('returns the state', () => {
      expect(change({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { router: 'MOCK ROUTER', embark: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          router: 'MOCK ROUTER',
          response: {
            mockActionField: 'MOCK ACTION VALUE'
          }
        })
    })
  })

  describe('`submit()`', () => {
    it('returns the state', () => {
      expect(submit({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { router: 'MOCK ROUTER', embark: { mockActionField: 'MOCK ACTION VALUE' } }))
        .toEqual({
          status: 'MOCK PENDING',
          mockStateField: 'MOCK STATE VALUE',
          router: 'MOCK ROUTER',
          response: {
            mockActionField: 'MOCK ACTION VALUE'
          }
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

  describe('`changeFulfilled()`', () => {
    it('returns the state', () => {
      expect(changeFulfilled({ ...DEFAULT, mockStateField: 'MOCK STATE VALUE' }, { response: { mockActionField: 'MOCK ACTION VALUE' } }))
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
    describe('`state` has `router`', () => {
      it('returns the state', () => {
        expect(fetchRejected({ ...DEFAULT, router: 'MOCK ROUTER' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            router: 'MOCK ROUTER',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `router`', () => {
      it('returns the state', () => {
        expect(fetchRejected({ ...DEFAULT }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
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
    describe('`state` has `router`', () => {
      it('returns the state', () => {
        expect(storeRejected({ ...DEFAULT, router: 'MOCK ROUTER' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            router: 'MOCK ROUTER',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `router`', () => {
      it('returns the state', () => {
        expect(storeRejected({ ...DEFAULT }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
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
    describe('`state` has `router`', () => {
      it('returns the state', () => {
        expect(submitRejected({ ...DEFAULT, router: 'MOCK ROUTER' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            router: 'MOCK ROUTER',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `router`', () => {
      it('returns the state', () => {
        expect(submitRejected({ ...DEFAULT }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })
  })

  describe('`changeRejected()`', () => {
    describe('`state` has `router`', () => {
      it('returns the state', () => {
        expect(changeRejected({ ...DEFAULT, router: 'MOCK ROUTER' }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
            router: 'MOCK ROUTER',
            exception: {
              mockActionField: 'MOCK ACTION VALUE'
            }
          })
      })
    })

    describe('`state` does not have `router`', () => {
      it('returns the state', () => {
        expect(submitRejected({ ...DEFAULT }, { error: { mockActionField: 'MOCK ACTION VALUE' } }))
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
