import React from 'react'
import Immutable from 'immutable'

import * as RouteMasterActions from '../../actions/route-master'

export default class RouteMaster extends React.Component {
  /**
   *  Create initial 'state' from initial 'props'
   */
  state = (() => {
    const {
      params
    } = this.props

    const {
      alphaStage,
      omegaStage
    } = params

    return {
      now: Immutable.Map({ alphaStage, omegaStage })
    }
  })()

  /**
   *  Interrogate initial props for current Route 'params' (if the component has mounted, the route has changed)
   */
  componentDidMount () { // // console.log('(RouteMaster)componentDidMount()') // eslint-disable-line
    const {
      params,
      dispatch
    } = this.props

    const {
      alphaStage,
      omegaStage
    } = params

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(RouteMasterActions.changeRoute({ resource: { alphaStage, omegaStage } }))
  }

  /**
   *  Interrogate latest 'props' for changes to Route 'params' (the route may have changed, or other props)
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps (props) { // // console.log('(RouteMaster)componentWillReceiveProps()', props) // eslint-disable-line
    const {
      params,
      dispatch
    } = props

    const {
      alphaStage,
      omegaStage
    } = params

    /**
     *  Assign state 'now' to const 'was' (it's an Immutable 'Map')
     */
    const {
      now: was
    } = this.state

    /**
     *  Create const 'now' from params 'alphaStage' and 'omegaStage' (as an Immutable 'Map')
     */
    const now = Immutable.Map({
      alphaStage,
      omegaStage
    })

    if (!Immutable.is(was, now)) {
      /**
       *  Update the state (because 'componentWillReceiveProps()' does not cause a render)
       */
      this.setState({ was, now })

      /**
       *  Dispatch and notify the Node App via Axios
       */
      dispatch(RouteMasterActions.changeRoute({ resource: { alphaStage, omegaStage } }))
    }
  }
}

RouteMaster.propTypes = {
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  routeMaster: React.PropTypes.shape({
    response: React.PropTypes.object,
    resource: React.PropTypes.object,
    state: React.PropTypes.shape({
      count: React.PropTypes.number.isRequired,
      index: React.PropTypes.number.isRequired
    }),
    gears: React.PropTypes.shape({
      reverse: React.PropTypes.object,
      forward: React.PropTypes.object
    }),
    definition: React.PropTypes.oneOfType([
      React.PropTypes.object, React.PropTypes.array
    ])
  })
}

