import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

const ConfirmStage = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

ConfirmStage.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

ConfirmStage.defaultProps = {
  href: getConfirmRoute(),
  text: 'Confirm Stage'
}

export default ConfirmStage
