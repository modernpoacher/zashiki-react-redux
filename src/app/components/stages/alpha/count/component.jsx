import React from 'react'
import PropTypes from 'prop-types'

const Count = ({ index, count }) => (
  <h3>{index + 1} of {count}</h3>
)

Count.propTypes = {
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
}

export default Count
