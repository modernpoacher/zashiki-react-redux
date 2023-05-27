import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import {
  watchOmegaFetch,
  watchOmegaMount,
  watchOmegaQuery,
  watchOmegaRoute,
  watchOmegaStore,
  watchOmegaSubmit
} from '@modernpoacher/zashiki-react-redux/app/sagas/stages/omega'

chai.use(sinonChai)

describe('@modernpoacher/zashiki-react-redux/app/sagas/stages/omega', () => {
  describe('`watchOmegaFetch`', () => {
    it('is a function', () => {
      expect(watchOmegaFetch)
        .to.be.a('function')
    })
  })

  describe('`watchOmegaMount`', () => {
    it('is a function', () => {
      expect(watchOmegaMount)
        .to.be.a('function')
    })
  })

  describe('`watchOmegaQuery`', () => {
    it('is a function', () => {
      expect(watchOmegaQuery)
        .to.be.a('function')
    })
  })

  describe('`watchOmegaRoute`', () => {
    it('is a function', () => {
      expect(watchOmegaRoute)
        .to.be.a('function')
    })
  })

  describe('`watchOmegaStore`', () => {
    it('is a function', () => {
      expect(watchOmegaStore)
        .to.be.a('function')
    })
  })

  describe('`watchOmegaSubmit`', () => {
    it('is a function', () => {
      expect(watchOmegaSubmit)
        .to.be.a('function')
    })
  })
})
