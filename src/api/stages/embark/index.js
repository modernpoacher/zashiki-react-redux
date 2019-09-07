/**
 *  Zashiki/Embark API
 */
import {
  getTransport
} from '@modernpoacher/zashiki-react-redux/api'

export const submitRoute = (route) => getTransport().post('zashiki/embark', route)

export const fetchRoute = () => getTransport().get('zashiki/embark/fetch')

export const storeRoute = (route) => getTransport().put('zashiki/embark/store', route)
