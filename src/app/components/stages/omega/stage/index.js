import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import Signals from 'shinkansen-engine/lib/components/signals'

import Gears from 'shinkansen-engine/lib/components/gears'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/count'
import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'

const log = debug('zashiki-react-redux:app:components:stages:omega:stage')

log('`OmegaStage` is awake')

export default class OmegaStage extends React.Component {
  render () {
    log('render')

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
        onChange,
        onSubmit,
        gears: {
          reverse,
          forward
        }
      } = this.props

      return (
        <div className='omega'>
          <Count
            index={index}
            count={count} />
          <Omega
            resource={resource}
            definition={definition}
            response={response}
            onChange={onChange}
            onSubmit={onSubmit} />
          <Gears
            reverse={reverse}
            forward={forward}
            pattern={Signals.OMEGA_PATTERN} />
        </div>
      )
    }

    return false
  }
}

OmegaStage.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  resource: PropTypes.object, // .isRequired,
  definition: PropTypes.object, // .isRequired,
  response: PropTypes.object, // .isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  gears: PropTypes.shape({
    forward: PropTypes.object,
    reverse: PropTypes.object
  })
}

OmegaStage.defaultProps = {
  state: {},
  gears: {}
}
