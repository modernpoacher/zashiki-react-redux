import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

const DEFAULT_HREF = getDebarkRoute()
const DEFAULT_TEXT = 'Debark Stage'

function DebarkStageLink ({
  href = DEFAULT_HREF,
  text = DEFAULT_TEXT
}) {
  return (
    <Link to={href}>
      {text}
    </Link>
  )
}

DebarkStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default DebarkStageLink
