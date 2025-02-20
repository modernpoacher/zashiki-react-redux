import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

const DEFAULT_HREF = '/'
const DEFAULT_TEXT = 'Index Page'

function IndexLink ({ href = DEFAULT_HREF, text = DEFAULT_TEXT }) {
  return (
    <Link to={href}>
      {text}
    </Link>
  )
}

IndexLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default IndexLink
