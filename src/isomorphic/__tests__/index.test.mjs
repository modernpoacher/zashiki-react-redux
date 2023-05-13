import {
  renderToString
} from '@modernpoacher/isomorphic/react-router/redux'

import configureStore from '#app/store'

import render from '#isomorphic'

jest.mock('@modernpoacher/isomorphic/react-router/redux', () => ({ renderToString: jest.fn().mockReturnValue('MOCK RENDER TO STRING') }))

jest.mock('#app/store', () => jest.fn().mockReturnValue('MOCK STORE'))
jest.mock('#app/routes', () => 'MOCK ROUTES')

describe('@modernpoacher/isomorphic', () => {
  describe('`render`', () => {
    it('is defined', () => {
      expect(render)
        .toBeDefined()
    })
  })

  describe('`render()`', () => {
    let returnValue

    beforeEach(() => {
      returnValue = render('MOCK STATE', 'MOCK LOCATION')
    })

    it('invokes `configureStore`', () => {
      expect(configureStore)
        .toBeCalledWith('MOCK STATE')
    })

    it('invokes `renderToString`', () => {
      expect(renderToString)
        .toBeCalledWith('MOCK STORE', { location: 'MOCK LOCATION' }, 'MOCK ROUTES')
    })

    it('returns a string', () => {
      expect(returnValue)
        .toBe('MOCK RENDER TO STRING')
    })
  })
})
