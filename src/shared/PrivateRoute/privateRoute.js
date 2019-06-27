import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAuthorized from '../../utils/isAuthorized'

const PrivateRoute = ({ component: Component, path }) => {
  onRouteChange(path)

  return (
    <Route
      {...path}
      render={props =>
        isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

const onRouteChange = path => {
  sessionStorage.setItem('lastAppLocation', path)
}

export default PrivateRoute
