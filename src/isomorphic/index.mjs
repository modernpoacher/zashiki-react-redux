import {
  renderToString
} from '@modernpoacher/isomorphic/react-router/redux'

import configureStore from '#zashiki-react-redux/app/store'
import routes from '#zashiki-react-redux/app/routes'

export {
  initialise as initialiseEmbark
} from '#zashiki-react-redux/app/reducers/stages/embark'

export {
  initialise as initialiseAlpha
} from '#zashiki-react-redux/app/reducers/stages/alpha'

export {
  initialise as initialiseOmega
} from '#zashiki-react-redux/app/reducers/stages/omega'

export {
  initialise as initialiseDebark
} from '#zashiki-react-redux/app/reducers/stages/debark'

export {
  initialise as initialiseConfirm
} from '#zashiki-react-redux/app/reducers/stages/confirm'

export default (state, location) => renderToString(configureStore(state), { location }, routes)
