import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  stages,
  transformError,
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/transformers', () => {
  describe('`stages`', () => {
    it('is a module', () => {
      expect(stages)
        .to.be.a('module')
    })
  })

  describe('`transformError`', () => {
    it('is a function', () => {
      expect(transformError)
        .to.be.a('function')
    })
  })

  describe('`transformRejected`', () => {
    it('is a function', () => {
      expect(transformRejected)
        .to.be.a('function')
    })
  })
})
