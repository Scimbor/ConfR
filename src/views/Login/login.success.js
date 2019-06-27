import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import saveToken from '../../shared/TokenStorage/saveToken'

const loginSuccess = token => {
  const lastLocation = sessionStorage.getItem('lastAppLocation')
  const defaultLocation = `/calendar`
  saveToken(token)

  return (
    <Route
      render={() => (
        <Redirect to={`${lastLocation ? lastLocation : defaultLocation}`} />
      )}
    />
  )
}

export default loginSuccess
