import React, { FC, memo, ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'

import { routes } from '../../router'

const Layout: FC = (): ReactElement => {
  return (
    <Switch>
      {routes.map((element) => {
        return (
          <Route
            key={element.path}
            path={element.path}
            component={element.component}
          />
        )
      })}
    </Switch>
  )
}

export default memo(Layout)
