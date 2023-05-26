import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#app/common'

import Zashiki from '#app/components/zashiki/component'

import Resolved from './status/resolved/index.jsx'
import Rejected from './status/rejected/index.jsx'
import Pending from './status/pending/index.jsx'

const log = debug('zashiki-react-redux/app/components/stages/alpha/component')

log('`zashiki` is awake')

export const getStageProps = ({ state, resource, definitions, gears, onChange, onSubmit }) => ({ state, resource, definitions, gears, onChange, onSubmit })
export const getErrorProps = ({ exception }) => exception

export default class Stage extends Zashiki {
  render () {
    const {
      status,
      ...alpha
    } = this.props

    switch (status) {
      case RESOLVED:
        return (
          <Resolved
            {...getStageProps(alpha)}
          />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(alpha)}
          />
        )
      case PENDING:
        return (
          <Pending
            {...getStageProps(alpha)}
          />
        )
    }

    return null
  }
}

Stage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    resource: PropTypes.shape().isRequired,
    definitions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    resource: PropTypes.shape().isRequired,
    exception: PropTypes.shape().isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired
