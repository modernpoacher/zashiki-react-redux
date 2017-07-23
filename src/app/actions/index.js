/**
 * Constants and helper functions for the actions
 */
import axios from 'axios'

const AXIOS = ('AXIOS' in global)
  ? global.AXIOS
  : process.env

const {
  API_PROTOCOL,
  API_HOST,
  API_PORT,
  API_BASEURL,
  API_VERSION
} = AXIOS

const {
  defaults
} = axios

defaults.withCredentials = true
defaults.headers.common['Accept'] = 'application/json; charset=utf-8'
defaults.baseURL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}/${API_BASEURL}/${API_VERSION}`

export request from 'axios'
