/*
 *  Zashiki API
 */
import api from '@modernpoacher/zashiki-react-redux/api'

export const changeRoute = (route) => api().patch('zashiki/stages/change', route)

export const fetchRoute = () => api().get('zashiki/stages/fetch')

export const storeRoute = (route) => api().put('zashiki/stages/store', route)

export const queryRoute = () => api().get('zashiki/stages/query')
