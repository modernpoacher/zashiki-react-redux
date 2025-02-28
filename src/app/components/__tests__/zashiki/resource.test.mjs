import resource from '#zashiki-react-redux/app/components/zashiki/resource'

describe('#zashiki-react-redux/app/components/zashiki/resource', () => {
  describe('`resource`', () => {
    it('is defined', () => {
      expect(resource)
        .toBeDefined()
    })
  })

  describe('`resource()`', () => {
    describe('`alpha` is a string', () => {
      expect(resource('MOCK ALPHA'))
        .toEqual({ alpha: 'MOCK ALPHA' })
    })

    describe('`alpha` is a string and `omega` is a string', () => {
      expect(resource('MOCK ALPHA', 'MOCK OMEGA'))
        .toEqual({ alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' })
    })
  })
})
