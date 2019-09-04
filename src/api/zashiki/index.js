/**
 * Zashiki API
 */
import {
  request
} from '@modernpoacher/zashiki-react-redux/api'

export const changeRoute = (route) => request.patch('zashiki/stages/change', route)

export const fetchRoute = () => request.get('zashiki/stages/fetch')

export const storeRoute = (route) => request.put('zashiki/stages/store', route)

export const queryRoute = () => request.get('zashiki/stages/query')
