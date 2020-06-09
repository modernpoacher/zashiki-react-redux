import Rails from 'shinkansen-engine/lib/components/rails'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

jest.mock('shinkansen-engine/lib/components/rails', () => ({
  to: jest.fn().mockImplementation(() => 'MOCK DEBARK ROUTE')
}))

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  DEBARK: 'MOCK DEBARK',
  DEBARK_STAGE: 'MOCK DEBARK STAGE',
  DEBARK_PATTERN: 'MOCK DEBARK PATTERN'
}))

describe('@modernpoacher/zashiki-react-redux/app/common/get-debark-route', () => {
  describe('`getDebarkRoute`', () => {
    it('is defined', () => {
      expect(getDebarkRoute).toBeDefined()
    })
  })

  describe('`getDebarkRoute()`', () => {
    let returnValue

    beforeEach(() => {
      returnValue = getDebarkRoute()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('invokes `Rails.to`', () => {
      expect(Rails.to)
        .toBeCalledWith({ 'MOCK DEBARK': 'MOCK DEBARK STAGE' }, 'MOCK DEBARK PATTERN')
    })

    it('returns a string', () => {
      expect(returnValue)
        .toBe('MOCK DEBARK ROUTE')
    })
  })
})
