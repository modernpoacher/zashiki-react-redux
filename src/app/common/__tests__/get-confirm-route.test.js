import Rails from 'shinkansen-engine/lib/components/rails'

import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

jest.mock('shinkansen-engine/lib/components/rails', () => ({
  to: jest.fn().mockReturnValue('MOCK CONFIRM ROUTE')
}))

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  CONFIRM: 'MOCK CONFIRM',
  CONFIRM_STAGE: 'MOCK CONFIRM STAGE',
  CONFIRM_PATTERN: 'MOCK CONFIRM PATTERN'
}))

describe('@modernpoacher/zashiki-react-redux/app/common/get-confirm-route', () => {
  describe('`getConfirmRoute`', () => {
    it('is defined', () => {
      expect(getConfirmRoute).toBeDefined()
    })
  })

  describe('`getConfirmRoute()`', () => {
    let returnValue

    beforeEach(() => {
      returnValue = getConfirmRoute()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('invokes `Rails.to`', () => {
      expect(Rails.to)
        .toBeCalledWith({ 'MOCK CONFIRM': 'MOCK CONFIRM STAGE' }, 'MOCK CONFIRM PATTERN')
    })

    it('returns a string', () => {
      expect(returnValue)
        .toBe('MOCK CONFIRM ROUTE')
    })
  })
})
