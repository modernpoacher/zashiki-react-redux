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

class AllStagesPage extends RouteMaster {
  render () {
    console.log('(AllStagesPage)render()', this.props.routeMaster.definition)

    const {
      stageZero,
      allStages
    } = this.props.routeMaster

    console.log(stageZero, allStages)

    return (
      <section>
        <header>
          <h1>All Stages</h1>
        </header>
        <AllStages />
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
