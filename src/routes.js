import Main from './layouts/Main'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default [
  {
    component: Main,
    exact: true,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      // // NOT FOUND ALWAYS LAST
      {
        component: NotFound
      }
    ]
  }
]
