import {
  renderToString
} from '@modernpoacher/isomorphic/lib/react-router/redux'

import configureStore from '@modernpoacher/zashiki-react-redux/app/store'
import routes from '@modernpoacher/zashiki-react-redux/app/routes'

export default (state, location) => {
  const store = configureStore(state)

  try {
    return renderToString(store, { location }, routes)
  } catch (e) {
    return e
  }
}
