import React from 'react'
import {
  Link
} from 'react-router-dom'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

export default () => (
  <Link to={getEmbarkRoute()}>
    Embark Stage
  </Link>
)
