import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

import getConfirmRoute from '#zashiki-react-redux/app/common/get-confirm-route'

const DEFAULT_HREF = getConfirmRoute()
const DEFAULT_TEXT = 'Confirm Stage'

function ConfirmStageLink ({
  href = DEFAULT_HREF,
  text = DEFAULT_TEXT
}) {
  return (
    <Link to={href}>
      {text}
    </Link>
  )
}

ConfirmStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default ConfirmStageLink
