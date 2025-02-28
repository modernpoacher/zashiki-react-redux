import {
  renderToString
} from '@modernpoacher/isomorphic/react-router/redux'

import configureStore from '#zashiki-react-redux/app/store'

import render from '#zashiki-react-redux/isomorphic'

jest.mock('@modernpoacher/isomorphic/react-router/redux', () => ({ renderToString: jest.fn().mockReturnValue('MOCK RENDER TO STRING') }))

jest.mock('#zashiki-react-redux/app/store', () => jest.fn().mockReturnValue('MOCK STORE'))
jest.mock('#zashiki-react-redux/app/routes', () => 'MOCK ROUTES')

describe('#zashiki-react-redux/isomorphic', () => {
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
