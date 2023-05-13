import axios from 'axios'
import utils from 'axios/lib/utils'
import equal from 'fast-deep-equal'

let SETTINGS

function configure (request) {
  /*
   *  Destructure the necessary fields
   */
  const {
    protocol,
    host,
    port,
    path,
    version,
    bearerToken,
    zid
  } = request

  /*
   *  Restructure the necessary fields
   */
  const settings = {
    protocol,
    host,
    port,
    path,
    version,
    bearerToken,
    zid
  }

  /*
   *  Compare these settings with the current settings
   */
  if (!equal(SETTINGS, settings)) {
    /*
     *  Destructure the defaults and common from axios
     */
    const {
      defaults,
      defaults: {
        headers: {
          common
        }
      }
    } = axios

    common.Accept = 'application/json; charset=utf-8'

    if (bearerToken) {
      common.Authorization = `Bearer ${bearerToken}`
    } else {
      delete common.Authorization
    }

    if (utils.isStandardBrowserEnv()) {
      delete defaults.headers.Cookie
    } else {
      defaults.headers.Cookie = `zid=${zid}`
    }

    defaults.withCredentials = true
    defaults.baseURL = `${protocol}://${host}:${port}/${path}/${version}`

    /*
     *  Assign these settings as the current settings
     */
    SETTINGS = settings
  }
}

export default (store) => {
  /*
   *  On initialisation
   */
  const {
    zashiki: {
      request
    } = {}
  } = store.getState()

  if (request) configure(request)

  return (next) => (action) => {
    /*
     *  Per request
     */
    const {
      zashiki: {
        request
      } = {}
    } = store.getState()

    if (request) configure(request)

    return next(action)
  }
}
