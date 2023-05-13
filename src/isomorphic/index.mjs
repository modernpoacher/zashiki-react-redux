import {
  renderToString
} from '@modernpoacher/isomorphic/react-router/redux'

import configureStore from '#app/store'
import routes from '#app/routes'

export {
  initialise as initialiseEmbark
} from '#app/reducers/stages/embark'

export {
  initialise as initialiseAlpha
} from '#app/reducers/stages/alpha'

export {
  initialise as initialiseOmega
} from '#app/reducers/stages/omega'

export {
  initialise as initialiseDebark
} from '#app/reducers/stages/debark'

export {
  initialise as initialiseConfirm
} from '#app/reducers/stages/confirm'

export default (state, location) => renderToString(configureStore(state), { location }, routes)
