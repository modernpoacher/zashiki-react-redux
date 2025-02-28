import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '#zashiki-react-redux/app/common'

import Zashiki from '#zashiki-react-redux/app/components/zashiki/component'

import Resolved from '#zashiki-react-redux/app/components/stages/alpha/status/resolved'
import Rejected from '#zashiki-react-redux/app/components/stages/alpha/status/rejected'
import Pending from '#zashiki-react-redux/app/components/stages/alpha/status/pending'

import getStageProps from './get-stage-props.mjs'
import getErrorProps from './get-error-props.mjs'

const log = debug('zashiki-react-redux/app/components/stages/alpha/component')

log('`zashiki` is awake')

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
    resource: PropTypes.shape({}).isRequired,
    definitions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    resource: PropTypes.shape({}).isRequired,
    exception: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired
