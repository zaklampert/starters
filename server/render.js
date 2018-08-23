import React from 'react'
import ReactDOM from 'react-dom/server'
// import createHistory from 'history/createMemoryHistory'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import routes from '../src/routes'

export default ({ clientStats }) => (req, res) => {
  // const history = createHistory({ initialEntries: [req.path] })
  const chunkNames = flushChunkNames()

  const {
    js,
    styles,
    cssHash,
    scripts,
    stylesheets
  } = flushChunks(clientStats, { chunkNames })

  console.log('PATH', req.path)
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames)
  console.log('SCRIPTS SERVED', scripts)
  console.log('STYLESHEETS SERVED', stylesheets)
  
  const context = {}

  const component = (
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  )

  const html = ReactDOM.renderToString(component)
  const helmet = Helmet.renderStatic()

  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${helmet.style.toString()}
          ${styles}
        </head>
        <body>
          <div id="root">${html}</div>
          ${cssHash}
          ${js}
        </body>
      </html>`
  )
}
