import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Zashiki,
  Navigation
} from '../../components'

import {
  OmegaStage
} from '../../components/stages'

import * as OmegaStageActions from '../../actions/stages/omega-stage'

class OmegaStagePage extends Zashiki {
  onSubmit = (response) => {
    const {
      dispatch,
      omega: {
        resource
      }
    } = this.props

    dispatch(OmegaStageActions.store(resource, response))
  }

  render () { // console.log('(OmegaStagePage)render()') // eslint-disable-line
    const {
      omega
    } = this.props

    return (
      <section>
        <header>
          <h1>Omega Stage</h1>
        </header>
        <OmegaStage
          onSubmit={this.onSubmit}
          omega={omega} />
        <Navigation />
      </section>
    )
  }
}

OmegaStagePage.propTypes = {
  ...Zashiki.propTypes
}

export default connect(
  ({ zashiki: omega = {} }) => ({ omega })
)(OmegaStagePage)
