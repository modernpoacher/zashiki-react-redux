import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  watchEmbarkFetch,
  watchEmbarkRoute,
  watchEmbarkStore,
  watchEmbarkSubmit
} from '@modernpoacher/zashiki-react-redux/app/sagas/stages/embark'

use(sinonChai)

xdescribe('@modernpoacher/zashiki-react-redux/app/sagas/stages/embark', () => {
  describe('`watchEmbarkFetch`', () => {
    it('is a function', () => {
      expect(watchEmbarkFetch)
        .to.be.a('function')
    })
  })

  describe('`watchEmbarkRoute`', () => {
    it('is a function', () => {
      expect(watchEmbarkRoute)
        .to.be.a('function')
    })
  })

  describe('`watchEmbarkStore`', () => {
    it('is a function', () => {
      expect(watchEmbarkStore)
        .to.be.a('function')
    })
  })

  describe('`watchEmbarkSubmit`', () => {
    it('is a function', () => {
      expect(watchEmbarkSubmit)
        .to.be.a('function')
    })
  })
})
