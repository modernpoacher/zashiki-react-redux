/*
import {
  toZashiki
} from 'shinkansen-engine/lib/transformers/transmission'
*/

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

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
  definitions: [],
  response: {},
  gears: {
    forward: {},
    reverse: {}
  },
  state: {
    count: 0,
    index: 0
  }
}

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha', () => {
  describe('`transform`', () => {
    it('is defined', () => {
      expect(transform).toBeDefined()
    })
  })

  xdescribe('`transform()`', () => {
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

      describe('`omega` is an array', () => {
        it('returns an object with `definitions` and default values', () => {
          expect(transform({
            status: 'MOCK STATUS',
            omega: [{
              resource: 'MOCK RESOURCE',
              definition: 'MOCK DEFINITION',
              response: 'MOCK RESPONSE'
            }]
          }))
            .toEqual({
              ...DEFAULT,
              definitions: [{
                resource: 'MOCK RESOURCE',
                definition: {
                  schema: 'MOCK DEFINITION',
                  formData: 'MOCK RESPONSE'
                },
                response: {}
              }]
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

      describe('`gears` is an object', () => {
        it('returns an object with `gears` and default values', () => {
          expect(transform({ status: 'MOCK STATUS', gears: { forward: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }, reverse: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } } }))
            .toEqual({
              ...DEFAULT,
              gears: { forward: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }, reverse: { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' } }
            })
        })
      })

      describe('`state` is an object', () => {
        it('returns an object with `state` and default values', () => {
          expect(transform({ status: 'MOCK STATUS', state: { index: 'MOCK INDEX', count: 'MOCK COUNT' } }))
            .toEqual({
              ...DEFAULT,
              state: { index: 'MOCK INDEX', count: 'MOCK COUNT' }
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
