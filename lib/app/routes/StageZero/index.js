import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

import {
  StageZero
} from '../../components/stages'

import * as RouteMasterActions from '../../actions/route-master'

class StageZeroPage extends RouteMaster {
  onSubmit = (formData) => {
    const {
      dispatch
    } = this.props

    dispatch(RouteMasterActions.storeRoute(formData))
  }

  render () { // console.log('(StageZeroPage)render()') // eslint-disable-line
    const {
      stageZero,
      allStages,
      definition
    } = this.props.routeMaster

    return (
      <section>
        <header>
          <h1>Stage Zero</h1>
        </header>
        <StageZero
          onSubmit={this.onSubmit}
          stageZero={{ definition, reverse: { stageZero, allStages }, forward: { stageZero, allStages } }} />
        <Navigation />
      </section>
    )
  }
}

export default connect(
  (state) => ({
    routeMaster: state.routeMaster
  })
)(StageZeroPage)
