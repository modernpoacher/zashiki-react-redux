import React from 'react'
import Immutable from 'immutable'

import * as RouteMasterActions from '../../actions/route-master'

export default class RouteMaster extends React.Component {
  /**
   *  Create initial state from initial props
   */
  state = (() => {
    const {
      params
    } = this.props

    const {
      stageZero,
      allStages
    } = params

    return {
      now: Immutable.Map({ stageZero, allStages })
    }
  })()

  /**
   *  Interrogate initial props for current Route 'params' (if the component has mounted, the route has changed)
   */
  componentDidMount () { // console.log('(RouteMaster)componentDidMount()') // eslint-disable-line
    const {
      params,
      dispatch
    } = this.props

    const {
      stageZero,
      allStages
    } = params

    /**
     *  Dispatch and notify the Node App
     */
    dispatch(RouteMasterActions.changeRoute({ stageZero, allStages }))
  }

  /**
   *  Interrogate latest props for changes to Route 'params' (the route may have changed, or other props)
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps (props) { // console.log('(RouteMaster)componentWillReceiveProps()', props) // eslint-disable-line
    const {
      params,
      dispatch
    } = props

    const {
      stageZero,
      allStages
    } = params

    /**
     *  Assign state 'now' to const 'was' (it's an Immutable 'Map')
     */
    const {
      now: was
    } = this.state

    /**
     *  Create const 'now' from params 'stageZero' and 'allStages' (as an Immutable 'Map')
     */
    const now = Immutable.Map({
      stageZero,
      allStages
    })

    if (!Immutable.is(was, now)) {
      /**
       *  Update the state (because 'componentWillReceiveProps()' does not cause a render)
       */
      this.setState({ was, now })

      /**
       *  Dispatch and notify the Node App
       */
      dispatch(RouteMasterActions.changeRoute({ stageZero, allStages }))
    }
  }
}

RouteMaster.propTypes = {
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  routeMaster: React.PropTypes.shape({
    stageZero: React.PropTypes.string,
    allStages: React.PropTypes.string,
    definition: React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ])
  })
}

