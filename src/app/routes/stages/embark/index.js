import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {
  connect
} from 'react-redux'
import {
  Signals
} from 'shinkansen-signals'

import {
  fetch,
  submit
} from '@modernpoacher/zashiki-react-redux/app/actions/stages/embark'

import {
  Navigation
} from '@modernpoacher/zashiki-react-redux/app/components'

import {
  transform
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

import {
  EmbarkStage
} from '@modernpoacher/zashiki-react-redux/app/components/stages'

const {
  EMBARK
} = Signals

class EmbarkStagePage extends React.Component {
  /**
   *  List routes
   */
  componentDidMount () { // console.log('(EmbarkStagePage)componentDidMount()') // eslint-disable-line
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(fetch())
  }

  onSubmit = (response) => {
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(submit(response))
  }

  render () { // console.log('(EmbarkStagePage)render()') // eslint-disable-line
    const {
      embark
    } = this.props

    return (
      <section>
        <header>
          <h1>Embark Route</h1>
        </header>
        <EmbarkStage
          onSubmit={this.onSubmit}
          embark={embark} />
        <Navigation />
      </section>
    )
  }
}

EmbarkStagePage.propTypes = {
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  embark: PropTypes.shape({
    status: PropTypes.number.isRequired,
    definition: PropTypes.object
  })
}

export default connect(
  ({ [EMBARK]: embark = {} }) => ({ embark: transform(embark) })
)(EmbarkStagePage)
