/**
 *  Zashiki/Embark API
 */
import api from '@modernpoacher/zashiki-react-redux/api'

export const submitRoute = (route) => api().post('zashiki/embark', route)

export const fetchRoute = () => api().get('zashiki/embark/fetch')

export const storeRoute = (route) => api().put('zashiki/embark/store', route)
