import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import { change } from '@modernpoacher/zashiki-react-redux/app/actions/zashiki'

const resource = (alpha, omega) => ({
  ...(alpha ? { alpha, ...(omega ? { omega } : {}) } : {})
})

export default class Zashiki extends React.Component {
  /**
   *  Create initial 'state' from initial 'props'
   */
  constructor (props) {
    super(props)

    const {
      params: {
        alpha,
        omega
      }
    } = props

    this.state = {
      now: Immutable.Map(
        resource(alpha, omega)
      )
    }
  }

  /**
   *  Interrogate initial props for current Route 'params' (if the component has mounted, the route has changed)
   */
  componentWillMount () { // console.log('(Zashiki)componentWillMount()') // eslint-disable-line
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
    dispatch(change(resource(alpha, omega)))
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
    const now = Immutable.Map(
      resource(alpha, omega)
    )

    if (!Immutable.is(was, now)) {
      /**
       *  Update the state (because 'componentWillReceiveProps()' does not cause a render)
       */
      this.setState({ was, now })

      /**
       *  Dispatch and notify the Node App via Axios
       */
      dispatch(change(resource(alpha, omega)))
    }
  }
}

Zashiki.propTypes = {
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  zashiki: PropTypes.oneOfType([
    PropTypes.shape({
      exception: PropTypes.object
    }),
    PropTypes.shape({
      response: PropTypes.object,
      resource: PropTypes.object,
      status: PropTypes.number,
      state: PropTypes.shape({
        count: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired
      }),
      gears: PropTypes.shape({
        reverse: PropTypes.object,
        forward: PropTypes.object
      }),
      definition: PropTypes.object
    })
  ])
}
