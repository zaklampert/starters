import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const history = createHistory()

const render = App => ReactDOM.hydrate(
  <AppContainer>
    <App history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App.js', () => {
    const App = require('./App').default // eslint-ignore-line
    render(App)
  })
}

render(App)
