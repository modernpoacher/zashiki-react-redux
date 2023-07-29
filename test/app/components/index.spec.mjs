import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  Zashiki,
  Alpha,
  Omega,
  Embark,
  Debark,
  Confirm,
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/components', () => {
  describe('`Zashiki`', () => {
    it('is a function', () => {
      expect(Zashiki)
        .to.be.a('function')
    })
  })

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

  describe('`Navigation`', () => {
    it('is a function', () => {
      expect(Navigation)
        .to.be.a('function')
    })
  })
})
