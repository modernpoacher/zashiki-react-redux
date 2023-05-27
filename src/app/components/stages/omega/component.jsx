import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

import Resolved from './status/resolved/index.jsx'
import Rejected from './status/rejected/index.jsx'
import Pending from './status/pending/index.jsx'

import getStageProps from './get-stage-props.mjs'
import getErrorProps from './get-error-props.mjs'

const log = debug('zashiki-react-redux/app/components/stages/omega/component')

log('`zashiki` is awake')

export default class Stage extends Zashiki {
  render () {
    const {
      status,
      ...omega
    } = this.props

    switch (status) {
      case RESOLVED:
        return (
          <Resolved
            {...getStageProps(omega)}
          />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(omega)} />
        )
      case PENDING:
        return (
          <Pending />
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
    definition: PropTypes.shape().isRequired,
    response: PropTypes.shape().isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    resource: PropTypes.shape().isRequired,
    exception: PropTypes.shape().isRequired,
    response: PropTypes.shape().isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired
