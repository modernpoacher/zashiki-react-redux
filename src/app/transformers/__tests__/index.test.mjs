import {
  transformError,
  transformRejected
} from '#zashiki-react-redux/app/transformers'

jest.mock('#zashiki-react-redux/app/common', () => ({
  REJECTED: 'MOCK REJECTED'
}))

const DEFAULT_ERROR = {
  name: 'Application Error'
}

const DEFAULT_REJECTED = {
  status: 'MOCK REJECTED',
  exception: DEFAULT_ERROR
}

describe('#zashiki-react-redux/app/transformers', () => {
  describe('`transformError`', () => {
    it('is defined', () => {
      expect(transformError).toBeDefined()
    })
  })

  describe('`transformRejected`', () => {
    it('is defined', () => {
      expect(transformRejected).toBeDefined()
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

  describe('`transformRejected()`', () => {
    describe('With parameters', () => {
      it('returns an object', () => {
        expect(transformRejected('MOCK REJECTED', { exception: { code: 'MOCK CODE', name: 'MOCK NAME', message: 'MOCK MESSAGE' } }))
          .toEqual({
            status: 'MOCK REJECTED',
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
        expect(transformRejected())
          .toEqual(DEFAULT_REJECTED)
      })
    })
  })
})
