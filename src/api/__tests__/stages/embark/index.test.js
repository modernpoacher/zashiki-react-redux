import {
  submitRoute,
  fetchRoute,
  storeRoute
} from '@modernpoacher/zashiki-react-redux/api/stages/embark'

import api from '@modernpoacher/zashiki-react-redux/api'

const mockTransport = {
  get: jest.fn(),
  put: jest.fn(),
  post: jest.fn()
}

jest.mock('@modernpoacher/zashiki-react-redux/api', () => jest.fn().mockImplementation(() => mockTransport))

describe('@modernpoacher/zashiki-react-redux/api/stages/embark', () => {
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

    it('invokes `api`', () => {
      expect(api)
        .toBeCalled()
    })

    it('invokes `post`', () => {
      expect(mockTransport.post)
        .toBeCalledWith('zashiki/embark', mockRoute)
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
        .toBeCalledWith('zashiki/embark/fetch')
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
        .toBeCalledWith('zashiki/embark/store', mockRoute)
    })
  })
})
