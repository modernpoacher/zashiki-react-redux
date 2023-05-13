import transform from '#app/transformers/stages/omega'

import {
  transformRejected
} from '#app/transformers'

jest.mock('#app/common', () => ({
  REJECTED: 'MOCK REJECTED'
}))

jest.mock('shinkansen-engine/transformers/transmission', () => ({
  toZashiki: jest.fn().mockReturnValue('MOCK ZASHIKI')
}))

jest.mock('#app/transformers', () => ({ transformRejected: jest.fn() }))

const DEFAULT = {
  status: 'MOCK STATUS',
  definition: {},
  response: {},
  errors: []
}

describe('#app/transformers/stages/omega', () => {
  describe('`transform`', () => {
    it('is defined', () => {
      expect(transform).toBeDefined()
    })
  })

  describe('`transform()`', () => {
    describe('With parameters', () => {
      afterEach(() => {
        jest.clearAllMocks()
      })

      describe('`status` is `REJECTED`', () => {
        it('invokes `transformRejected`', () => {
          transform({ status: 'MOCK REJECTED' })

          expect(transformRejected)
            .toBeCalledWith('MOCK REJECTED', {})
        })
      })

      describe('`status` is not `REJECTED`', () => {
        it('does not invoke `transformRejected`', () => {
          transform({ status: 'MOCK STATUS' })

          expect(transformRejected)
            .not.toBeCalled()
        })

        it('returns an object with default values', () => {
          expect(transform({ status: 'MOCK STATUS' }))
            .toEqual(DEFAULT)
        })
      })

      describe('`definition` is an object', () => {
        describe('`response` is an object', () => {
          it('returns an object with `definition` and default values', () => {
            expect(transform({
              status: 'MOCK STATUS',
              definition: 'MOCK DEFINITION',
              response: 'MOCK RESPONSE'
            }))
              .toEqual({
                ...DEFAULT,
                definition: 'MOCK ZASHIKI',
                response: 'MOCK RESPONSE'
              })
          })
        })

        describe('`response` is not an object', () => {
          it('returns an object with `definition` and default values', () => {
            expect(transform({
              status: 'MOCK STATUS',
              definition: 'MOCK DEFINITION'
            }))
              .toEqual({
                ...DEFAULT,
                definition: 'MOCK ZASHIKI'
              })
          })
        })
      })

      describe('`resource` is an object', () => {
        it('returns an object with `resource` and default values', () => {
          expect(transform({ status: 'MOCK STATUS', resource: {} }))
            .toEqual({
              ...DEFAULT,
              resource: {}
            })
        })
      })
    })

    describe('Without parameters', () => {
      it('invokes `transformRejected`', () => {
        transform({ status: 'MOCK REJECTED' })

        expect(transformRejected)
          .toBeCalledWith('MOCK REJECTED', {})
      })
    })
  })
})
