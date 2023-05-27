import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

const DebarkStageLink = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

DebarkStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

DebarkStageLink.defaultProps = {
  href: getDebarkRoute(),
  text: 'Debark Stage'
}

export default DebarkStageLink
