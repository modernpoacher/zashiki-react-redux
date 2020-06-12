import React from 'react'
import {
  Link
} from 'react-router-dom'

import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

export default () => (
  <Link to={getConfirmRoute()}>
    Confirm Stage
  </Link>
)
