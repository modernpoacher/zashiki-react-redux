import {
  browserHistory
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

const PATTERN = '/:alpha/:omega'

const ZASHIKI_ALPHA = 'ZASHIKI_ALPHA_QUERY'
const ZASHIKI_DEBARK = 'ZASHIKI_DEBARK'
const ZASHIKI_EMBARK = 'ZASHIKI_EMBARK'
const ZASHIKI_OMEGA = 'ZASHIKI_OMEGA_QUERY'

const ZASHIKI_ALPHA_STATE = 'alpha'
const ZASHIKI_DEBARK_STATE = 'debark'
const ZASHIKI_EMBARK_STATE = 'embark'
const ZASHIKI_OMEGA_STATE = 'omega'

const ZASHIKI_STATE = 'zashiki' // eslint-disable-line

const REDIRECT_ROUTE = (route) => { // console.log('REDIRECT_ROUTE', route) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = Gears.path(PATTERN, route)

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT_TO_DEBARK = ({ debark }) => { // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = `/${debark}`

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT_TO_EMBARK = ({ embark }) => { // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = `/${embark}`

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT = ({ [ZASHIKI_ALPHA_STATE]: alpha, [ZASHIKI_OMEGA_STATE]: omega, [ZASHIKI_DEBARK_STATE]: debark, [ZASHIKI_EMBARK_STATE]: embark }) => { // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_ROUTE({ alpha, omega })
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark })
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark })
  }
}

/*
const redirectRoute = ({ [ZASHIKI_STATE]: { redirect } }) => { console.log('redirectRoute()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}
*/

const redirectFromAlpha = ({ [ZASHIKI_ALPHA_STATE]: { redirect } }) => { // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromDebark = ({ [ZASHIKI_DEBARK_STATE]: { redirect } }) => { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromEmbark = ({ [ZASHIKI_EMBARK_STATE]: { redirect } }) => { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromOmega = ({ [ZASHIKI_OMEGA_STATE]: { redirect } }) => { // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

export function zashikiMiddleware (store) {
  function zashiki ({ type, ...rest }) {
    switch (type) {
      case ZASHIKI_OMEGA: // console.log('zashikiMiddleware():ZASHIKI_OMEGA', ZASHIKI_OMEGA, { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectFromOmega(state)
        }
        break
      case ZASHIKI_EMBARK: // console.log('zashikiMiddleware():ZASHIKI_EMBARK', ZASHIKI_EMBARK, { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectFromEmbark(state)
        }
        break
      case ZASHIKI_DEBARK: // console.log('zashikiMiddleware():ZASHIKI_DEBARK', ZASHIKI_DEBARK, { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectFromDebark(state)
        }
        break
      case ZASHIKI_ALPHA: // console.log('zashikiMiddleware():ZASHIKI_ALPHA', ZASHIKI_ALPHA, { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectFromAlpha(state)
        }
        break
    }

    // console.log('zashikiMiddleware():[-]', { ...rest, type }) // eslint-disable-line
    return { ...rest, type }
  }

  return (next) => (action) => (
    Promise.resolve(action)
      .then(next)
      .then(zashiki)
  )
}
