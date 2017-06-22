import React from 'react'
import PropTypes from 'prop-types'
import {
  Signals
} from 'shinkansen-signals'
import {
  Motor
} from 'shinkansen-motor'
import {
  transform
} from '../../../transformers/stages/embark-stage'

export default class EmbarkStage extends React.Component {
  createComplete () { // console.log('createComplete()')
    const {
      onSubmit,
      embark
    } = this.props

    const {
      definition
    } = transform(embark)

    return (
      <div className='embark-stage'>
        <Motor
          onSubmit={onSubmit}
          definition={definition} />
      </div>
    )
  }

  createPending () { // console.log('createPending()')
    return (
      <h2>Pending</h2>
    )
  }

  create (status) {
    switch (status) {
      case Signals.COMPLETE: return this.createComplete()
      default:
        return this.createPending()
    }
  }

  render () { // console.log('(EmbarkStage)render()') // eslint-disable-line
    const {
      embark: {
        status
      }
    } = this.props

    return (
      <div className='embark-stage'>
        {this.create(status)}
      </div>
    )
  }
}

EmbarkStage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  embark: PropTypes.object.isRequired
}

EmbarkStage.defaultProps = {
  onSubmit: () => {} /* no op */
}
