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

class StageZeroPage extends RouteMaster {
  render () {
    console.log('(StageZeroPage)render()', this.props.routeMaster.definition)

    const {
      stageZero,
      allStages
    } = this.props.routeMaster

    console.log(stageZero, allStages)

    return (
      <section>
        <header>
          <h1>Stage Zero</h1>
        </header>
        <StageZero />
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
