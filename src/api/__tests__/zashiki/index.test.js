import {
  changeRoute,
  fetchRoute,
  storeRoute,
  queryRoute
} from '@modernpoacher/zashiki-react-redux/api/zashiki'

import api from '@modernpoacher/zashiki-react-redux/api'

const mockTransport = {
  get: jest.fn(),
  put: jest.fn(),
  patch: jest.fn()
}

jest.mock('@modernpoacher/zashiki-react-redux/api', () => jest.fn().mockImplementation(() => mockTransport))

describe('@modernpoacher/zashiki-react-redux/api/zashiki', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('`changeRoute`', () => {
    it('is defined', () => {
      expect(changeRoute)
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

  describe('`changeRoute()`', () => {
    const mockRoute = {}

    beforeEach(() => {
      changeRoute(mockRoute)
    })

    it('invokes `api`', () => {
      expect(api)
        .toBeCalled()
    })

    it('invokes `patch`', () => {
      expect(mockTransport.patch)
        .toBeCalledWith('zashiki/stages/change', mockRoute)
    })
  })

  describe('`fetchRoute()`', () => {
    beforeEach(() => {
      fetchRoute()
    })

    it('invokes `api`', () => {
      expect(api)
        .toBeCalled()
    })

    it('invokes `get`', () => {
      expect(mockTransport.get)
        .toBeCalledWith('zashiki/stages/fetch')
    })
  })

  describe('`storeRoute()`', () => {
    const mockRoute = {}

    beforeEach(() => {
      storeRoute(mockRoute)
    })

    it('invokes `api`', () => {
      expect(api)
        .toBeCalled()
    })

    it('invokes `put`', () => {
      expect(mockTransport.put)
        .toBeCalledWith('zashiki/stages/store', mockRoute)
    })
  })

  describe('`queryRoute()`', () => {
    beforeEach(() => {
      queryRoute()
    })

    it('invokes `api`', () => {
      expect(api)
        .toBeCalled()
    })

    it('invokes `get`', () => {
      expect(mockTransport.get)
        .toBeCalledWith('zashiki/stages/query')
    })
  })
})
