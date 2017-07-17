const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

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

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
