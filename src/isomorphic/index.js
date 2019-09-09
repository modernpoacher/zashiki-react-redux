import {
  renderToString
} from '@modernpoacher/isomorphic/lib/react-router/redux'

import configureStore from '@modernpoacher/zashiki-react-redux/app/store'
import routes from '@modernpoacher/zashiki-react-redux/app/routes'

export default (state, location) => renderToString(configureStore(state), { location }, routes)
