import React from 'react' // eslint-disable-line no-unused-vars
import {
  connect
} from 'react-redux'

import * as RouteMasterActions from '../../actions/route-master'

import {
  Navigation
} from '../../components'

import {
  ListStage
} from '../../components/stages'

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
    dispatch(RouteMasterActions.listRoutes())
  }

  render () { // // console.log('(ListStagePage)render()') // eslint-disable-line
    const {
      routeMaster
    } = this.props

    const {
      definition
    } = routeMaster

    return (
      <section>
        <header>
          <h1>List Stage</h1>
        </header>
        <ListStage
          listStage={{ definition }} />
        <Navigation />
      </section>
    )
  }
}

ListStagePage.propTypes = {
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  routeMaster: React.PropTypes.shape({
    definition: React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ])
  })
}

export default connect(
  ({ routeMaster }) => ({ routeMaster })
)(ListStagePage)
