import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  RESOLVED,
  REJECTED,
  PENDING
} from '@modernpoacher/zashiki-react-redux/app/common'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

import Resolved from './status/resolved'
import Rejected from './status/rejected'
import Pending from './status/pending'

const log = debug('zashiki-react-redux:app:components:stages:alpha:component')

export const getStageProps = ({ state, resource, definitions, gears, onChange, onSubmit }) => ({ state, resource, definitions, gears, onChange, onSubmit })
export const getErrorProps = ({ exception }) => exception

log('`Alpha Stage` is awake')

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
            {...getStageProps(alpha)} />
        )
      case REJECTED:
        return (
          <Rejected
            {...getErrorProps(alpha)} />
        )
      case PENDING:
        return (
          <Pending
            {...getStageProps(alpha)} />
        )
    }

    return null
  }
}

Stage.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    resource: PropTypes.object.isRequired,
    definitions: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  PropTypes.shape({
    ...Zashiki.propTypes,
    status: PropTypes.number.isRequired,
    resource: PropTypes.object.isRequired,
    exception: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  })
]).isRequired
