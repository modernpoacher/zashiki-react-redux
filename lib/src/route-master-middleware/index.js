import {
  browserHistory
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

const PATTERN = '/:alpha/:omega'

const ROUTE_MASTER_DEBARK = 'ROUTE_MASTER_DEBARK'
const ROUTE_MASTER_EMBARK = 'ROUTE_MASTER_EMBARK'
const ROUTE_MASTER = 'ROUTE_MASTER_QUERY'

const ROUTE_MASTER_DEBARK_STATE = 'debark'
const ROUTE_MASTER_EMBARK_STATE = 'embark'
const ROUTE_MASTER_STATE = 'routeMaster'

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

const REDIRECT = ({ alpha, omega, [ROUTE_MASTER_DEBARK_STATE]: debark, [ROUTE_MASTER_EMBARK_STATE]: embark }) => { // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_ROUTE({ alpha, omega })
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark })
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark })
  }
}

const redirectRoute = ({ [ROUTE_MASTER_STATE]: { redirect } }) => { // console.log('redirectRoute()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromDebark = ({ [ROUTE_MASTER_DEBARK_STATE]: { redirect } }) => { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromEmbark = ({ [ROUTE_MASTER_EMBARK_STATE]: { redirect } }) => { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

export function routeMasterMiddleware (store) {
  function routeMaster ({ type, ...rest }) {
    switch (type) {
      case ROUTE_MASTER: // console.log('routeMasterMiddleware():ROUTE_MASTER', { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectRoute(state)
        }
        break
      case ROUTE_MASTER_DEBARK: // console.log('routeMasterMiddleware():ROUTE_MASTER_DEBARK', { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectFromDebark(state)
        }
        break
      case ROUTE_MASTER_EMBARK: // console.log('routeMasterMiddleware():ROUTE_MASTER_EMBARK', { ...rest, type }) // eslint-disable-line
        {
          const state = store.getState()

          redirectFromEmbark(state)
        }
        break
    }

    // console.log('routeMasterMiddleware():[-]', { ...rest, type }) // eslint-disable-line
    return { ...rest, type }
  }

  return (next) => (action) => (
    Promise.resolve(action)
      .then(next)
      .then(routeMaster)
  )
}
