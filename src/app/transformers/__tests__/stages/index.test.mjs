import {
  alpha,
  omega,
  embark,
  debark
} from '#app/transformers/stages'

describe('#app/transformers/stages', () => {
  describe('`alpha`', () => {
    it('is defined', () => {
      expect(alpha)
        .toBeDefined()
    })
  })

  describe('`omega`', () => {
    it('is defined', () => {
      expect(omega)
        .toBeDefined()
    })
  })

  describe('`embark`', () => {
    it('is defined', () => {
      expect(embark)
        .toBeDefined()
    })
  })

  describe('`debark`', () => {
    it('is defined', () => {
      expect(debark)
        .toBeDefined()
    })
  })
})
