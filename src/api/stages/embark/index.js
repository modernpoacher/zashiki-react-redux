/**
 * Zashiki: Embark API
 */
import {
  request
} from '@modernpoacher/zashiki-react-redux/api'

export const submitRoute = (route) => request.post('zashiki/embark', route)

export const fetchRoute = () => request.get('zashiki/embark/fetch')

export const storeRoute = (route) => request.put('zashiki/embark/store', route)
