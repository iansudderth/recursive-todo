const express = require('express')
const next = require('next')
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(compression());

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })


  server.get('/todo', (req, res) => {
    return  app.render(req, res, '/todo', req.query)
  })

  server.get('/', (req,res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.get('/api', (req,res) => {
    return res.send('wassup')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
