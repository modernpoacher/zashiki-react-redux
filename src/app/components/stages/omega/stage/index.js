import React from 'react'
import PropTypes from 'prop-types'

import {
  Signals
} from 'shinkansen-signals'

import {
  Gears
} from 'shinkansen-gears'

import Count from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/count'
import Omega from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/omega'

export default class OmegaStage extends React.Component {
  render () { // console.log('(OmegaStage)render()') // eslint-disable-line
    const {
      state: {
        index,
        count
      }
    } = this.props

    if (index || count) {
      const {
        onSubmit,
        definition,
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
            onSubmit={onSubmit}
            definition={definition} />
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
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  definition: PropTypes.object.isRequired,
  gears: PropTypes.shape({
    forward: PropTypes.object,
    reverse: PropTypes.object
  })
}

OmegaStage.defaultProps = {
  state: {},
  gears: {}
}
