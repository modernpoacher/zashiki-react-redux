import Rails from 'shinkansen-engine/components/rails'

import getPathname from '#app/common/get-pathname'

jest.mock('shinkansen-engine/components/rails', () => ({
  go: jest.fn(),
  to: jest.fn()
}))

jest.mock('shinkansen-engine/components/signals', () => ({
  ALPHA: 'MOCK ALPHA',
  OMEGA: 'MOCK OMEGA',
  EMBARK: 'MOCK EMBARK',
  DEBARK: 'MOCK DEBARK',
  ALPHA_PATTERN: 'MOCK ALPHA PATTERN',
  OMEGA_PATTERN: 'MOCK OMEGA PATTERN',
  EMBARK_PATTERN: 'MOCK EMBARK PATTERN',
  DEBARK_PATTERN: 'MOCK DEBARK PATTERN'
}))

describe('#app/common/get-pathname', () => {
  describe('`getPathname`', () => {
    it('is defined', () => {
      expect(getPathname).toBeDefined()
    })
  })

  describe('`getPathname()`', () => {
    beforeEach(() => {
      Rails.go.mockImplementation((route, pattern) => {
        switch (pattern) {
          case 'MOCK ALPHA PATTERN':
            return (
              Reflect.has(route, 'MOCK ALPHA') && !(Reflect.has(route, 'MOCK OMEGA') || Reflect.has(route, 'MOCK EMBARK') || Reflect.has(route, 'MOCK DEBARK'))
            )

          case 'MOCK OMEGA PATTERN':
            return (
              Reflect.has(route, 'MOCK ALPHA') && Reflect.has(route, 'MOCK OMEGA') && !(Reflect.has(route, 'MOCK EMBARK') || Reflect.has(route, 'MOCK DEBARK'))
            )

          case 'MOCK EMBARK PATTERN':
            return (
              Reflect.has(route, 'MOCK EMBARK') && !(Reflect.has(route, 'MOCK ALPHA') || Reflect.has(route, 'MOCK OMEGA') || Reflect.has(route, 'MOCK DEBARK'))
            )

          case 'MOCK DEBARK PATTERN':
            return (
              Reflect.has(route, 'MOCK DEBARK') && !(Reflect.has(route, 'MOCK ALPHA') || Reflect.has(route, 'MOCK OMEGA') || Reflect.has(route, 'MOCK EMBARK'))
            )
        }
      })
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    describe('With parameters', () => {
      describe('`alpha` is an object', () => {
        let returnValue

        beforeEach(() => {
          Rails.to.mockReturnValue('MOCK ALPHA ROUTE')

          returnValue = getPathname({ 'MOCK ALPHA': 'MOCK ALPHA VALUE' })
        })

        it('invokes `Rails.go`', () => {
          expect(Rails.go)
            .toBeCalledWith({ 'MOCK ALPHA': 'MOCK ALPHA VALUE' }, 'MOCK ALPHA PATTERN')
        })

        it('invokes `Rails.to`', () => {
          expect(Rails.to)
            .toBeCalledWith({ 'MOCK ALPHA': 'MOCK ALPHA VALUE' }, 'MOCK ALPHA PATTERN')
        })

        it('returns a string', () => {
          expect(returnValue)
            .toBe('MOCK ALPHA ROUTE')
        })
      })

      describe('`alpha` is an object and `omega` is an object', () => {
        let returnValue

        beforeEach(() => {
          Rails.to.mockReturnValue('MOCK OMEGA ROUTE')

          returnValue = getPathname({ 'MOCK ALPHA': 'MOCK ALPHA VALUE', 'MOCK OMEGA': 'MOCK OMEGA VALUE' })
        })

        it('invokes `Rails.go`', () => {
          expect(Rails.go)
            .toBeCalledWith({ 'MOCK ALPHA': 'MOCK ALPHA VALUE', 'MOCK OMEGA': 'MOCK OMEGA VALUE' }, 'MOCK OMEGA PATTERN')
        })

        it('invokes `Rails.to`', () => {
          expect(Rails.to)
            .toBeCalledWith({ 'MOCK ALPHA': 'MOCK ALPHA VALUE', 'MOCK OMEGA': 'MOCK OMEGA VALUE' }, 'MOCK OMEGA PATTERN')
        })

        it('returns a string', () => {
          expect(returnValue)
            .toBe('MOCK OMEGA ROUTE')
        })
      })

      describe('`embark` is an object', () => {
        let returnValue

        beforeEach(() => {
          Rails.to.mockReturnValue('MOCK EMBARK ROUTE')

          returnValue = getPathname({ 'MOCK EMBARK': 'MOCK EMBARK VALUE' })
        })

        it('invokes `Rails.go`', () => {
          expect(Rails.go)
            .toBeCalledWith({ 'MOCK EMBARK': 'MOCK EMBARK VALUE' }, 'MOCK EMBARK PATTERN')
        })

        it('invokes `Rails.to`', () => {
          expect(Rails.to)
            .toBeCalledWith({ 'MOCK EMBARK': 'MOCK EMBARK VALUE' }, 'MOCK EMBARK PATTERN')
        })

        it('returns a string', () => {
          expect(returnValue)
            .toBe('MOCK EMBARK ROUTE')
        })
      })

      describe('`debark` is an object', () => {
        let returnValue

        beforeEach(() => {
          Rails.to.mockReturnValue('MOCK DEBARK ROUTE')

          returnValue = getPathname({ 'MOCK DEBARK': 'MOCK DEBARK VALUE' })
        })

        it('invokes `Rails.go`', () => {
          expect(Rails.go)
            .toBeCalledWith({ 'MOCK DEBARK': 'MOCK DEBARK VALUE' }, 'MOCK DEBARK PATTERN')
        })

        it('invokes `Rails.to`', () => {
          expect(Rails.to)
            .toBeCalledWith({ 'MOCK DEBARK': 'MOCK DEBARK VALUE' }, 'MOCK DEBARK PATTERN')
        })

        it('returns a string', () => {
          expect(returnValue)
            .toBe('MOCK DEBARK ROUTE')
        })
      })
    })

    describe('Without parameters', () => {
      let returnValue

      beforeEach(() => {
        returnValue = getPathname()
      })

      it('invokes `Rails.go`', () => {
        expect(Rails.go)
          .toBeCalled()
      })

      it('does not invoke `Rails.to`', () => {
        expect(Rails.to)
          .not.toBeCalled()
      })

      it('returns undefined', () => {
        expect(returnValue)
          .toBeNull()
      })
    })
  })
})
