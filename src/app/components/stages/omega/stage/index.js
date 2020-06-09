import React from 'react'
import PropTypes from 'prop-types'

import Signals from 'shinkansen-engine/lib/components/signals'

import Gears from 'shinkansen-engine/lib/components/gears'

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
        onChange,
        onSubmit,
        resource,
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
            onChange={onChange}
            onSubmit={onSubmit}
            resource={resource}
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
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    index: PropTypes.number,
    count: PropTypes.number
  }),
  resource: PropTypes.object, // .isRequired,
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
