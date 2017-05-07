import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Zashiki,
  Navigation
} from '../../components'

import {
  AlphaStage
} from '../../components/stages'

import * as AlphaStageActions from '../../actions/stages/alpha-stage'

const ZASHIKI_STATE = 'zashiki'

class AlphaStagePage extends Zashiki {
  onSubmit = (resource, response) => {
    const {
      dispatch
    } = this.props

    dispatch(AlphaStageActions.store(resource, response))
  }

  render () { // // console.log('(AlphaStagePage)render()', this.props) // eslint-disable-line
    const {
      [ZASHIKI_STATE]: alpha = {}
    } = this.props

    return (
      <section>
        <header>
          <h1>Alpha Stage</h1>
        </header>
        <AlphaStage
          onSubmit={this.onSubmit}
          alpha={alpha} />
        <Navigation />
      </section>
    )
  }
}

AlphaStagePage.propTypes = {
  ...Zashiki.propTypes
}

export default connect(
  ({ [ZASHIKI_STATE]: alpha }) => ({ [ZASHIKI_STATE]: alpha })
)(AlphaStagePage)
