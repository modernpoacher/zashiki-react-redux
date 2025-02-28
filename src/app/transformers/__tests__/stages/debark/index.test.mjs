import {
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

import toCheckAnswers from 'shinkansen-pinion/transformers/check-answers'

import transform from '#zashiki-react-redux/app/transformers/stages/debark'

import {
  transformRejected
} from '#zashiki-react-redux/app/transformers'

jest.mock('#zashiki-react-redux/app/common', () => ({
  REJECTED: 'MOCK REJECTED'
}))

jest.mock('shinkansen-engine/transformers/transmission', () => ({
  toZashiki: jest.fn().mockReturnValue('MOCK ZASHIKI')
}))

jest.mock('shinkansen-pinion/transformers/check-answers', () => jest.fn().mockReturnValue('MOCK CHECK ANSWERS'))

jest.mock('#zashiki-react-redux/app/transformers', () => ({ transformRejected: jest.fn() }))

describe('#zashiki-react-redux/app/transformers/stages/debark', () => {
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
        let returnValue

        beforeEach(() => {
          returnValue = transform({
            status: 'MOCK STATUS'
          })
        })

        it('does not invoke `transformRejected`', () => {
          expect(transformRejected)
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
            returnValue = transform({
              status: 'MOCK STATUS',
              alpha: {},
              omega: [
                {
                  definition: 'MOCK DEFINITION',
                  resource: 'MOCK RESOURCE',
                  response: 'MOCK RESPONSE',
                  errors: 'MOCK ERRORS'
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
                    response: 'MOCK RESPONSE',
                    errors: 'MOCK ERRORS'
                  }
                ],
                token: {}
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
