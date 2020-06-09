import Rails from 'shinkansen-engine/lib/components/rails'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

jest.mock('shinkansen-engine/lib/components/rails', () => ({
  to: jest.fn().mockImplementation(() => 'MOCK EMBARK ROUTE')
}))

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  EMBARK: 'MOCK EMBARK',
  EMBARK_STAGE: 'MOCK EMBARK STAGE',
  EMBARK_PATTERN: 'MOCK EMBARK PATTERN'
}))

describe('@modernpoacher/zashiki-react-redux/app/common/get-embark-route', () => {
  describe('`getEmbarkRoute`', () => {
    it('is defined', () => {
      expect(getEmbarkRoute).toBeDefined()
    })
  })

  describe('`getEmbarkRoute()`', () => {
    let returnValue

    beforeEach(() => {
      returnValue = getEmbarkRoute()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('invokes `Rails.to`', () => {
      expect(Rails.to)
        .toBeCalledWith({ 'MOCK EMBARK': 'MOCK EMBARK STAGE' }, 'MOCK EMBARK PATTERN')
    })

    it('returns a string', () => {
      expect(returnValue)
        .toBe('MOCK EMBARK ROUTE')
    })
  })
})
