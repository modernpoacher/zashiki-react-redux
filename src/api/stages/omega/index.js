/**
 *  Zashiki/Omega API
 */
import {
  getTransport
} from '@modernpoacher/zashiki-react-redux/api'

export const changeRoute = (route) => getTransport().patch('zashiki/stages/change', route)

export const fetchRoute = () => getTransport().get('zashiki/stages/fetch')

export const storeRoute = (route) => getTransport().put('zashiki/stages/store', route)

export const queryRoute = () => getTransport().get('zashiki/stages/query')
