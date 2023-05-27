import getEmbarkProps from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/get-embark-props'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/embark/get-embark-props', () => {
  const mockProps = {
    definition: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('`getEmbarkProps`', () => {
    it('is defined', () => {
      expect(getEmbarkProps)
        .toBeDefined()
    })
  })

  describe('`getEmbarkProps()`', () => {
    it('returns an object', () => {
      expect(getEmbarkProps(mockProps))
        .toEqual({
          definition: {},
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
