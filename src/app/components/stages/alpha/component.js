import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Zashiki from '@modernpoacher/zashiki-react-redux/app/components/zashiki/component'

import Complete from './status/complete'
import Failure from './status/failure'
import Success from './status/success'
import InProgress from './status/in-progress'
import NoDecision from './status/no-decision'
import Pending from './status/pending'

const log = debug('zashiki-react-redux:app:components:stages:alpha')

export const getErrorProps = ({ exception }) => exception
export const getStageProps = ({ state, resource, definitions, gears, onChange, onSubmit }) => ({ state, resource, definitions, gears, onChange, onSubmit })

log('`Alpha Stage` is awake')

export default class Stage extends Zashiki {
  render () {
    const {
      status,
      ...alpha
    } = this.props

    switch (status) {
      case Signals.FAILURE:
        return (
          <Failure
            {...getErrorProps(alpha)} />
        )
      case Signals.SUCCESS:
        return (
          <Success
            {...getStageProps(alpha)} />
        )
      case Signals.IN_PROGRESS:
        return (
          <InProgress
            {...getStageProps(alpha)} />
        )
      case Signals.NO_DECISION:
        return (
          <NoDecision
            {...getStageProps(alpha)} />
        )
      case Signals.COMPLETE:
        return (
          <Complete
            {...getStageProps(alpha)} />
        )
      case Signals.PENDING:
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
