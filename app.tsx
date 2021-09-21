import React, { FC, ReactElement } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import './app.less'

import Login from './src/pages/login'
import Layout from './src/pages/layout'

const App: FC = (): ReactElement => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              let isLogin = Cookies.get('token')
              return isLogin ? <Layout /> : <Redirect to="/login" />
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
