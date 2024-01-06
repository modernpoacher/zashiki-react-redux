import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import transformer, {
  transformEmbark
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/embark', () => {
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
