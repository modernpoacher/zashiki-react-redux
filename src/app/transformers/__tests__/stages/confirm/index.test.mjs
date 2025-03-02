import {
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

import transform from '#zashiki-react-redux/app/transformers/stages/confirm'

import {
  transformRejected
} from '#zashiki-react-redux/app/transformers'

jest.mock('#zashiki-react-redux/app/common', () => {
  return {
    REJECTED: 'MOCK REJECTED'
  }
})

jest.mock('shinkansen-engine/transformers/transmission', () => {
  return {
    toZashiki: jest.fn().mockReturnValue('MOCK ZASHIKI')
  }
})

jest.mock('#zashiki-react-redux/app/transformers', () => {
  return {
    transformRejected: jest.fn()
  }
})

const DEFAULT = {
  status: 'MOCK STATUS',
  definition: {},
  response: {},
  errors: []
}

describe('#zashiki-react-redux/app/transformers/stages/confirm', () => {
  describe('`transform`', () => {
    it('is defined', () => {
      expect(transform).toBeDefined()
    })
  })

  describe('`transform()`', () => {
    describe('With parameters', () => {
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
        let returnValue

        beforeEach(() => {
          returnValue = transform({
            status: 'MOCK STATUS',
            definition: 'MOCK DEFINITION',
            response: 'MOCK RESPONSE'
          })
        })

        describe('`response` is an object', () => {
          it('invokes `toZashiki`', () => {
            expect(toZashiki)
              .toBeCalledWith('MOCK DEFINITION', 'MOCK RESPONSE')
          })

          it('returns an object with `definition` and default values', () => {
            expect(returnValue)
              .toEqual({
                ...DEFAULT,
                definition: 'MOCK ZASHIKI',
                response: 'MOCK RESPONSE'
              })
          })
        })

        describe('`response` is not an object', () => {
          let returnValue

          beforeEach(() => {
            returnValue = transform({
              status: 'MOCK STATUS',
              definition: 'MOCK DEFINITION'
            })
          })

          it('invokes `toZashiki`', () => {
            expect(toZashiki)
              .toBeCalledWith('MOCK DEFINITION', {})
          })

          it('returns an object with `definition` and default values', () => {
            expect(returnValue)
              .toEqual({
                ...DEFAULT,
                definition: 'MOCK ZASHIKI'
              })
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
