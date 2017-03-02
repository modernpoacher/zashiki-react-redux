import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import * as ListStageActions from '../../actions/list-stage'

import {
  Navigation
} from '../../components'

import {
  ListStage
} from '../../components/stages'

const PENDING = 5

class ListStagePage extends React.Component {
  /**
   *  List routes
   */
  componentDidMount () { // // console.log('(ListStagePage)componentDidMount()') // eslint-disable-line
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(ListStageActions.fetch())
  }

  onSubmit = (response) => {
    const {
      dispatch
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(ListStageActions.store({ response }))
  }

  render () { // // console.log('(ListStagePage)render()') // eslint-disable-line
    const {
      listStage: {
        status, definition
      }
    } = this.props

    return (
      <section>
        <header>
          <h1>List Stage</h1>
        </header>
        <ListStage
          onSubmit={this.onSubmit}
          listStage={{ status, definition }} />
        <Navigation />
      </section>
    )
  }
}

ListStagePage.propTypes = {
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  listStage: React.PropTypes.shape({
    status: React.PropTypes.number.isRequired,
    definition: React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ])
  })
}

export default connect(
  ({ listStage }) => ({ listStage })
)(ListStagePage)
