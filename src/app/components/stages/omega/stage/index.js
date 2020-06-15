import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Gears from 'shinkansen-engine/lib/components/gears'
import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'

const log = debug('zashiki-react-redux:app:components:stages:omega:stage')

log('`Omega Stage` is awake')

export default class Stage extends Component {
  getClassName () {
    return 'omega'
  }

  render () {
    const {
      state: {
        index,
        count
      }
    } = this.props

    if (index || count) {
      const {
        resource,
        definition,
        response,
        errors,
        onChange,
        onSubmit,
        gears: {
          reverse,
          forward
        }
      } = this.props

      return (
        <div className={this.getClassName()}>
          <Omega
            resource={resource}
            definition={definition}
            response={response}
            errors={errors}
            onChange={onChange}
            onSubmit={onSubmit} />
          <Gears
            reverse={reverse}
            forward={forward}
            pattern={Signals.OMEGA_PATTERN} />
        </div>
      )
    }

    return null
  }
}

Stage.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  resource: PropTypes.object,
  definition: PropTypes.object,
  response: PropTypes.object,
  errors: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  gears: PropTypes.shape({
    forward: PropTypes.object,
    reverse: PropTypes.object
  })
}

Stage.defaultProps = {
  state: {},
  gears: {}
}
