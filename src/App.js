import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

const App = () => (
  <BrowserRouter>
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  </BrowserRouter>
)

export default App
