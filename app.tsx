import React, { FC, ReactElement } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import './app.less'

import { routes } from './src/router'

import Layout from './src/layout'

const App: FC = (): ReactElement => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          {routes.map((element, index) => {
            const Component = element.component
            return (
              <Route
                key={index}
                path={element.path}
                render={(props): ReactElement => {
                  const { isAuth } = element
                  const isLogged = Cookies.get('token')
                  const isNext = isAuth && !isLogged
                  return isNext ? (
                    <Redirect to="/login" />
                  ) : (
                    <Layout {...element}>
                      <Component />
                    </Layout>
                  )
                }}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
