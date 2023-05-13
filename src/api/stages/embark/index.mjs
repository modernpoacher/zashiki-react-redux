/*
 *  Zashiki/Embark API
 */
import api from '#api'

export const fetchRoute = () => api().get('zashiki/embark/fetch')

export const storeRoute = (route) => api().put('zashiki/embark/store', route)

export const submitState = (route) => api().post('zashiki/embark', route)
