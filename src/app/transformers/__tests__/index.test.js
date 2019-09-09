import {
  transformError,
  transformFailure
} from '@modernpoacher/zashiki-react-redux/app/transformers'

jest.mock('shinkansen-signals', () => ({ Signals: { FAILURE: 'MOCK FAILURE' } }))

const DEFAULT_ERROR = {
  name: 'Application Error'
}

const DEFAULT_FAILURE = {
  status: 'MOCK FAILURE',
  exception: {
    name: 'Application Error'
  }
}

describe('@modernpoacher/zashiki-react-redux/app/transformers', () => {
  describe('`transformError`', () => {
    it('is defined', () => {
      expect(transformError).toBeDefined()
    })
  })

  describe('`transformFailure`', () => {
    it('is defined', () => {
      expect(transformFailure).toBeDefined()
    })
  })

  describe('`transformError()`', () => {
    describe('With parameters', () => {
      it('returns an object', () => {
        expect(transformError({ code: 'MOCK CODE', name: 'MOCK NAME', message: 'MOCK MESSAGE' }))
          .toEqual({
            code: 'MOCK CODE',
            name: 'MOCK NAME',
            message: 'MOCK MESSAGE'
          })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with default values', () => {
        expect(transformError())
          .toEqual(DEFAULT_ERROR)
      })
    })
  })

  describe('`transformFailure()`', () => {
    describe('With parameters', () => {
      it('returns an object', () => {
        expect(transformFailure('MOCK FAILURE', { exception: { code: 'MOCK CODE', name: 'MOCK NAME', message: 'MOCK MESSAGE' } }))
          .toEqual({
            status: 'MOCK FAILURE',
            exception: {
              code: 'MOCK CODE',
              name: 'MOCK NAME',
              message: 'MOCK MESSAGE'
            }
          })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with default values', () => {
        expect(transformFailure())
          .toEqual(DEFAULT_FAILURE)
      })
    })
  })
})
