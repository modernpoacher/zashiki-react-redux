import getStageProps from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/get-stage-props'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/alpha/get-stage-props', () => {
  const mockProps = {
    definitions: [],
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
          definitions: [],
          onChange: expect.any(Function),
          onSubmit: expect.any(Function)
        })
    })
  })
})
