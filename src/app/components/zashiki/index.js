import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

export const resource = (alpha, omega) => ({
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
      onChange,
      params: {
        alpha,
        omega
      }
    } = this.props

    /**
     *  Dispatch and notify the Node App via Axios
     */
    onChange(resource(alpha, omega))
  }

  /**
   *  Interrogate latest 'props' for changes to Route 'params' (the route may have changed, or other props)
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps (props) { // console.log('(Zashiki)componentWillReceiveProps()', props) // eslint-disable-line
    const {
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

      const {
        onChange
      } = props

      /**
       *  Dispatch and notify the Node App via Axios
       */
      onChange(resource(alpha, omega))
    }
  }
}

Zashiki.propTypes = {
  onChange: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
}
