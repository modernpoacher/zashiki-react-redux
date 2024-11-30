import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

const DEFAULT_HREF = getEmbarkRoute()
const DEFAULT_TEXT = 'Embark Stage'

const EmbarkStageLink = ({ href = DEFAULT_HREF, text = DEFAULT_TEXT }) => (
  <Link to={href}>
    {text}
  </Link>
)

EmbarkStageLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default EmbarkStageLink
