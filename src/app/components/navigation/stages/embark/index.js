import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

const EmbarkStage = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

EmbarkStage.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

EmbarkStage.defaultProps = {
  href: getEmbarkRoute(),
  text: 'Embark Stage'
}

export default EmbarkStage
