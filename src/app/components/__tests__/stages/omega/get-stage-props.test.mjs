import getStageProps from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/get-stage-props'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/omega/get-stage-props', () => {
  const mockProps = {
    definition: {},
    resource: {},
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('`getStageProps`', () => {
    it('is defined', () => {
      expect(getStageProps)
        .toBeDefined()
    })
  })

  describe('`getStageProps()`', () => {
    it('returns an object', () => {
      expect(getStageProps(mockProps))
        .toEqual({
          definition: {},
          resource: {},
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
