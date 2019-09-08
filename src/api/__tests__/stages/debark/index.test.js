import {
  submitRoute,
  fetchRoute,
  storeRoute
} from '@modernpoacher/zashiki-react-redux/api/stages/debark'

import { getTransport } from '@modernpoacher/zashiki-react-redux/api'

const mockTransport = {
  get: jest.fn(),
  put: jest.fn(),
  post: jest.fn()
}

jest.mock('@modernpoacher/zashiki-react-redux/api', () => ({
  getTransport: jest.fn().mockImplementation(() => mockTransport)
}))

describe('@modernpoacher/zashiki-react-redux/api/stages/debark', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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

  describe('`submitRoute()`', () => {
    const mockRoute = {}

    beforeEach(() => {
      submitRoute(mockRoute)
    })

    it('invokes `getTransport`', () => {
      expect(getTransport)
        .toBeCalled()
    })

    it('invokes `post`', () => {
      expect(mockTransport.post)
        .toBeCalledWith('zashiki/debark', mockRoute)
    })
  })

  describe('`fetchRoute()`', () => {
    beforeEach(() => {
      fetchRoute()
    })

    it('invokes `getTransport`', () => {
      expect(getTransport)
        .toBeCalled()
    })

    it('invokes `get`', () => {
      expect(mockTransport.get)
        .toBeCalledWith('zashiki/debark/fetch')
    })
  })

  describe('`storeRoute()`', () => {
    const mockRoute = {}

    beforeEach(() => {
      storeRoute(mockRoute)
    })

    it('invokes `getTransport`', () => {
      expect(getTransport)
        .toBeCalled()
    })

    it('invokes `put`', () => {
      expect(mockTransport.put)
        .toBeCalledWith('zashiki/debark/store', mockRoute)
    })
  })
})
