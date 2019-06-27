import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import deleteToken from '../../shared/TokenStorage/deleteToken.js'

const Logout = props => {
  deleteToken()
  return <Route render={() => <Redirect to={{ pathname: '/login' }} />} />
}
export default Logout
