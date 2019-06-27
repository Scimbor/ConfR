import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './AppStyles'
import Calendar from './views/Calendar/Calendar.js'
import PrivateRoute from './shared/PrivateRoute/privateRoute'
import Login from './views/Login/login'
import Logout from './views/Logout/logout'
import loginSuccess from './views/Login/login.success'
import { Helmet } from 'react-helmet'
import { PAGE_TITLE } from './constants'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>{PAGE_TITLE}</title>
        </Helmet>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login/success" component={loginSuccess} />
          <PrivateRoute exact path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </Router>
  )
}
