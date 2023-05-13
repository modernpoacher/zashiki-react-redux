import Rails from 'shinkansen-engine/components/rails'

import getEmbarkRoute from '#app/common/get-embark-route'

jest.mock('shinkansen-engine/components/rails', () => ({
  to: jest.fn().mockReturnValue('MOCK EMBARK ROUTE')
}))

jest.mock('shinkansen-engine/components/signals', () => ({
  EMBARK: 'MOCK EMBARK',
  EMBARK_STAGE: 'MOCK EMBARK STAGE',
  EMBARK_PATTERN: 'MOCK EMBARK PATTERN'
}))

describe('#app/common/get-embark-route', () => {
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
