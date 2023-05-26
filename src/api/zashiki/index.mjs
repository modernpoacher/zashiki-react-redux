/*
 *  Zashiki API
 */
import api from '#api'

export const changeRoute = (route) => api().patch('zashiki/stages/change', route)

export const fetchRoute = () => api().get('zashiki/stages/fetch')

export const storeRoute = (route) => api().put('zashiki/stages/store', route)

export const queryRoute = () => api().get('zashiki/stages/query')

export const submitRoute = () => api().post('zashiki/stages') // ? Index
