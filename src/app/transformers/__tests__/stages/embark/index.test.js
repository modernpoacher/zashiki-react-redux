import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  FAILURE: 'MOCK FAILURE'
}))

jest.mock('shinkansen-engine/lib/transformers/transmission', () => ({
  toZashiki: jest.fn().mockReturnValue('MOCK ZASHIKI')
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/transformers', () => ({ transformFailure: jest.fn() }))

const DEFAULT = {
  status: 'MOCK STATUS',
  definition: {},
  response: {}
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
        let returnValue

        beforeEach(() => {
          jest.clearAllMocks()

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
            jest.clearAllMocks()

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
      it('invokes `transformFailure`', () => {
        transform({ status: 'MOCK FAILURE' })

        expect(transformFailure)
          .toBeCalledWith('MOCK FAILURE', {})
      })
    })
  })
})
