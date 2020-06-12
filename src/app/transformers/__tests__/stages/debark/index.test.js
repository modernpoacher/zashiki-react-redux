import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import toCheckAnswers from 'shinkansen-pinion/lib/transformers/check-answers'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/debark'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  FAILURE: 'MOCK FAILURE'
}))

jest.mock('shinkansen-engine/lib/transformers/transmission', () => ({
  toZashiki: jest.fn().mockReturnValue('MOCK ZASHIKI')
}))

jest.mock('shinkansen-pinion/lib/transformers/check-answers', () => jest.fn().mockReturnValue('MOCK CHECK ANSWERS'))

jest.mock('@modernpoacher/zashiki-react-redux/app/transformers', () => ({ transformFailure: jest.fn() }))

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/debark', () => {
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
        let returnValue

        beforeEach(() => {
          jest.clearAllMocks()

          returnValue = transform({
            status: 'MOCK STATUS'
          })
        })

        it('does not invoke `transformFailure`', () => {
          expect(transformFailure)
            .not.toBeCalled()
        })

        it('returns an object', () => {
          expect(returnValue)
            .toEqual({
              status: 'MOCK STATUS',
              definition: {},
              definitions: [],
              token: {}
            })
        })

        describe('`omega` is an array', () => {
          let returnValue

          beforeEach(() => {
            jest.clearAllMocks()

            returnValue = transform({
              status: 'MOCK STATUS',
              alpha: {},
              omega: [
                {
                  definition: 'MOCK DEFINITION',
                  resource: 'MOCK RESOURCE',
                  response: 'MOCK RESPONSE'
                }
              ]
            })
          })

          it('invokes `toZashiki`', () => {
            expect(toZashiki)
              .toBeCalledWith('MOCK DEFINITION', 'MOCK RESPONSE')
          })

          it('invokes `toCheckAnswers`', () => {
            expect(toCheckAnswers)
              .toBeCalledWith('MOCK ZASHIKI', 'MOCK RESOURCE')
          })

          it('returns an object', () => {
            expect(returnValue)
              .toEqual({
                status: 'MOCK STATUS',
                definition: {},
                definitions: [
                  {
                    definition: 'MOCK CHECK ANSWERS',
                    resource: 'MOCK RESOURCE',
                    response: 'MOCK RESPONSE'
                  }
                ],
                token: {}
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
