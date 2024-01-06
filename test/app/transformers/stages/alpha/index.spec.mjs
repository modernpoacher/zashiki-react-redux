import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import transformer, {
  transformAlpha,
  transformOmega,
  transformRoute
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transformer)
        .to.be.a('function')
    })
  })

  describe('`transformAlpha`', () => {
    it('is a function', () => {
      expect(transformAlpha)
        .to.be.a('function')
    })
  })

  describe('`transformOmega`', () => {
    it('is a function', () => {
      expect(transformOmega)
        .to.be.a('function')
    })
  })

  describe('`transformRoute`', () => {
    it('is a function', () => {
      expect(transformRoute)
        .to.be.a('function')
    })
  })
})
