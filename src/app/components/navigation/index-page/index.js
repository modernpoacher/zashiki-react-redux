import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

const IndexPage = ({ href, text }) => (
  <Link to={href}>
    {text}
  </Link>
)

IndexPage.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

IndexPage.defaultProps = {
  href: '/',
  text: 'Index Page'
}

export default IndexPage
