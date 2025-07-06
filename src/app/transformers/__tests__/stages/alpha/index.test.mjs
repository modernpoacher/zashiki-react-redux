import {
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

import transform from '#zashiki-react-redux/app/transformers/stages/alpha'

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

describe('#zashiki-react-redux/app/transformers/stages/alpha', () => {
  describe('`transform`', () => {
    it('is defined', () => {
      expect(transform)
        .toBeDefined()
    })
  })

  describe('`transform()`', () => {
    describe('With parameters', () => {
      describe('`status` is `REJECTED`', () => {
        it('invokes `transformRejected`', () => {
          transform({ status: 'MOCK REJECTED' })

          expect(transformRejected)
            .toHaveBeenCalledWith('MOCK REJECTED', {})
        })
      })

      describe('`status` is not `REJECTED`', () => {
        it('does not invoke `transformRejected`', () => {
          transform({ status: 'MOCK STATUS' })

          expect(transformRejected)
            .not.toHaveBeenCalled()
        })

        it('returns an object', () => {
          expect(transform({ status: 'MOCK STATUS' }))
            .toEqual({
              status: 'MOCK STATUS',
              definitions: []
            })
        })

        describe('`omega` is an array', () => {
          let returnValue

          beforeEach(() => {
            returnValue = transform({
              status: 'MOCK STATUS',
              omega: [
                {
                  resource: 'MOCK RESOURCE',
                  definition: 'MOCK DEFINITION',
                  response: 'MOCK RESPONSE'
                }
              ]
            })
          })

          it('invokes `toZashiki`', () => {
            expect(toZashiki)
              .toHaveBeenCalledWith('MOCK DEFINITION', 'MOCK RESPONSE')
          })

          it('returns an object', () => {
            expect(returnValue)
              .toEqual({
                status: 'MOCK STATUS',
                definitions: [
                  {
                    definition: 'MOCK ZASHIKI',
                    resource: 'MOCK RESOURCE',
                    response: 'MOCK RESPONSE',
                    errors: []
                  }
                ]
              })
          })
        })
      })
    })

    describe('Without parameters', () => {
      it('invokes `transformRejected`', () => {
        transform({ status: 'MOCK REJECTED' })

        expect(transformRejected)
          .toHaveBeenCalledWith('MOCK REJECTED', {})
      })
    })
  })
})
