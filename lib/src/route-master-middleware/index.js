import {
  browserHistory
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

const LIST_STAGE = /LIST_STAGE_STORE/
const HALT_STAGE = /HALT_STAGE_STORE/

const ROUTE_MASTER = /ROUTE_MASTER_STORE/

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

export const routeMasterMiddleware = (store) => (next) => (action) => (
  Promise.resolve(action)
    .then(next)
    .then(({ type, ...rest }) => {
      if (ROUTE_MASTER.test(type)) { // // console.log('routeMasterMiddleware():ROUTE_MASTER.test(type)', { ...rest, type }) // eslint-disable-line
        const {
          routeMaster: {
            resource
          }
        } = store.getState() // store in scope

        if (resource) REDIRECT(resource)
      } else if (HALT_STAGE.test(type)) { // // console.log('routeMasterMiddleware():HALT_STAGE.test(type)', { ...rest, type }) // eslint-disable-line
        const {
          haltStage: {
            resource
          }
        } = store.getState() // store in scope

        if (resource) REDIRECT(resource)
      } else if (LIST_STAGE.test(type)) { // // console.log('routeMasterMiddleware():LIST_STAGE.test(type)', { ...rest, type }) // eslint-disable-line
        const {
          listStage: {
            resource
          }
        } = store.getState() // store in scope

        if (resource) REDIRECT(resource)
      }
      /**
       *  Always fall through ...
       */
      return { ...rest, type }
    })
)
