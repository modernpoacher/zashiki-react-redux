/*
 *  Zashiki/Debark API
 */
import api from '#api'

export const fetchRoute = () => api().get('zashiki/debark/fetch')

export const storeRoute = (route) => api().put('zashiki/debark/store', route)

export const submitState = (route) => api().post('zashiki/debark', route)
