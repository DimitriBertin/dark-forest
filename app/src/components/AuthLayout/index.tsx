import React from 'react'
import { AuthLayoutProps } from './Type'
import Style from './Style'
import Routes from '../../core/Routes'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function AuthLayout({}: AuthLayoutProps): JSX.Element {
  const RoutingAuth = Routes.auth

  return (
    <div className={Style}>
      <Router>
        <Switch>
          {Object.keys(RoutingAuth).map((name) => (
            <Route path={RoutingAuth[name].url} key={name}>
              {React.createElement(RoutingAuth[name].component)}
            </Route>
          ))}
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default AuthLayout
