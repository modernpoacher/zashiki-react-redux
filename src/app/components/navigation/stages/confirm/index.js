import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getConfirmRoute from '@modernpoacher/zashiki-react-redux/app/common/get-confirm-route'

const ConfirmStagePage = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

ConfirmStagePage.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

ConfirmStagePage.defaultProps = {
  href: getConfirmRoute(),
  text: 'Confirm Stage'
}

export default ConfirmStagePage
