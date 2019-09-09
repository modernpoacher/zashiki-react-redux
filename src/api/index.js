import axios from 'axios'

let INSTANCE

export default () => INSTANCE || (INSTANCE = axios.create())
