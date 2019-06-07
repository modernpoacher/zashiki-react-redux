import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import {
  Signals
} from 'shinkansen-signals'

import {
  Zashiki,
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/alpha'

import { submit, change } from '@modernpoacher/zashiki-react-redux/app/actions/stages/alpha'

import {
  AlphaStage
} from '@modernpoacher/zashiki-react-redux/app/components/stages'

const {
  ALPHA
} = Signals

class AlphaStagePage extends Zashiki {
  render () { // console.log('(AlphaStagePage)render()') // eslint-disable-line
    const {
      onSubmit,
      ...props
    } = this.props

    return (
      <section>
        <header>
          <h1>Alpha Stage</h1>
        </header>
        <AlphaStage
          {...props}
          onSubmit={onSubmit} />
        <Navigation />
      </section>
    )
  }
}

AlphaStagePage.propTypes = {
  ...Zashiki.propTypes
}

const mapStateToProps = ({ [ALPHA]: alpha = {} }) => ({ ...transform(alpha) })

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (resource, response) => {
    dispatch(submit(resource, response))
  },
  onChange: (resource) => {
    dispatch(change(resource))
  }
})

const mergeProps = (stateProps, { onSubmit, onChange }, ownProps) => ({
  ...stateProps,
  onSubmit,
  onChange,
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AlphaStagePage)
