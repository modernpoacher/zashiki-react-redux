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

const ZASHIKI_STATE = 'zashiki'

class OmegaStagePage extends Zashiki {
  onSubmit = (response) => {
    const {
      dispatch,
      [ZASHIKI_STATE]: {
        resource
      }
    } = this.props

    dispatch(OmegaStageActions.store(resource, response))
  }

  render () { // // console.log('(OmegaStagePage)render()') // eslint-disable-line
    const {
      [ZASHIKI_STATE]: omega = {}
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
  ({ [ZASHIKI_STATE]: omega }) => ({ [ZASHIKI_STATE]: omega })
)(OmegaStagePage)
