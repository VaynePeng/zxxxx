import React, { FC, ReactElement } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Cookie from 'js-cookie'
import './app.less'

import Login from './src/login'
import Index from './src/index'

const App: FC = (): ReactElement => {
  const isLogin = Cookie.get('token')

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          {!isLogin && <Redirect to="/login" />}
          <Route exact path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
