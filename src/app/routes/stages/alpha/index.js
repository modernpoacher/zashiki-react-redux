import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import { submit } from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  Zashiki,
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

import {
  AlphaStage
} from '@modernpoacher/zashiki-react-redux/app/components/stages'

class AlphaStagePage extends Zashiki {
  onSubmit = (resource, response) => {
    const {
      dispatch
    } = this.props

    dispatch(submit(resource, response))
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
  ({ zashiki = {} }) => ({ alpha: transform(zashiki) })
)(AlphaStagePage)
