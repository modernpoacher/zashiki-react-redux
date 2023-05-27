import {
  renderToString
} from '@modernpoacher/isomorphic/react-router/redux'

import configureStore from '@modernpoacher/zashiki-react-redux/app/store'
import routes from '@modernpoacher/zashiki-react-redux/app/routes'

export {
  initialise as initialiseEmbark
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/embark'

export {
  initialise as initialiseAlpha
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/alpha'

export {
  initialise as initialiseOmega
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/omega'

export {
  initialise as initialiseDebark
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/debark'

export {
  initialise as initialiseConfirm
} from '@modernpoacher/zashiki-react-redux/app/reducers/stages/confirm'

export default (state, location) => renderToString(configureStore(state), { location }, routes)
