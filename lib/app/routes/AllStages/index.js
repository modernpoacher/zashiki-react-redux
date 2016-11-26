import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  RouteMaster,
  Navigation
} from '../../components'

import {
  AllStages
} from '../../components/stages'

import * as RouteMasterActions from '../../actions/route-master'

class AllStagesPage extends RouteMaster {
  onSubmit = (formData) => {
    const {
      dispatch
    } = this.props

    dispatch(RouteMasterActions.storeRoute(formData))
  }

  render () { // console.log('(AllStagesPage)render()') // eslint-disable-line
    const {
      stageZero,
      allStages,
      definition
    } = this.props.routeMaster

    return (
      <section>
        <header>
          <h1>All Stages</h1>
        </header>
        <AllStages
          onSubmit={this.onSubmit}
          allStages={{ definition, reverse: { stageZero, allStages }, forward: { stageZero, allStages } }} />
        <Navigation />
      </section>
    )
  }
}

export default connect(
  (state) => ({
    routeMaster: state.routeMaster
  })
)(AllStagesPage)
