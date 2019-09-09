import axios from 'axios'
import utils from 'axios/lib/utils'
import Immutable from 'immutable'

/*
 *  Create an Immutable Map
 */
let SETTINGS = Immutable.Map()

const configure = (request) => {
  /*
   *  Destructure only the necessary fields
   */
  const {
    protocol,
    host,
    port,
    path,
    version,
    bearerToken,
    session
  } = request

  /*
   *  Restructure the fields and create an Immutable Map
   */
  const settings = Immutable.Map({
    protocol,
    host,
    port,
    path,
    version,
    bearerToken,
    session
  })

  /*
   *  Compare the Map instances
   */
  if (!Immutable.is(SETTINGS, settings)) {
    /*
     *  Set the defaults
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
      defaults.headers.Cookie = `jid=${session}`
    }

    defaults.withCredentials = true
    defaults.baseURL = `${protocol}://${host}:${port}/${path}/${version}`

    /*
     *  Set this Immutable Map as the current settings
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
