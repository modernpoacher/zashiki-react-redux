import {
  browserHistory
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

const HALT_STAGE = /HALT_STAGE_EMBARK|HALT_STAGE_DEBARK/
const LIST_STAGE = /LIST_STAGE_EMBARK|LIST_STAGE_DEBARK/
const ROUTE_MASTER = /ROUTE_MASTER_QUERY|ROUTE_MASTER_EMBARK|ROUTE_MASTER_DEBARK/

const HALT_STAGE_STATE = 'haltStage'
const LIST_STAGE_STATE = 'listStage'

const REDIRECT_ROUTE = (route) => {
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = Gears.path(Gears.pattern(), route)

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT_TO_HALT_STAGE = ({ haltStage }) => {
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = `/${haltStage}`

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT_TO_LIST_STAGE = ({ listStage }) => {
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = `/${listStage}`

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT = ({ allStages, stageZero, haltStage, listStage }) => {
  if (allStages && stageZero) {
    REDIRECT_ROUTE({ allStages, stageZero })
  } else if (haltStage) {
    REDIRECT_TO_HALT_STAGE({ haltStage })
  } else if (listStage) {
    REDIRECT_TO_LIST_STAGE({ listStage })
  }
}

export function routeMasterMiddleware (store) {
  function routeMaster ({ type, ...rest }) {
    if (ROUTE_MASTER.test(type)) { // console.log('routeMasterMiddleware():ROUTE_MASTER.test(type)', { ...rest, type }) // eslint-disable-line
      const {
        routeMaster: {
          redirect
        }
      } = store.getState() // store in scope

      if (redirect) REDIRECT(redirect)
    } else if (HALT_STAGE.test(type)) { // console.log('routeMasterMiddleware():HALT_STAGE.test(type)', { ...rest, type }) // eslint-disable-line
      const {
        [HALT_STAGE_STATE]: {
          redirect
        }
      } = store.getState() // store in scope

      if (redirect) REDIRECT(redirect)
    } else if (LIST_STAGE.test(type)) { // console.log('routeMasterMiddleware():LIST_STAGE.test(type)', { ...rest, type }) // eslint-disable-line
      const {
        [LIST_STAGE_STATE]: {
          redirect
        }
      } = store.getState() // store in scope

      if (redirect) REDIRECT(redirect)
    }
    /**
     *  Always fall through ...
     */
    return { ...rest, type }
  }

  return (next) => (action) => (
    Promise.resolve(action)
      .then(next)
      .then(routeMaster)
  )
}
