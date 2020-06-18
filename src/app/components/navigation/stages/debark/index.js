import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getDebarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-debark-route'

const DebarkStage = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

DebarkStage.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

DebarkStage.defaultProps = {
  href: getDebarkRoute(),
  text: 'Debark Stage'
}

export default DebarkStage
