import {
  fetchRoute,
  storeRoute,
  submitState
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

  describe('`submitState()`', () => {
    const mockRoute = {}

    beforeEach(() => {
      submitState(mockRoute)
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
})
