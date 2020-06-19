import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

const IndexLink = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

IndexLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

IndexLink.defaultProps = {
  href: '/',
  text: 'Index Page'
}

export default IndexLink
