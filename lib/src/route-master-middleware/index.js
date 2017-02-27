import {
  browserHistory
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

const PATTERN = /STORE_/

export const routeMasterMiddleware = (store) => (next) => (action) => (
  Promise.resolve(action)
    .then(next)
    .then(({ type, ...rest }) => {
      if (PATTERN.test(type)) { // console.log('routeMasterMiddleware()', { ...rest, type }) // eslint-disable-line
        const {
          routeMaster: {
            resource
          }
        } = store.getState() // store in scope

        if (resource) {
          const {
            allStages,
            stageZero
          } = resource

          if (allStages || stageZero) {
            const pathname = Gears.path(Gears.pattern(), resource)
            const {
              pathname: PATHNAME
            } = browserHistory.getCurrentLocation()

            if (pathname !== PATHNAME) browserHistory.push(pathname)
          }
        }
      }
      return { ...rest, type }
    })
)
