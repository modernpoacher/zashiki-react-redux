import React from 'react'

import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router'

export default function withRouter (Component) {
  return function ComponentWithRouter (props) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
}
