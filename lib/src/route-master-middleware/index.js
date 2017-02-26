import {
  browserHistory
} from 'react-router'

import {
  Gears
} from 'react-gears/lib'

const PATTERN = /STORE_/
const pattern = Gears.pattern()

export const routeMasterMiddleware = (store) => (next) => (action) => (
  Promise.resolve(action)
    .then(next)
    .then(({ type, ...rest }) => {
      if (PATTERN.test(type)) { // console.log('routeMasterMiddleware()', type) // eslint-disable-line
        const {
          routeMaster: {
            resource
          }
        } = store.getState()

        if (resource) {
          const {
            allStages,
            stageZero
          } = resource

          if (allStages || stageZero) {
            const pathname = Gears.path(pattern, resource)
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
