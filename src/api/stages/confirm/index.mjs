/*
 *  Zashiki/Embark API
 */
import api from '#api'

export const fetchRoute = () => api().get('zashiki/confirm/fetch')

export const storeRoute = (route) => api().put('zashiki/confirm/store', route)

export const submitState = (route) => api().post('zashiki/confirm', route)
