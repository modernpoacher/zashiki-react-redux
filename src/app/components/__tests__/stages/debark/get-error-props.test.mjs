import getErrorProps from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/get-error-props'

describe('@modernpoacher/zashiki-react-redux/app/components/stages/debark/get-error-props', () => {
  const mockProps = {
    exception: {
      name: 'MOCK NAME',
      message: 'MOCK MESSAGE'
    }
  }

  describe('`getErrorProps`', () => {
    it('is defined', () => {
      expect(getErrorProps)
        .toBeDefined()
    })
  })

  describe('`getErrorProps()`', () => {
    it('returns an object', () => {
      expect(getErrorProps(mockProps))
        .toEqual({
          name: 'MOCK NAME',
          message: 'MOCK MESSAGE'
        })
    })
  })
})
