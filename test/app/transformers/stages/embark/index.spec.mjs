import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import transformer, {
  transformEmbark
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

chai.use(sinonChai)

describe('#app/transformers/stages/embark', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transformer)
        .to.be.a('function')
    })
  })

  describe('`transformEmbark`', () => {
    it('is a function', () => {
      expect(transformEmbark)
        .to.be.a('function')
    })
  })
})
