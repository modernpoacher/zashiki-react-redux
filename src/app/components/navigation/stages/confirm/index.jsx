import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

const DEFAULT_HREF = getConfirmRoute()
const DEFAULT_TEXT = 'Confirm Stage'

const ConfirmStageLink = ({ href = DEFAULT_HREF, text = DEFAULT_TEXT }) => (
  <Link to={href}>
    {text}
  </Link>
)

ConfirmStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default ConfirmStageLink
