import React from 'react'
import {
  Link
} from 'react-router-dom'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

export default () => (
  <Link to={getDebarkRoute()}>
    Debark Stage
  </Link>
)
