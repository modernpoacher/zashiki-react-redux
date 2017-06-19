import React from 'react'
import Immutable from 'immutable'

import * as ZashikiActions from '../../actions/zashiki'

export default class Zashiki extends React.Component {
  /**
   *  Create initial 'state' from initial 'props'
   */
  state = (() => {
    const {
      params: {
        alpha,
        omega
      }
    } = this.props

    return {
      now: Immutable.Map({ alpha, omega })
    }
  })()

  /**
   *  Interrogate initial props for current Route 'params' (if the component has mounted, the route has changed)
   */
  componentDidMount () { // console.log('(Zashiki)componentDidMount()') // eslint-disable-line
    const {
      dispatch,
      params: {
        alpha,
        omega
      }
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    dispatch(ZashikiActions.changeRoute({ resource: { alpha, omega } }))
  }

  /**
   *  Interrogate latest 'props' for changes to Route 'params' (the route may have changed, or other props)
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps (props) { // console.log('(Zashiki)componentWillReceiveProps()', props) // eslint-disable-line
    const {
      dispatch,
      params: {
        alpha,
        omega
      }
    } = props

    /**
     *  Assign state 'now' to const 'was' (it's an Immutable 'Map')
     */
    const {
      now: was
    } = this.state

    /**
     *  Create const 'now' from params 'alpha' and 'omega' (as an Immutable 'Map')
     */
    const now = Immutable.Map({
      alpha,
      omega
    })

    if (!Immutable.is(was, now)) {
      /**
       *  Update the state (because 'componentWillReceiveProps()' does not cause a render)
       */
      this.setState({ was, now })

      /**
       *  Dispatch and notify the Node App via Axios
       */
      dispatch(ZashikiActions.changeRoute({ resource: { alpha, omega } }))
    }
  }
}

Zashiki.propTypes = {
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  zashiki: React.PropTypes.shape({
    response: React.PropTypes.object,
    resource: React.PropTypes.object,
    status: React.PropTypes.number,
    state: React.PropTypes.shape({
      count: React.PropTypes.number.isRequired,
      index: React.PropTypes.number.isRequired
    }),
    gears: React.PropTypes.shape({
      reverse: React.PropTypes.object,
      forward: React.PropTypes.object
    }),
    definition: React.PropTypes.object
  })
}

