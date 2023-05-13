import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import getEmbarkRoute from '#app/common/get-embark-route'

const EmbarkStageLink = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

EmbarkStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

EmbarkStageLink.defaultProps = {
  href: getEmbarkRoute(),
  text: 'Embark Stage'
}

export default EmbarkStageLink
