import {
  Rails
} from 'shinkansen-rails'

import getPathname from '@modernpoacher/zashiki-react-redux/app/common/get-pathname'

jest.mock('shinkansen-rails', () => ({
  Rails: {
    to: jest.fn()
  }
}))

jest.mock('shinkansen-signals', () => ({
  Signals: {
    ALPHA: 'MOCK ALPHA',
    OMEGA: 'MOCK OMEGA',
    EMBARK: 'MOCK EMBARK',
    DEBARK: 'MOCK DEBARK',
    ALPHA_PATTERN: 'MOCK ALPHA PATTERN',
    OMEGA_PATTERN: 'MOCK OMEGA PATTERN',
    EMBARK_PATTERN: 'MOCK EMBARK PATTERN',
    DEBARK_PATTERN: 'MOCK DEBARK PATTERN'
  }
}))

describe('@modernpoacher/zashiki-react-redux/app/common/get-pathname', () => {
  describe('`getPathname`', () => {
    it('is defined', () => {
      expect(getPathname).toBeDefined()
    })
  })

  describe('`getPathname()`', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    describe('With parameters', () => {
      describe('`alpha` is an object', () => {
        it('invokes `Rails.to`', () => {
          getPathname({ 'MOCK ALPHA': 'MOCK ALPHA VALUE' })

          expect(Rails.to)
            .toBeCalledWith({ 'MOCK ALPHA': 'MOCK ALPHA VALUE' }, 'MOCK ALPHA PATTERN')
        })
      })

      describe('`alpha` is an object and `omega` is an object', () => {
        it('invokes `Rails.to`', () => {
          getPathname({ 'MOCK ALPHA': 'MOCK ALPHA VALUE', 'MOCK OMEGA': 'MOCK OMEGA VALUE' })

          expect(Rails.to)
            .toBeCalledWith({ 'MOCK ALPHA': 'MOCK ALPHA VALUE', 'MOCK OMEGA': 'MOCK OMEGA VALUE' }, 'MOCK OMEGA PATTERN')
        })
      })

      describe('`embark` is an object', () => {
        it('invokes `Rails.to`', () => {
          getPathname({ 'MOCK EMBARK': 'MOCK EMBARK VALUE' })

          expect(Rails.to)
            .toBeCalledWith({ 'MOCK EMBARK': 'MOCK EMBARK VALUE' }, 'MOCK EMBARK PATTERN')
        })
      })

      describe('`debark` is an object', () => {
        it('invokes `Rails.to`', () => {
          getPathname({ 'MOCK DEBARK': 'MOCK DEBARK VALUE' })

          expect(Rails.to)
            .toBeCalledWith({ 'MOCK DEBARK': 'MOCK DEBARK VALUE' }, 'MOCK DEBARK PATTERN')
        })
      })
    })

    describe('Without parameters', () => {
      it('does not invoke `Rails.to`', () => {
        getPathname()

        expect(Rails.to)
          .not.toBeCalled()
      })
    })
  })
})
