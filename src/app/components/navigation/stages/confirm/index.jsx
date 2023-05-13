import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getConfirmRoute from '#app/common/get-confirm-route'

const ConfirmStageLink = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

ConfirmStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

ConfirmStageLink.defaultProps = {
  href: getConfirmRoute(),
  text: 'Confirm Stage'
}

export default ConfirmStageLink
