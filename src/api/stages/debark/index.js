/**
 *  Zashiki/Debark API
 */
import {
  getTransport
} from '@modernpoacher/zashiki-react-redux/api'

export const submitRoute = (route) => getTransport().post('zashiki/debark', route)

export const fetchRoute = () => getTransport().get('zashiki/debark/fetch')

export const storeRoute = (route) => getTransport().put('zashiki/debark/store', route)
