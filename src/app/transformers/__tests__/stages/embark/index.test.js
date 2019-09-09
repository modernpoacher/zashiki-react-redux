import { transform } from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'
import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

jest.mock('shinkansen-signals', () => ({ Signals: { FAILURE: 'MOCK FAILURE' } }))
jest.mock('@modernpoacher/zashiki-react-redux/app/transformers', () => ({ transformFailure: jest.fn() }))

const DEFAULT = {
  status: 'MOCK STATUS',
  definition: {}
}

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/embark', () => {
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

      describe('`status` is `Signals.FAILURE`', () => {
        it('invokes `transformFailure`', () => {
          transform({ status: 'MOCK FAILURE' })

          expect(transformFailure)
            .toBeCalledWith('MOCK FAILURE', {})
        })
      })

      describe('`status` is not `Signals.FAILURE`', () => {
        it('does not invoke `transformFailure`', () => {
          transform({ status: 'MOCK STATUS' })

          expect(transformFailure)
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
                definition: {
                  schema: 'MOCK DEFINITION',
                  formData: 'MOCK RESPONSE'
                }
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
                definition: {
                  schema: 'MOCK DEFINITION',
                  formData: {}
                }
              })
          })
        })
      })
    })

    describe('Without parameters', () => {
      it('invokes `transformFailure`', () => {
        transform({ status: 'MOCK FAILURE' })

        expect(transformFailure)
          .toBeCalledWith('MOCK FAILURE', {})
      })
    })
  })
})
