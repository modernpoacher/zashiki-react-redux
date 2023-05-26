import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import transformer, {
  transformConfirm
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/confirm'

chai.use(sinonChai)

describe('#app/transformers/stages/confirm', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transformer)
        .to.be.a('function')
    })
  })

  describe('`transformConfirm`', () => {
    it('is a function', () => {
      expect(transformConfirm)
        .to.be.a('function')
    })
  })
})