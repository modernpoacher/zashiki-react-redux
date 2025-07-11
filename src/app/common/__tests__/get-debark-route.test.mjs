import Rails from 'shinkansen-engine/components/rails'

import getDebarkRoute from '#zashiki-react-redux/app/common/get-debark-route'

jest.mock('shinkansen-engine/components/rails', () => ({
  to: jest.fn().mockReturnValue('MOCK DEBARK ROUTE')
}))

jest.mock('shinkansen-engine/components/signals', () => ({
  DEBARK: 'MOCK DEBARK',
  DEBARK_STAGE: 'MOCK DEBARK STAGE',
  DEBARK_PATTERN: 'MOCK DEBARK PATTERN'
}))

describe('#zashiki-react-redux/app/common/get-debark-route', () => {
  describe('`getDebarkRoute`', () => {
    it('is defined', () => {
      expect(getDebarkRoute)
        .toBeDefined()
    })
  })

  describe('`getDebarkRoute()`', () => {
    let returnValue

    beforeEach(() => {
      returnValue = getDebarkRoute()
    })

    it('invokes `Rails.to`', () => {
      expect(Rails.to)
        .toHaveBeenCalledWith({ 'MOCK DEBARK': 'MOCK DEBARK STAGE' }, 'MOCK DEBARK PATTERN')
    })

    it('returns a string', () => {
      expect(returnValue)
        .toBe('MOCK DEBARK ROUTE')
    })
  })
})
