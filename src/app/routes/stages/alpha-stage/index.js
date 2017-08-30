import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Zashiki,
  Navigation
} from 'zashiki-react-redux/app/components'

import {
  AlphaStage
} from 'zashiki-react-redux/app/components/stages'

import * as AlphaStageActions from 'zashiki-react-redux/app/actions/stages/alpha-stage'

class AlphaStagePage extends Zashiki {
  onSubmit = (resource, response) => {
    const {
      dispatch
    } = this.props

    dispatch(AlphaStageActions.store(resource, response))
  }

  render () { // console.log('(AlphaStagePage)render()') // eslint-disable-line
    const {
      alpha
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
  ({ zashiki: alpha = {} }) => ({ alpha })
)(AlphaStagePage)
