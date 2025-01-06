import {
  expect
} from 'chai'

import {
  Alpha,
  Omega,
  Embark,
  Debark,
  Confirm
} from '@modernpoacher/zashiki-react-redux/app/components/stages'

describe('@modernpoacher/zashiki-react-redux/app/components/stages', () => {
  describe('`Alpha`', () => {
    it('is a function', () => {
      expect(Alpha)
        .to.be.a('function')
    })
  })

  describe('`Omega`', () => {
    it('is a function', () => {
      expect(Omega)
        .to.be.a('function')
    })
  })

  describe('`Embark`', () => {
    it('is a function', () => {
      expect(Embark)
        .to.be.a('function')
    })
  })

  describe('`Debark`', () => {
    it('is a function', () => {
      expect(Debark)
        .to.be.a('function')
    })
  })

  describe('`Confirm`', () => {
    it('is a function', () => {
      expect(Confirm)
        .to.be.a('function')
    })
  })
})
