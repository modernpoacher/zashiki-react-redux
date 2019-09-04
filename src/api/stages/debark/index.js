/**
 * Zashiki: Debark API
 */
import {
  request
} from '@modernpoacher/zashiki-react-redux/api'

export const submitRoute = (route) => request.post('zashiki/debark', route)

export const fetchRoute = () => request.get('zashiki/debark/fetch')

export const storeRoute = (route) => request.put('zashiki/debark/store', route)
