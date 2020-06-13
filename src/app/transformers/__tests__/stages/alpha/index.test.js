import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'

import transform from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

import {
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

jest.mock('@modernpoacher/zashiki-react-redux/app/common', () => ({
  REJECTED: 'MOCK REJECTED'
}))

jest.mock('shinkansen-engine/lib/transformers/transmission', () => ({
  toZashiki: jest.fn().mockReturnValue('MOCK ZASHIKI')
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/transformers', () => ({ transformRejected: jest.fn() }))

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha', () => {
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

        it('returns an object', () => {
          expect(transform({ status: 'MOCK STATUS' }))
            .toEqual({
              status: 'MOCK STATUS',
              definitions: [],
              gears: {
                forward: {},
                reverse: {}
              },
              state: {
                count: 0,
                index: 0
              }
            })
        })

        describe('`omega` is an array', () => {
          let returnValue

          beforeEach(() => {
            jest.clearAllMocks()

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
              .toBeCalledWith('MOCK DEFINITION', 'MOCK RESPONSE')
          })

          it('returns an object', () => {
            expect(returnValue)
              .toEqual({
                status: 'MOCK STATUS',
                definitions: [
                  {
                    definition: 'MOCK ZASHIKI',
                    resource: 'MOCK RESOURCE',
                    response: 'MOCK RESPONSE'
                  }
                ],
                gears: {
                  forward: {},
                  reverse: {}
                },
                state: {
                  count: 0,
                  index: 0
                }
              })
          })
        })
      })

      describe('`gears` is an object', () => {
        it('returns an object with `gears` and default values', () => {
          expect(transform({ status: 'MOCK STATUS', gears: { forward: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }, reverse: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } } }))
            .toEqual({
              status: 'MOCK STATUS',
              definitions: [],
              state: {
                count: 0,
                index: 0
              },
              gears: { forward: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }, reverse: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }
            })
        })
      })

      describe('`state` is an object', () => {
        it('returns an object with `state` and default values', () => {
          expect(transform({ status: 'MOCK STATUS', state: { index: 'MOCK INDEX', count: 'MOCK COUNT' } }))
            .toEqual({
              status: 'MOCK STATUS',
              definitions: [],
              gears: {
                forward: {},
                reverse: {}
              },
              state: { index: 'MOCK INDEX', count: 'MOCK COUNT' }
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
