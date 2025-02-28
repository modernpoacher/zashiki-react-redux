import getDebarkProps from '#zashiki-react-redux/app/components/stages/debark/get-debark-props'

describe('#zashiki-react-redux/app/components/stages/debark/get-debark-props', () => {
  const mockProps = {
    definitions: [],
    token: {},
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('`getDebarkProps`', () => {
    it('is defined', () => {
      expect(getDebarkProps)
        .toBeDefined()
    })
  })

  describe('`getDebarkProps()`', () => {
    it('returns an object', () => {
      expect(getDebarkProps(mockProps))
        .toEqual({
          definitions: [],
          token: {},
          onSubmit: expect.any(Function)
        })
    })
  })
})
