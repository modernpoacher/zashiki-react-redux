import React from 'react'
import PropTypes from 'prop-types'

const Count = ({ index, count }) => (
  <h2>{index + 1} of {count}</h2>
)

Count.propTypes = {
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
}

export default Count
