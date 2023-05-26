import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  stages,
  transformError,
  transformRejected
} from '@modernpoacher/zashiki-react-redux/app/transformers'

chai.use(sinonChai)

describe('#app/transformers', () => {
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
