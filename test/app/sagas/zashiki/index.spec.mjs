import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  watchZashikiFetch,
  watchZashikiMount,
  watchZashikiQuery,
  watchZashikiStore,
  watchZashikiSubmit
} from '@modernpoacher/zashiki-react-redux/app/sagas/zashiki'

chai.use(sinonChai)

describe('#app/sagas/zashiki', () => {
  describe('`watchZashikiFetch`', () => {
    it('is a function', () => {
      expect(watchZashikiFetch)
        .to.be.a('function')
    })
  })

  describe('`watchZashikiMount`', () => {
    it('is a function', () => {
      expect(watchZashikiMount)
        .to.be.a('function')
    })
  })

  describe('`watchZashikiQuery`', () => {
    it('is a function', () => {
      expect(watchZashikiQuery)
        .to.be.a('function')
    })
  })

  describe('`watchZashikiStore`', () => {
    it('is a function', () => {
      expect(watchZashikiStore)
        .to.be.a('function')
    })
  })

  describe('`watchZashikiSubmit`', () => {
    it('is a function', () => {
      expect(watchZashikiSubmit)
        .to.be.a('function')
    })
  })
})