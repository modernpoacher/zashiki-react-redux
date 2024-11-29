import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

const DEFAULT_HREF = '/'
const DEFAULT_TEXT = 'Index Page'

const IndexLink = ({ href = DEFAULT_HREF, text = DEFAULT_TEXT }) => (
  <Link to={href}>
    {text}
  </Link>
)

IndexLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default IndexLink
