import getConfirmProps from '#zashiki-react-redux/app/components/stages/confirm/get-confirm-props'

describe('#zashiki-react-redux/app/components/stages/confirm/get-confirm-props', () => {
  const mockProps = {
    definition: {},
    response: {},
    onSubmit: jest.fn(),
    onConfirm: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('`getConfirmProps`', () => {
    it('is defined', () => {
      expect(getConfirmProps)
        .toBeDefined()
    })
  })

  describe('`getConfirmProps()`', () => {
    it('returns an object', () => {
      expect(getConfirmProps(mockProps))
        .toEqual({
          definition: {},
          response: {},
          onSubmit: expect.any(Function)
        })
    })
  })
})
